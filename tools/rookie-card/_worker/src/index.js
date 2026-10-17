// Rookie Card share links. Social crawlers don't run JS, so the tool's
// "Copy link" button uploads the 1200x630 preview it draws, and this Worker
// serves it back as that link's og:image. Free plan friendly: no rendering here.
//   POST /up                          JPEG body -> {id} (content-addressed, stored in KV)
//   GET  /i/<id>.jpg                  the stored preview (static site preview if missing)
//   GET  /c/<handle>?<tool params>&i= HTML with og:/twitter: tags, then sends browsers to the tool
const TOOL = 'https://lorenzen.ai/tools/rookie-card/';
const FALLBACK = 'https://lorenzen.ai/images/previews/rookie-card-preview.png';
const KEYS = ['n', 't', 'no', 'p', 'b', 'th', 'r', 'c']; // share-link params the tool understands
const ORIGINS = /^(https:\/\/lorenzen\.ai|http:\/\/(localhost|127\.0\.0\.1)(:\d+)?)$/;
const MAX_BYTES = 600 * 1024;
const KEEP = 60 * 60 * 24 * 365; // stored previews expire after a year

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const withQ = (base, q) => { const s = q.toString(); return s ? `${base}?${s}` : base; };
const cors = req => {
  const o = req.headers.get('Origin') || '';
  return ORIGINS.test(o) ? {'Access-Control-Allow-Origin': o, 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type', 'Vary': 'Origin'} : {};
};
const json = (req, body, status = 200) => new Response(JSON.stringify(body), {status, headers: {'Content-Type': 'application/json', ...cors(req)}});

async function upload(req, env) {
  if (!ORIGINS.test(req.headers.get('Origin') || '')) return json(req, {error: 'origin'}, 403);
  const buf = await req.arrayBuffer(), b = new Uint8Array(buf);
  if (buf.byteLength > MAX_BYTES || b[0] !== 0xFF || b[1] !== 0xD8 || b[2] !== 0xFF) return json(req, {error: 'expected a JPEG under 600 KB'}, 400);
  const id = [...new Uint8Array(await crypto.subtle.digest('SHA-256', buf))].slice(0, 12).map(x => x.toString(16).padStart(2, '0')).join('');
  // identical cards reuse the stored copy (KV free tier: 1,000 writes/day)
  if (!(await env.CARDS.get(id, {type: 'stream'}))) await env.CARDS.put(id, buf, {expirationTtl: KEEP});
  return json(req, {id});
}

async function image(env, id) {
  const body = await env.CARDS.get(id, {type: 'stream'});
  if (!body) return Response.redirect(FALLBACK, 302);
  return new Response(body, {headers: {'Content-Type': 'image/jpeg', 'Cache-Control': 'public, max-age=31536000, immutable'}});
}

async function share(req, handle, q) {
  const origin = new URL(req.url).origin, id = /^[0-9a-f]{24}$/.test(q.get('i') || '') ? q.get('i') : '';
  const toolUrl = withQ(TOOL, new URLSearchParams([['x', handle], ...KEYS.filter(k => q.has(k)).map(k => [k, q.get(k)])]));
  const img = id ? `${origin}/i/${id}.jpg` : FALLBACK;
  let title = `@${handle}'s Rookie Card`, desc = 'An X profile printed as a baseball card, career stats on the back. Print your own.';
  try {
    const res = await fetch(`https://api.fxtwitter.com/${handle}`, {headers: {'User-Agent': 'RookieCard/1.0 (+https://lorenzen.ai/tools/rookie-card/)'}, cf: {cacheTtl: 3600, cacheEverything: true}});
    const u = (await res.json()).user, name = q.get('n') || u.name;
    if (name) title = `${name} (@${u.screen_name || handle}) · Rookie Card`;
    desc = `${(u.followers || 0).toLocaleString('en-US')} followers, ${(u.tweets || 0).toLocaleString('en-US')} posts, scouting report on the back. Print your own rookie card.`;
  } catch {}
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${esc(title)}</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Rookie Card · @PlayATW Series '26">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${esc(req.url)}">
<meta property="og:image" content="${esc(img)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(title)}: an X profile as a baseball card">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@PlayATW">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${esc(img)}">
<meta http-equiv="refresh" content="0;url=${esc(toolUrl)}">
<script>location.replace(${JSON.stringify(toolUrl).replace(/</g, '\\u003c')})</script>
</head><body style="font-family:sans-serif;background:#0b1430;color:#fff;padding:24px"><a style="color:#fff" href="${esc(toolUrl)}">Open the card</a></body></html>`;
  return new Response(html, {headers: {'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=3600'}});
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (url.pathname === '/up') {
      if (req.method === 'OPTIONS') return new Response(null, {status: 204, headers: cors(req)});
      if (req.method === 'POST') return upload(req, env);
    }
    let m;
    if ((m = /^\/i\/([0-9a-f]{24})\.jpg$/.exec(url.pathname))) return image(env, m[1]);
    if ((m = /^\/c\/([A-Za-z0-9_]{1,15})\/?$/.exec(url.pathname))) return share(req, m[1], url.searchParams);
    return Response.redirect(TOOL, 302);
  },
};

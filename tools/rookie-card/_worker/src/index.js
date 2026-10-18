// Rookie Card share links. Social crawlers don't run JS, so the tool's
// "Copy link" button uploads the 1200x630 preview it draws, and this Worker
// serves it back as that link's og:image. Free plan friendly: no rendering here.
//   POST /up?x=<handle>&<tool params>  PNG body -> {id}. The handle is checked against
//                                      FxTwitter here; title/description come from that
//                                      profile, never from the client. Only the image does.
//   GET  /c/<id>                       HTML with og:/twitter: tags, then sends browsers to the tool
//   GET  /i/<id>.png                   the stored preview
// Ids are content hashes of image + handle + params: an upload can't overwrite
// anyone else's link, and a link never changes. Missing ids get the static preview.
const TOOL = 'https://lorenzen.ai/tools/rookie-card/';
const FALLBACK = 'https://lorenzen.ai/images/previews/rookie-card-preview.png?v=2';
const KEYS = ['n', 't', 'no', 'p', 'b', 'th', 'r', 'c']; // share-link params the tool understands
const ORIGINS = /^(https:\/\/lorenzen\.ai|http:\/\/(localhost|127\.0\.0\.1)(:\d+)?)$/;
const MAX_BYTES = 1.5 * 1024 * 1024;
const KEEP = 60 * 60 * 24 * 90; // stored previews expire after 90 days

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const cors = req => {
  const o = req.headers.get('Origin') || '';
  return ORIGINS.test(o) ? {'Access-Control-Allow-Origin': o, 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type', 'Vary': 'Origin'} : {};
};
const json = (req, body, status = 200) => new Response(JSON.stringify(body), {status, headers: {'Content-Type': 'application/json', ...cors(req)}});
const toolUrl = (handle, q) => `${TOOL}?${new URLSearchParams([['x', handle], ...q])}`;

// PNG signature, then the IHDR chunk's width/height
function pngSize(b) {
  const sig = [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A];
  if (b.length < 24 || sig.some((v, i) => b[i] !== v)) return null;
  const v = new DataView(b.buffer, b.byteOffset);
  return [v.getUint32(16), v.getUint32(20)];
}

async function upload(req, env) {
  if (!ORIGINS.test(req.headers.get('Origin') || '')) return json(req, {error: 'origin'}, 403);
  const {success} = await env.UPLOADS.limit({key: req.headers.get('CF-Connecting-IP') || 'unknown'});
  if (!success) return json(req, {error: 'slow down'}, 429);
  const q = new URL(req.url).searchParams, handle = q.get('x') || '';
  if (!/^[A-Za-z0-9_]{1,15}$/.test(handle)) return json(req, {error: 'handle'}, 400);
  if (Number(req.headers.get('Content-Length') || 0) > MAX_BYTES) return json(req, {error: 'too big'}, 413);
  const buf = await req.arrayBuffer(), size = pngSize(new Uint8Array(buf));
  if (buf.byteLength > MAX_BYTES || !size || size[0] !== 1200 || size[1] !== 630) return json(req, {error: 'expected a 1200x630 PNG under 1.5 MB'}, 400);

  const res = await fetch(`https://api.fxtwitter.com/${handle}`, {headers: {'User-Agent': 'RookieCard/1.0 (+https://lorenzen.ai/tools/rookie-card/)'}, cf: {cacheTtl: 3600, cacheEverything: true}});
  const u = res.ok && (await res.json().catch(() => ({}))).user;
  if (!u) return json(req, {error: 'profile not found'}, 404);
  const h = u.screen_name || handle;
  let params = KEYS.filter(k => q.has(k)).map(k => [k, q.get(k).slice(0, k === 'r' ? 220 : 40)]);
  const meta = {
    h, t: `${u.name || '@' + h} (@${h}) · Rookie Card`,
    d: `${(u.followers || 0).toLocaleString('en-US')} followers, ${(u.tweets || 0).toLocaleString('en-US')} posts, scouting report on the back. Print your own rookie card.`,
  };
  // KV metadata is capped at 1 KB; the scouting report is the only long field
  if (JSON.stringify({...meta, q: params}).length > 1000) params = params.filter(([k]) => k !== 'r');
  meta.q = params;

  const enc = new TextEncoder().encode('\n' + JSON.stringify([h.toLowerCase(), params]));
  const all = new Uint8Array(buf.byteLength + enc.length); all.set(new Uint8Array(buf)); all.set(enc, buf.byteLength);
  const id = [...new Uint8Array(await crypto.subtle.digest('SHA-256', all))].slice(0, 12).map(x => x.toString(16).padStart(2, '0')).join('');
  // identical uploads reuse the stored copy (KV free tier: 1,000 writes/day)
  const existing = await env.CARDS.get(id, {type: 'stream'});
  if (existing) await existing.cancel();
  else await env.CARDS.put(id, buf, {expirationTtl: KEEP, metadata: meta});
  return json(req, {id});
}

async function image(env, id) {
  const body = await env.CARDS.get(id, {type: 'stream'});
  if (!body) return Response.redirect(FALLBACK, 302);
  return new Response(body, {headers: {'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=86400'}});
}

async function share(req, env, id) {
  const {value, metadata: m} = await env.CARDS.getWithMetadata(id, {type: 'stream'});
  if (value) await value.cancel();
  if (!m) return Response.redirect(TOOL, 302);
  const dest = toolUrl(m.h, m.q), img = `${new URL(req.url).origin}/i/${id}.png`;
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${esc(m.t)}</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="${esc(m.d)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Rookie Card · @PlayATW Series '26">
<meta property="og:title" content="${esc(m.t)}">
<meta property="og:description" content="${esc(m.d)}">
<meta property="og:url" content="${esc(req.url)}">
<meta property="og:image" content="${esc(img)}">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(m.t)}: an X profile as a baseball card">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@PlayATW">
<meta name="twitter:title" content="${esc(m.t)}">
<meta name="twitter:description" content="${esc(m.d)}">
<meta name="twitter:image" content="${esc(img)}">
<meta http-equiv="refresh" content="0;url=${esc(dest)}">
<script>location.replace(${JSON.stringify(dest).replace(/</g, '\\u003c')})</script>
</head><body style="font-family:sans-serif;background:#0b1430;color:#fff;padding:24px"><a style="color:#fff" href="${esc(dest)}">Open the card</a></body></html>`;
  return new Response(html, {headers: {'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=86400'}});
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (url.pathname === '/up') {
      if (req.method === 'OPTIONS') return new Response(null, {status: 204, headers: cors(req)});
      if (req.method === 'POST') return upload(req, env);
    }
    let m;
    if ((m = /^\/i\/([0-9a-f]{24})\.png$/.exec(url.pathname))) return image(env, m[1]);
    if ((m = /^\/c\/([0-9a-f]{24})\/?$/.exec(url.pathname))) return share(req, env, m[1]);
    // links from the first version (/c/<handle>?i=...) go straight to that handle's card
    if ((m = /^\/c\/([A-Za-z0-9_]{1,15})\/?$/.exec(url.pathname)))
      return Response.redirect(toolUrl(m[1], KEYS.filter(k => url.searchParams.has(k)).map(k => [k, url.searchParams.get(k)])), 302);
    return Response.redirect(TOOL, 302);
  },
};

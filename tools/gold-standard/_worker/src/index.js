/**
 * Gold Standard — live-data Worker for lorenzen.ai/tools/gold-standard
 *
 * GET / returns JSON: { generatedAt, gold, copper, cow, farmland, allLive }
 * Each feed is { value, date, year, source, status: "live" | "fallback" }.
 *
 *   gold      GOLD_API_URL (var)  — keyless spot feed, refreshed every 5 min
 *   copper    IMF copper $/metric ton via FRED PCOPPUSDM public CSV (monthly) — no key
 *   cow       USDA NASS Quick Stats, milk-cow price received $/head — needs USDA_API_KEY
 *   farmland  USDA NASS Quick Stats, ag land incl. buildings $/acre — needs USDA_API_KEY
 *
 * Vars / secrets: GOLD_API_URL, GOLD_API_KEY (optional), GOLD_JSON_PATH (optional), USDA_API_KEY (optional secret).
 * Any feed that fails returns its dated fallback with status "fallback"; the page ignores fallbacks.
 */

// Keep in step with the reference values on the page.
const FALLBACK = {
  gold:     { value: 3628,  date: "2026-11-19", year: 2026, source: "Dated reference" },
  cow:      { value: 3160,  date: "2026-10",    year: 2026, source: "USDA NASS reference" },
  farmland: { value: 4500,  date: "2026",       year: 2026, source: "USDA NASS reference" },
  copper:   { value: 14473.06, date: "2026-09", year: 2026, source: "IMF via FRED reference" }
};

// Per-feed cache inside the isolate, so a traffic spike doesn't hammer upstream APIs.
const TTL = { gold: 5 * 60e3, copper: 6 * 3600e3, cow: 12 * 3600e3, farmland: 12 * 3600e3 };
const memo = {};
async function cached(key, fn) {
  const hit = memo[key];
  if (hit && Date.now() - hit.at < TTL[key]) return hit.value;
  const value = await fn();
  if (value.status === "live") memo[key] = { at: Date.now(), value };
  return value;
}

const result = (value, date, year, source) => ({ value: Number(value), date, year: Number(year), source, status: "live" });
const fallback = key => ({ ...FALLBACK[key], status: "fallback" });
const num = v => (v === null || v === undefined) ? NaN : Number(String(v).replace(/,/g, "").trim());
const getPath = (obj, path) => path.split(".").reduce((v, k) => v?.[k], obj);

async function fetchGold(env) {
  if (!env.GOLD_API_URL) return fallback("gold");
  try {
    const headers = { accept: "application/json" };
    if (env.GOLD_API_KEY) headers.authorization = `Bearer ${env.GOLD_API_KEY}`;
    const r = await fetch(env.GOLD_API_URL, { headers });
    if (!r.ok) throw new Error(`gold HTTP ${r.status}`);
    const d = await r.json();
    const raw = env.GOLD_JSON_PATH ? getPath(d, env.GOLD_JSON_PATH)
      : d.price ?? d.gold ?? d.XAUUSD ?? d?.data?.price ?? d?.data?.gold;
    const val = num(raw);
    if (!Number.isFinite(val) || val < 100 || val > 100000) throw new Error("gold value out of range");
    const when = d.updatedAt ? new Date(d.updatedAt) : new Date();
    return result(val, when.toISOString().slice(0, 10), when.getUTCFullYear(), "Spot gold · gold-api.com");
  } catch (e) { return fallback("gold"); }
}

async function fetchCopper() {
  try {
    const r = await fetch("https://fred.stlouisfed.org/graph/fredgraph.csv?id=PCOPPUSDM");
    if (!r.ok) throw new Error("copper HTTP");
    const rows = (await r.text()).trim().split(/\r?\n/);
    for (let i = rows.length - 1; i >= 1; i--) {
      const [date, v] = rows[i].split(",");
      if (v !== "" && Number.isFinite(num(v)) && num(v) > 1000) return result(num(v), date.slice(0, 7), date.slice(0, 4), "IMF via FRED · PCOPPUSDM");
    }
    throw new Error("copper parse");
  } catch (e) { return fallback("copper"); }
}

// Quick Stats period ordering: monthly values, then the full-year value, which is the most complete.
const PERIOD = { JAN:1, FEB:2, MAR:3, APR:4, MAY:5, JUN:6, JUL:7, AUG:8, SEP:9, OCT:10, NOV:11, DEC:12, YEAR:13, "MARKETING YEAR":13 };

async function fetchUSDA(env, kind) {
  if (!env.USDA_API_KEY) return fallback(kind);
  const spec = kind === "cow"
    ? { short_desc: "CATTLE, COWS, MILK - PRICE RECEIVED, MEASURED IN $ / HEAD", label: "USDA NASS · milk cow price received" }
    : { short_desc: "AG LAND, INCL BUILDINGS - ASSET VALUE, MEASURED IN $ / ACRE", label: "USDA NASS · farm real estate value" };
  try {
    const u = new URL("https://quickstats.nass.usda.gov/api/api_GET/");
    u.searchParams.set("key", env.USDA_API_KEY);
    u.searchParams.set("short_desc", spec.short_desc);
    u.searchParams.set("agg_level_desc", "NATIONAL");
    u.searchParams.set("year__GE", String(new Date().getUTCFullYear() - 2));
    u.searchParams.set("format", "JSON");
    const r = await fetch(u);
    if (!r.ok) throw new Error(`USDA HTTP ${r.status}`);
    const rows = ((await r.json()).data || [])
      .map(x => ({ v: num(x.Value), y: +x.year, p: PERIOD[(x.reference_period_desc || "").toUpperCase()] ?? 0, label: x.reference_period_desc }))
      .filter(x => Number.isFinite(x.v) && x.v > 0 && Number.isFinite(x.y))
      .sort((a, b) => b.y - a.y || b.p - a.p);
    const q = rows[0];
    if (!q) throw new Error("no USDA rows");
    const date = q.p >= 1 && q.p <= 12 ? `${q.y}-${String(q.p).padStart(2, "0")}` : String(q.y);
    return result(q.v, date, q.y, spec.label);
  } catch (e) { return fallback(kind); }
}

const CORS = { "access-control-allow-origin": "*", "access-control-allow-methods": "GET, OPTIONS" };

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { headers: CORS });
    if (request.method !== "GET") return new Response("Method not allowed", { status: 405, headers: CORS });

    const [gold, copper, cow, farmland] = await Promise.all([
      cached("gold", () => fetchGold(env)),
      cached("copper", () => fetchCopper()),
      cached("cow", () => fetchUSDA(env, "cow")),
      cached("farmland", () => fetchUSDA(env, "farmland"))
    ]);
    const body = { generatedAt: new Date().toISOString(), gold, copper, cow, farmland,
      allLive: [gold, copper, cow, farmland].every(x => x.status === "live") };
    return new Response(JSON.stringify(body, null, 2), {
      headers: { ...CORS, "content-type": "application/json; charset=utf-8", "cache-control": "public, max-age=300" }
    });
  }
};

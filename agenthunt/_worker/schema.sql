-- AgentHunt D1 schema. Apply with:
--   npx wrangler d1 execute agenthunt --remote --file=schema.sql
-- No photos, coordinates or addresses are ever stored. Only names, finds and scores.

CREATE TABLE IF NOT EXISTS runs (
  id              TEXT PRIMARY KEY,          -- r_ + 20 chars
  hunt            TEXT NOT NULL,             -- hunt slug, e.g. losangeles
  token_hash      TEXT NOT NULL,             -- sha256 of the run token (the token itself is never stored)
  player          TEXT NOT NULL,             -- sanitized: A-Z 0-9 space, max 12
  agent           TEXT,
  proof           TEXT,                      -- proof detail id chosen at start
  status          TEXT NOT NULL DEFAULT 'active',   -- active | complete
  created_at      INTEGER NOT NULL,
  updated_at      INTEGER NOT NULL,
  completed_at    INTEGER,
  found           INTEGER,
  score           INTEGER,                   -- computed by the server, never submitted
  ranked          INTEGER,
  unranked_reason TEXT,
  ip_hash         TEXT                       -- salted sha256, used only for rate limiting
);

CREATE INDEX IF NOT EXISTS runs_board      ON runs (status, ranked, score DESC, completed_at);
CREATE INDEX IF NOT EXISTS runs_hunt_board ON runs (hunt, status, ranked, score DESC, completed_at);

CREATE TABLE IF NOT EXISTS run_finds (
  run_id   TEXT NOT NULL,
  find_id  TEXT NOT NULL,
  grade    TEXT NOT NULL,                    -- GREAT | GOOD
  proof    INTEGER NOT NULL DEFAULT 0,
  points   INTEGER NOT NULL,
  PRIMARY KEY (run_id, find_id)
);

CREATE TABLE IF NOT EXISTS rate_limits (
  bucket     TEXT PRIMARY KEY,               -- kind:iphash:window_start
  count      INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);

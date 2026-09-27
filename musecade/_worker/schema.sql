-- Musecade D1 schema. Apply with:
--   npx wrangler d1 execute musecade --remote --file=schema.sql

CREATE TABLE IF NOT EXISTS runs (
  id              TEXT PRIMARY KEY,          -- r_ + 20 random chars
  game            TEXT NOT NULL,             -- game slug, e.g. theblackroad
  token_hash      TEXT NOT NULL,             -- sha256 of the run token (the token itself is never stored)
  player          TEXT NOT NULL,             -- sanitized: A-Z 0-9 space, max 12
  path            TEXT NOT NULL,
  agent           TEXT,
  status          TEXT NOT NULL DEFAULT 'active',   -- active | complete
  act             INTEGER NOT NULL DEFAULT 1,
  created_at      INTEGER NOT NULL,
  updated_at      INTEGER NOT NULL,
  completed_at    INTEGER,
  ending          TEXT,
  died            INTEGER,
  survived        INTEGER,
  score           INTEGER,                   -- computed by the server, never submitted
  ranked          INTEGER,
  unranked_reason TEXT,
  ip_hash         TEXT                       -- salted sha256, used only for rate limiting and abuse review
);

CREATE INDEX IF NOT EXISTS runs_board      ON runs (status, ranked, score DESC, completed_at);
CREATE INDEX IF NOT EXISTS runs_game_board ON runs (game, status, ranked, score DESC, completed_at);
CREATE INDEX IF NOT EXISTS runs_completed  ON runs (status, completed_at);

CREATE TABLE IF NOT EXISTS run_events (
  run_id     TEXT NOT NULL,
  event_id   TEXT NOT NULL,
  seq        INTEGER NOT NULL,
  created_at INTEGER NOT NULL,
  PRIMARY KEY (run_id, event_id)            -- duplicate prevention at the storage layer
);

CREATE TABLE IF NOT EXISTS rate_limits (
  bucket     TEXT PRIMARY KEY,               -- kind:iphash:window_start
  count      INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);

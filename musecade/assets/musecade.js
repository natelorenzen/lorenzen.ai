// MUSECADE front-end: copy, sound, attract mode, boot screen, high scores, stats.
// No dependencies. Leaderboard data comes only from the live API in /musecade/config.json.
(() => {
  "use strict";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = {
    get(k, s = localStorage) { try { return s.getItem(k); } catch { return null; } },
    set(k, v, s = localStorage) { try { s.setItem(k, v); } catch { /* private mode */ } },
  };
  const fmt = (n) => (n == null ? "—" : Number(n).toLocaleString("en-US"));

  // ------------------------------------------------------------ sound (off by default, synthesized)
  let audio = null;
  let soundOn = store.get("musecade.sound") === "on";
  function tone(freq, start, dur, type = "square", vol = 0.05) {
    if (!soundOn) return;
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    const t = audio.currentTime + start;
    const o = audio.createOscillator();
    const g = audio.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(audio.destination);
    o.start(t);
    o.stop(t + dur + 0.02);
  }
  const sfx = {
    boot: () => [262, 330, 392, 523].forEach((f, i) => tone(f, i * 0.07, 0.12)),
    select: () => tone(880, 0, 0.05),
    copy: () => { tone(988, 0, 0.06); tone(1319, 0.07, 0.1); },
    summon: () => [392, 523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.06, 0.14, "square", 0.06)),
    highscore: () => [523, 659, 784, 659, 1047].forEach((f, i) => tone(f, i * 0.09, 0.12, "triangle", 0.07)),
  };
  function paintSound() {
    $$("[data-sound-toggle]").forEach((b) => {
      b.setAttribute("aria-pressed", String(soundOn));
      b.textContent = soundOn ? "SOUND: ON" : "SOUND: OFF";
    });
  }
  $$("[data-sound-toggle]").forEach((b) =>
    b.addEventListener("click", () => {
      soundOn = !soundOn;
      store.set("musecade.sound", soundOn ? "on" : "off");
      paintSound();
      sfx.boot();
    })
  );
  paintSound();

  // ------------------------------------------------------------ toast + flash + copy
  const toast = $(".toast");
  let toastTimer;
  function say(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }
  function flash() {
    const f = $(".flash");
    if (!f || reduced) return;
    f.classList.remove("go");
    void f.offsetWidth;
    f.classList.add("go");
  }
  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch { ok = false; }
      ta.remove();
      return ok;
    }
  }
  $$("[data-copy]").forEach((el) =>
    el.addEventListener("click", async (e) => {
      e.preventDefault();
      const ok = await copy(el.getAttribute("data-copy"));
      sfx.copy();
      say(ok ? el.getAttribute("data-copied") || "COPIED." : "COPY FAILED. SELECT THE TEXT AND COPY IT BY HAND.");
    })
  );
  $$("[data-summon]").forEach((el) =>
    el.addEventListener("click", async (e) => {
      e.preventDefault();
      const cmd = el.getAttribute("data-summon");
      const ok = await copy(cmd);
      flash();
      sfx.summon();
      say(ok ? `${cmd} COPIED. PASTE IT INTO MUSE.` : `TYPE ${cmd} IN MUSE.`);
    })
  );

  // ------------------------------------------------------------ boot screen (once per session)
  const boot = $(".boot");
  if (boot) {
    const seen = store.get("musecade.booted", sessionStorage);
    if (reduced || seen) {
      boot.remove();
    } else {
      store.set("musecade.booted", "1", sessionStorage);
      const pre = $("pre", boot);
      const lines = pre.textContent.split("\n");
      pre.textContent = "";
      let i = 0;
      const done = () => { boot.classList.add("done"); setTimeout(() => boot.remove(), 400); };
      const step = () => {
        if (i < lines.length) { pre.textContent += (i ? "\n" : "") + lines[i++]; setTimeout(step, 120); }
        else setTimeout(done, 350);
      };
      boot.addEventListener("click", done);
      document.addEventListener("keydown", done, { once: true });
      step();
    }
  }

  // ------------------------------------------------------------ attract mode
  if (!reduced) {
    const logo = $(".logo");
    if (logo) {
      const flick = () => {
        logo.classList.remove("flicker");
        void logo.offsetWidth;
        logo.classList.add("flicker");
        setTimeout(flick, 7000 + Math.random() * 9000);
      };
      setTimeout(flick, 4000);
    }
    const attract = $("[data-attract]");
    if (attract) {
      const msgs = JSON.parse(attract.getAttribute("data-attract"));
      let k = 0;
      attract.classList.add("on");
      setInterval(() => { attract.textContent = msgs[(k = (k + 1) % msgs.length)]; }, 5200);
    }
    $$(".cabinet.live").forEach((c) => c.classList.add("pulse"));
    $$(".soon").forEach((s) => s.classList.add("on"));
  }

  // ------------------------------------------------------------ console transcript (typed once)
  const tx = $("[data-typewriter]");
  if (tx && !reduced && "IntersectionObserver" in window) {
    const lines = $$(".tx-line", tx);
    lines.forEach((l) => (l.style.visibility = "hidden"));
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      lines.forEach((l, i) => setTimeout(() => (l.style.visibility = "visible"), 260 * i));
    }, { threshold: 0.35 });
    io.observe(tx);
  }

  // ------------------------------------------------------------ high scores + stats
  let apiBase = null;
  const configReady = fetch("/musecade/config.json", { cache: "no-cache" })
    .then((r) => (r.ok ? r.json() : {}))
    .then((c) => { apiBase = (c.api_base || "").replace(/\/+$/, "") || null; })
    .catch(() => { apiBase = null; });

  async function api(path) {
    await configReady;
    if (!apiBase) throw new Error("offline");
    const r = await fetch(apiBase + path);
    if (!r.ok) throw new Error("http " + r.status);
    return r.json();
  }

  function boardMessage(board, strong, sub) {
    const body = $(".board-body", board);
    body.innerHTML = "";
    const div = document.createElement("div");
    div.className = "board-msg";
    const b = document.createElement("b");
    b.textContent = strong;
    div.append(b, document.createTextNode(sub));
    body.appendChild(div);
  }

  function renderRows(board, rows) {
    const body = $(".board-body", board);
    const showGame = board.getAttribute("data-fixed-game") == null;
    const table = document.createElement("table");
    table.className = "hs";
    table.innerHTML =
      `<thead><tr><th>RANK</th><th>PLAYER</th>${showGame ? "<th>GAME</th>" : "<th>ENDING</th>"}<th>PATH</th><th class="num">SCORE</th></tr></thead>`;
    const tb = document.createElement("tbody");
    rows.forEach((r) => {
      const tr = document.createElement("tr");
      const cells = [
        String(r.rank).padStart(2, "0"),
        r.player + (r.died ? " †" : ""),
        showGame ? (r.game_title || r.game).toUpperCase() : r.ending_title || "",
        r.path,
        fmt(r.score),
      ];
      cells.forEach((v, i) => {
        const td = document.createElement("td");
        td.textContent = v;
        if (i === 0) td.className = "rank";
        if (i === 4) td.className = "num";
        tr.appendChild(td);
      });
      tb.appendChild(tr);
    });
    table.appendChild(tb);
    body.innerHTML = "";
    body.appendChild(table);
  }

  $$("[data-board]").forEach((board) => {
    const fixedGame = board.getAttribute("data-fixed-game");
    const state = { period: "all", game: fixedGame || "all", touched: false };
    let loadedOnce = false;

    async function load() {
      $$("[data-period]", board).forEach((t) => t.setAttribute("aria-pressed", String(t.dataset.period === state.period)));
      $$("[data-game]", board).forEach((t) => t.setAttribute("aria-pressed", String(t.dataset.game === state.game)));
      const cap = $(".board-caption", board);
      if (cap) cap.textContent = state.period === "week" ? "THIS WEEK" : "ALL TIME";
      try {
        const data = await api(`/leaderboard?game=${encodeURIComponent(state.game)}&period=${state.period}&limit=10`);
        if (!data.rows.length) {
          boardMessage(board, state.period === "week" ? "NO RUNS THIS WEEK." : "NO RUNS RECORDED YET.", "BE THE FIRST NAME ON THE BOARD.");
        } else {
          renderRows(board, data.rows);
          if (loadedOnce && state.touched) sfx.highscore();
        }
      } catch (e) {
        boardMessage(
          board,
          e.message === "offline" ? "HIGH SCORE SYSTEM OFFLINE." : "HIGH SCORE SYSTEM NOT RESPONDING.",
          e.message === "offline" ? "THE LEADERBOARD CONNECTS WHEN THE ARCADE'S BACKEND GOES LIVE. RUNS ARE SCORED LOCALLY UNTIL THEN." : "TRY AGAIN SOON."
        );
      }
      loadedOnce = true;
    }

    $$("[data-period]", board).forEach((t) =>
      t.addEventListener("click", () => { state.period = t.dataset.period; state.touched = true; sfx.select(); load(); })
    );
    $$("[data-game]", board).forEach((t) =>
      t.addEventListener("click", () => { state.game = t.dataset.game; state.touched = true; sfx.select(); load(); })
    );
    load();

    // attract mode: cycle ALL TIME / THIS WEEK until someone touches the board
    if (!reduced) {
      setInterval(() => {
        if (state.touched || document.hidden) return;
        state.period = state.period === "all" ? "week" : "all";
        load();
      }, 9000);
    }
  });

  $$("[data-stats]").forEach(async (wrap) => {
    const game = wrap.getAttribute("data-stats") || "all";
    const set = (key, value, sub) => {
      const dd = $(`[data-stat="${key}"]`, wrap);
      if (!dd) return;
      dd.textContent = value;
      if (sub) {
        const s = document.createElement("span");
        s.className = "sub";
        s.textContent = sub;
        dd.appendChild(s);
      }
    };
    try {
      const s = await api(`/stats?game=${encodeURIComponent(game)}`);
      set("played", fmt(s.adventures_played));
      set("survived", fmt(s.players_survived));
      set("high", s.high_score == null ? "—" : fmt(s.high_score), s.high_score_player || "");
      set("rarest", s.rarest_ending ? s.rarest_ending.title : "—", s.rarest_ending ? `SEEN ${s.rarest_ending.count}×` : "NO ENDINGS YET");
    } catch {
      ["played", "survived", "high", "rarest"].forEach((k) => set(k, "—", "AWAITING LINK"));
    }
  });
})();

// AGENTHUNT front-end: copy, sound, attract mode, boot screen, pixel art, leaderboard, stats.
// No dependencies. Leaderboard data comes only from the live API in /agenthunt/config.json.
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
  let soundOn = store.get("agenthunt.sound") === "on";
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
    boot: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.07, 0.12)),
    select: () => tone(988, 0, 0.05),
    copy: () => { tone(1047, 0, 0.06); tone(1397, 0.07, 0.1); },
    shutter: () => { tone(1800, 0, 0.03, "square", 0.04); tone(600, 0.04, 0.06, "triangle", 0.06); [659, 880, 1175].forEach((f, i) => tone(f, 0.12 + i * 0.07, 0.12, "square", 0.05)); },
    highscore: () => [659, 784, 988, 784, 1319].forEach((f, i) => tone(f, i * 0.09, 0.12, "triangle", 0.07)),
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
      store.set("agenthunt.sound", soundOn ? "on" : "off");
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
      sfx.shutter();
      say(ok ? `${cmd} COPIED. PASTE IT INTO MUSE.` : `TYPE ${cmd} IN MUSE.`);
    })
  );

  // ------------------------------------------------------------ boot screen (once per session)
  const boot = $(".boot");
  if (boot) {
    const seen = store.get("agenthunt.booted", sessionStorage);
    if (reduced || seen) {
      boot.remove();
    } else {
      store.set("agenthunt.booted", "1", sessionStorage);
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
  }

  // ------------------------------------------------------------ judge transcript (typed once)
  const tx = $("[data-typewriter]");
  if (tx && !reduced && "IntersectionObserver" in window) {
    const lines = $$(".tx-line", tx);
    lines.forEach((l) => (l.style.visibility = "hidden"));
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      lines.forEach((l, i) => setTimeout(() => (l.style.visibility = "visible"), 300 * i));
    }, { threshold: 0.35 });
    io.observe(tx);
  }

  // ------------------------------------------------------------ pixel art
  // Every scene is drawn on a tiny grid (80x50, the banner 200x48) with whole-pixel
  // rectangles only, then scaled up with image-rendering: pixelated.
  const C = {
    ink: "#272140", white: "#ffffff", cloud: "#f4f8ff",
    sky1: "#8cc8ff", sky2: "#a9d6ff", sky3: "#c6e4ff", sky4: "#e2f1ff",
    dusk1: "#ff9db4", dusk2: "#ffb08e", dusk3: "#ffc978", dusk4: "#ffe29a",
    sun: "#ffd24a", sunhi: "#fff1a8", coral: "#ff5a4f", orange: "#ff8a3d", red: "#e2452f",
    sea1: "#3a8fe0", sea2: "#58a8f0", sea3: "#7cc0ff", foam: "#eaf6ff",
    sand: "#f3d9a0", sand2: "#e6c47f", grass: "#6cc36a", grass2: "#4aa55a", hill: "#9ccf7a",
    bldg1: "#5b6b9a", bldg2: "#7482b3", bldg3: "#96a3cf", win: "#ffe58a",
    road: "#6d6a80", line: "#ffd24a", brown: "#9a6a44", brown2: "#7a4f33", palm: "#3f8a4d",
    pink: "#ff8fb1", lilac: "#b9a6ff", mint: "#6fe0b0", yellow: "#ffd24a", steel: "#a7b0c8",
    wall: "#ffe7c2", wall2: "#f7d7a8", frame: "#b98552", rainsky: "#8fa7c4", rain: "#dcebff",
  };

  function rng(seed) {
    return () => { seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }

  function painter(ctx, W, H) {
    const R = (c, x, y, w = 1, h = 1) => { ctx.fillStyle = c; ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h)); };
    return {
      R,
      bands(colors, y0 = 0, y1 = H) {
        const h = (y1 - y0) / colors.length;
        colors.forEach((c, i) => R(c, 0, y0 + Math.floor(i * h), W, Math.ceil(h) + 1));
      },
      disc(c, cx, cy, r) {
        for (let dy = -r; dy <= r; dy++) {
          const w = Math.floor(Math.sqrt(r * r - dy * dy) + 0.35);
          R(c, cx - w, cy + dy, w * 2 + 1, 1);
        }
      },
      ring(c, cx, cy, r) {
        for (let a = 0; a < 360; a += 3) {
          const t = (a * Math.PI) / 180;
          R(c, cx + Math.round(Math.cos(t) * r), cy + Math.round(Math.sin(t) * r));
        }
      },
      line(c, x0, y0, x1, y1) {
        const n = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0)) || 1;
        for (let i = 0; i <= n; i++) R(c, x0 + ((x1 - x0) * i) / n, y0 + ((y1 - y0) * i) / n);
      },
      cloud(x, y, w = 12) {
        R(C.cloud, x + 2, y, w - 4, 1);
        R(C.cloud, x, y + 1, w, 2);
        R(C.white, x + 3, y - 1, Math.max(2, w / 3), 1);
      },
      hills(c, base, amp, freq, phase = 0) {
        for (let x = 0; x < W; x++) {
          const h = Math.round(amp * (0.6 + 0.4 * Math.sin(x * freq + phase)) + (amp / 3) * Math.sin(x * freq * 2.7 + phase * 2));
          R(c, x, base - h, 1, H - base + h);
        }
      },
      building(x, w, h, base, c, rand, winColor = C.win) {
        R(c, x, base - h, w, h);
        for (let yy = base - h + 2; yy < base - 2; yy += 3)
          for (let xx = x + 1; xx < x + w - 1; xx += 2)
            if (rand() < 0.42) R(winColor, xx, yy);
      },
      palm(x, base, h) {
        for (let i = 0; i < h; i++) R(C.brown2, x + Math.round(Math.sin(i / 5) * 1.2), base - i);
        const tx = x + Math.round(Math.sin((h - 1) / 5) * 1.2), ty = base - h;
        for (let i = 1; i <= 5; i++) {
          R(C.palm, tx - i, ty + Math.floor(i / 2));
          R(C.palm, tx + i, ty + Math.floor(i / 2));
        }
        for (let i = 1; i <= 3; i++) { R(C.palm, tx - i, ty - 1 + i * 0); R(C.palm, tx + i, ty - 1); }
        R(C.grass2, tx, ty - 2, 1, 2);
        R(C.brown, tx - 1, ty + 1, 1, 1); R(C.brown, tx + 1, ty + 1, 1, 1);
      },
      water(y, colors = [C.sea3, C.sea2, C.sea1], rand = rng(7)) {
        const h = (H - y) / colors.length;
        colors.forEach((c, i) => R(c, 0, y + Math.floor(i * h), W, Math.ceil(h) + 1));
        for (let i = 0; i < W / 3; i++) R(C.foam, Math.floor(rand() * W), y + 1 + Math.floor(rand() * (H - y - 1)), 2 + Math.floor(rand() * 3), 1);
      },
    };
  }

  // A few reusable landmarks, drawn from their base point.
  function eiffel(p, cx, base, h, c = C.brown2) {
    for (let i = 0; i < h; i++) {
      const t = i / h;
      const half = Math.max(0, Math.round((1 - t) ** 2.2 * h * 0.42));
      if (t < 0.28) { p.R(c, cx - half, base - i, 2, 1); p.R(c, cx + half - 1, base - i, 2, 1); }
      else p.R(c, cx - half, base - i, half * 2 + 1, 1);
    }
    const deck1 = base - Math.round(h * 0.28), deck2 = base - Math.round(h * 0.55);
    p.R(c, cx - Math.round(h * 0.25), deck1, Math.round(h * 0.5) + 1, 1);
    p.R(c, cx - Math.round(h * 0.11), deck2, Math.round(h * 0.22) + 1, 1);
    p.R(c, cx, base - h - 2, 1, 3);
  }
  function wheel(p, cx, cy, r, rand) {
    p.line(C.steel, cx - Math.round(r * 0.6), cy + r + 4, cx, cy);
    p.line(C.steel, cx + Math.round(r * 0.6), cy + r + 4, cx, cy);
    for (let a = 0; a < 8; a++) {
      const t = (a * Math.PI) / 4;
      p.line(C.bldg3, cx, cy, cx + Math.round(Math.cos(t) * r), cy + Math.round(Math.sin(t) * r));
    }
    p.ring(C.bldg1, cx, cy, r);
    const cabs = [C.coral, C.yellow, C.sea2, C.mint, C.pink, C.orange, C.lilac, C.red];
    for (let a = 0; a < 8; a++) {
      const t = (a * Math.PI) / 4 + 0.2;
      p.R(cabs[a], cx + Math.round(Math.cos(t) * r) - 1, cy + Math.round(Math.sin(t) * r), 3, 2);
    }
    p.R(C.ink, cx, cy, 1, 1);
  }
  function bridgeTower(p, x, base, h, c = C.red) {
    p.R(c, x, base - h, 2, h);
    p.R(c, x + 4, base - h, 2, h);
    for (let y = base - h + 2; y < base - 4; y += 6) p.R(c, x, y, 6, 1);
  }
  // Main cable: from the deck up to each tower top, sagging between the towers.
  function goldenGate(p, x0, x1, t0, t1, top, deck) {
    const mid = (t0 + t1) / 2, half = (t1 - t0) / 2, sag = (deck - top) * 0.8;
    for (let x = x0; x < x1; x++) {
      let y;
      if (x < t0) y = top + (t0 - x) * ((deck - top) / Math.max(1, t0 - x0));
      else if (x > t1) y = top + (x - t1) * ((deck - top) / Math.max(1, x1 - t1));
      else { const u = (x - mid) / half; y = top + sag * (1 - u * u); }
      y = Math.min(deck, Math.round(y));
      p.R(C.red, x, y);
      if (x > t0 && x < t1 && x % 3 === 0 && y < deck) p.R(C.orange, x, y + 1, 1, deck - y - 1);
    }
  }
  function spire(p, x, base, h, rand) {
    const w = Math.max(6, Math.round(h * 0.22));
    p.building(x, w, Math.round(h * 0.6), base, C.bldg1, rand);
    p.building(x + 1, w - 2, Math.round(h * 0.8), base, C.bldg1, rand);
    p.building(x + 2, w - 4, Math.round(h * 0.92), base, C.bldg1, rand);
    p.R(C.steel, x + Math.floor(w / 2), base - h - 4, 1, 5);
  }
  function car(p, x, y, body) {
    p.R(body, x, y, 11, 3);
    p.R(body, x + 2, y - 2, 6, 2);
    p.R(C.sky4, x + 3, y - 1, 2, 1); p.R(C.sky4, x + 6, y - 1, 1, 1);
    p.R(C.ink, x + 1, y + 3, 2, 1); p.R(C.ink, x + 8, y + 3, 2, 1);
  }

  const SCENES = {
    losangeles(p, W, H) {
      p.bands([C.dusk1, C.dusk2, C.dusk3, C.dusk4], 0, 34);
      p.disc(C.sunhi, 52, 30, 9); p.disc(C.sun, 52, 30, 7);
      p.hills("#c9936a", 34, 10, 0.09, 1);
      p.hills("#a9784f", 38, 6, 0.13, 3);
      "HOLLYWOOD".split("").forEach((_, i) => p.R(C.white, 12 + i * 3, 27 + (i % 2 ? 0 : 0), 2, 3));
      p.R(C.road, 0, 44, W, 6);
      for (let x = 2; x < W; x += 8) p.R(C.line, x, 47, 4, 1);
      p.palm(8, 44, 24); p.palm(66, 44, 28); p.palm(74, 44, 20);
      car(p, 30, 42, C.sea2);
    },
    sanfrancisco(p, W, H) {
      p.bands([C.sky2, C.sky3, C.sky4], 0, 30);
      p.cloud(4, 6, 16); p.cloud(50, 10, 20);
      p.hills(C.hill, 32, 7, 0.1, 2);
      p.R(C.foam, 0, 26, W, 2);
      p.water(32);
      bridgeTower(p, 18, 36, 26); bridgeTower(p, 58, 36, 26);
      goldenGate(p, 0, W, 19, 61, 10, 30);
      p.R(C.red, 0, 30, W, 2);
      p.R(C.brown2, 0, 32, W, 1);
      p.R(C.white, 64, 42, 6, 2); p.R(C.white, 66, 40, 1, 2);
    },
    chicago(p, W, H) {
      p.bands([C.sky1, C.sky2, C.sky3, C.sky4], 0, 36);
      p.cloud(8, 5, 14); p.cloud(58, 9, 12);
      const rand = rng(21);
      let x = 0;
      while (x < W) {
        const w = 5 + Math.floor(rand() * 6), h = 8 + Math.floor(rand() * 16);
        p.building(x, w, h, 36, rand() < 0.5 ? C.bldg2 : C.bldg3, rand);
        x += w + (rand() < 0.3 ? 1 : 0);
      }
      p.building(34, 8, 22, 36, C.ink, rand); p.building(35, 6, 28, 36, C.ink, rand); p.building(36, 4, 31, 36, C.ink, rand);
      p.R(C.steel, 36, 1, 1, 4); p.R(C.steel, 39, 1, 1, 4);
      p.water(36);
      p.R(C.white, 12, 42, 7, 2); p.R(C.white, 15, 36, 1, 6); p.R(C.coral, 16, 37, 3, 3);
      p.disc(C.steel, 62, 45, 3); p.R(C.white, 61, 43, 1, 1);
    },
    newyork(p, W, H) {
      p.bands([C.sky2, C.sky3, C.sky4], 0, 40);
      p.disc(C.sun, 12, 10, 5);
      const rand = rng(5);
      let x = 0;
      while (x < W) {
        const w = 4 + Math.floor(rand() * 6), h = 10 + Math.floor(rand() * 14);
        p.building(x, w, h, 40, rand() < 0.5 ? C.bldg2 : C.bldg3, rand);
        x += w;
      }
      spire(p, 34, 40, 34, rand);
      p.R(C.road, 0, 40, W, 10);
      for (let x2 = 2; x2 < W; x2 += 8) p.R(C.white, x2, 45, 4, 1);
      car(p, 10, 43, C.yellow); p.R(C.ink, 14, 40, 3, 1);
      car(p, 52, 43, C.yellow); p.R(C.ink, 56, 40, 3, 1);
    },
    paris(p, W, H) {
      p.bands([C.lilac, C.dusk1, C.dusk2, C.dusk4], 0, 38);
      p.cloud(52, 8, 16);
      eiffel(p, 26, 40, 36);
      const rand = rng(9);
      for (let x = 44; x < W; x += 9) {
        const h = 9 + Math.floor(rand() * 5);
        p.R(C.bldg3, x, 40 - h, 9, h);
        p.R(C.bldg1, x - 1, 40 - h - 2, 11, 2);
        p.R(C.brown2, x + 6, 40 - h - 5, 2, 3);
        for (let yy = 40 - h + 2; yy < 38; yy += 3) for (let xx = x + 1; xx < x + 8; xx += 3) p.R(C.wall, xx, yy, 2, 2);
      }
      p.water(40, [C.sea3, C.sea2]);
      p.R(C.coral, 6, 44, 7, 1); p.R(C.white, 6, 45, 7, 1); p.R(C.coral, 6, 46, 7, 1);
      p.R(C.ink, 7, 47, 1, 3); p.R(C.ink, 11, 47, 1, 3);
    },
    rainyday(p, W, H) {
      p.R(C.wall, 0, 0, W, H);
      for (let y = 0; y < H; y += 4) p.R(C.wall2, 0, y, W, 1);
      p.R(C.frame, 10, 4, 42, 34);
      p.R(C.rainsky, 12, 6, 38, 30);
      p.R("#a6bad3", 12, 24, 38, 12);
      const rand = rng(3);
      for (let i = 0; i < 40; i++) {
        const x = 12 + Math.floor(rand() * 37), y = 6 + Math.floor(rand() * 26);
        p.R(C.rain, x, y, 1, 2 + Math.floor(rand() * 3));
      }
      p.R(C.frame, 30, 6, 2, 30); p.R(C.frame, 12, 20, 38, 2);
      p.R(C.brown, 6, 38, 50, 3);
      p.R(C.coral, 18, 32, 6, 6); p.R(C.coral, 24, 34, 2, 2); p.R(C.white, 19, 33, 4, 1);
      p.R(C.white, 20, 28, 1, 2); p.R(C.white, 21, 26, 1, 2); p.R(C.white, 19, 25, 1, 1);
      p.R(C.grass2, 42, 30, 6, 8); p.R(C.grass, 40, 26, 4, 5); p.R(C.grass, 46, 24, 3, 7); p.R(C.brown2, 42, 34, 6, 4);
      p.R(C.sea2, 60, 22, 16, 18); p.R(C.pink, 58, 36, 20, 6); p.R(C.yellow, 62, 26, 5, 4); p.R(C.mint, 68, 30, 5, 4);
      p.R(C.frame, 0, 42, W, 8);
    },
    beachday(p, W, H) {
      p.bands([C.sky1, C.sky2, C.sky3], 0, 26);
      p.disc(C.sunhi, 64, 9, 6); p.disc(C.sun, 64, 9, 4);
      p.cloud(10, 6, 14);
      p.water(26, [C.sea3, C.sea2, C.sea1]);
      p.R(C.foam, 0, 33, W, 2);
      for (let x = 0; x < W; x += 6) p.R(C.white, x, 32, 3, 1);
      p.R(C.sand, 0, 35, W, 15);
      const rand = rng(11);
      for (let i = 0; i < 30; i++) p.R(C.sand2, Math.floor(rand() * W), 36 + Math.floor(rand() * 14));
      p.R(C.ink, 56, 26, 1, 16);
      for (let i = 0; i < 7; i++) p.R(i % 2 ? C.white : C.coral, 49 + i * 2, 26 - Math.round(Math.sin((i / 6) * Math.PI) * 3), 2, 3);
      p.R(C.coral, 48, 27, 17, 1);
      p.R(C.sand2, 16, 36, 12, 6); p.R(C.sand2, 18, 32, 3, 4); p.R(C.sand2, 24, 33, 3, 3); p.R(C.coral, 19, 30, 1, 2);
      p.R(C.yellow, 36, 40, 4, 4); p.R(C.ink, 37, 38, 2, 1);
      p.R(C.white, 30, 12, 3, 1); p.R(C.white, 29, 11, 1, 1); p.R(C.white, 33, 11, 1, 1);
    },
    themepark(p, W, H) {
      p.bands([C.sky2, C.sky3, C.sky4], 0, 40);
      p.cloud(34, 5, 12);
      wheel(p, 18, 19, 14, rng(1));
      for (let x = 38; x < W; x++) {
        const y = 32 - Math.round(16 * Math.exp(-((x - 52) ** 2) / 40)) - Math.round(6 * Math.sin((x - 38) / 5));
        p.R(C.coral, x, y);
        if (x % 4 === 0) p.R(C.steel, x, y + 1, 1, 40 - y);
      }
      p.R(C.yellow, 50, 14, 4, 2); p.R(C.sea2, 54, 15, 4, 2);
      p.R(C.pink, 40, 36, 12, 4);
      for (let i = 0; i < 6; i++) p.R(i % 2 ? C.white : C.pink, 40 + i * 2, 33 - (i < 3 ? i : 5 - i), 2, 3);
      p.R(C.grass, 0, 40, W, 10);
      p.R(C.grass2, 0, 40, W, 1);
      p.R(C.pink, 64, 36, 5, 4); p.R(C.white, 66, 40, 1, 6);
      p.R(C.sea2, 70, 32, 4, 4); p.R(C.ink, 72, 36, 1, 6);
    },
    roadtrip(p, W, H) {
      p.bands([C.dusk3, C.dusk4, "#fff2c4"], 0, 28);
      p.disc(C.sun, 60, 20, 6);
      p.hills("#d98f62", 28, 8, 0.07, 0.5);
      for (let x = 6; x < 22; x++) p.R("#c97a52", x, 18, 1, 10);
      p.R("#b86a45", 4, 17, 20, 2);
      p.R("#e8c07a", 0, 28, W, 22);
      for (let y = 28; y < H; y++) {
        const t = (y - 28) / (H - 28);
        const half = 1 + Math.round(t * 30);
        p.R(C.road, 40 - half, y, half * 2, 1);
        if ((y - 28) % 5 < 3) p.R(C.line, 40, y, Math.max(1, Math.round(t * 2)), 1);
      }
      p.R(C.grass2, 66, 30, 1, 10); p.R(C.grass, 64, 28, 2, 6); p.R(C.grass, 67, 31, 2, 4);
      p.R(C.ink, 12, 36, 1, 10); p.R(C.mint, 7, 31, 12, 6); p.R(C.white, 9, 33, 8, 1); p.R(C.white, 9, 35, 5, 1);
    },
    banner(p, W, H) {
      p.bands([C.sky1, C.sky2, C.sky3, C.sky4], 0, 38);
      p.disc(C.sunhi, 100, 12, 8); p.disc(C.sun, 100, 12, 6);
      p.cloud(20, 6, 18); p.cloud(140, 9, 22); p.cloud(172, 4, 12);
      p.hills(C.hill, 38, 6, 0.05, 1);
      p.water(38, [C.sea3, C.sea2, C.sea1]);
      const rand = rng(42);
      p.palm(10, 38, 22); p.palm(18, 38, 16);
      bridgeTower(p, 36, 38, 24); bridgeTower(p, 70, 38, 24);
      goldenGate(p, 24, 86, 37, 71, 14, 32);
      p.R(C.red, 24, 32, 62, 2);
      eiffel(p, 118, 38, 32);
      spire(p, 132, 38, 30, rand);
      p.building(142, 6, 16, 38, C.bldg2, rand); p.building(126, 5, 12, 38, C.bldg3, rand);
      wheel(p, 172, 20, 13, rand);
      p.R(C.white, 90, 42, 7, 2); p.R(C.white, 93, 36, 1, 6); p.R(C.coral, 94, 37, 3, 4);
    },
  };

  function drawArt(canvas) {
    const scene = SCENES[canvas.dataset.art];
    if (!scene) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    scene(painter(ctx, canvas.width, canvas.height), canvas.width, canvas.height);
  }
  $$("canvas[data-art]").forEach(drawArt);
  window.AGENTHUNT_ART = { SCENES, drawArt };

  // ------------------------------------------------------------ leaderboard + stats
  let apiBase = null;
  const configReady = fetch("/agenthunt/config.json", { cache: "no-cache" })
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
    const table = document.createElement("table");
    table.className = "hs";
    table.innerHTML = `<thead><tr><th>RANK</th><th>HUNTER</th><th class="num">SCORE</th></tr></thead>`;
    const tb = document.createElement("tbody");
    rows.forEach((r) => {
      const tr = document.createElement("tr");
      [String(r.rank).padStart(2, "0"), r.player, fmt(r.score)].forEach((v, i) => {
        const td = document.createElement("td");
        td.textContent = v;
        if (i === 0) td.className = "rank";
        if (i === 2) td.className = "num";
        tr.appendChild(td);
      });
      tb.appendChild(tr);
    });
    table.appendChild(tb);
    const body = $(".board-body", board);
    body.innerHTML = "";
    body.appendChild(table);
  }

  $$("[data-board]").forEach((board) => {
    const state = { period: "all", hunt: "all", touched: false };
    let loadedOnce = false;

    async function load() {
      $$("[data-period]", board).forEach((t) => t.setAttribute("aria-pressed", String(t.dataset.period === state.period)));
      $$("[data-hunt]", board).forEach((t) => t.setAttribute("aria-pressed", String(t.dataset.hunt === state.hunt)));
      const cap = $(".board-caption", board);
      const huntTab = $(`[data-hunt="${state.hunt}"]`, board);
      if (cap) cap.textContent = `${state.period === "week" ? "THIS WEEK" : "ALL TIME"} · ${huntTab ? huntTab.textContent : "ALL HUNTS"}`;
      try {
        const data = await api(`/leaderboard?hunt=${encodeURIComponent(state.hunt)}&period=${state.period}&limit=10`);
        if (!data.rows.length) {
          boardMessage(board, state.period === "week" ? "NO HUNTS THIS WEEK." : "NO HUNTS RECORDED YET.", "BE THE FIRST NAME ON THE BOARD.");
        } else {
          renderRows(board, data.rows);
          if (loadedOnce && state.touched) sfx.highscore();
        }
      } catch (e) {
        boardMessage(
          board,
          e.message === "offline" ? "LEADERBOARD WARMING UP." : "LEADERBOARD NOT RESPONDING.",
          e.message === "offline" ? "THE BOARD GOES LIVE WITH THE FIRST HUNTS. UNTIL THEN, HUNTS ARE SCORED IN YOUR CHAT." : "TRY AGAIN SOON."
        );
      }
      loadedOnce = true;
    }

    $$("[data-period]", board).forEach((t) =>
      t.addEventListener("click", () => { state.period = t.dataset.period; state.touched = true; sfx.select(); load(); })
    );
    $$("[data-hunt]", board).forEach((t) =>
      t.addEventListener("click", () => { state.hunt = t.dataset.hunt; state.touched = true; sfx.select(); load(); })
    );
    load();
  });

  $$("[data-stats]").forEach(async (wrap) => {
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
      const s = await api(`/stats?hunt=all`);
      set("played", fmt(s.hunts_played));
      set("finds", fmt(s.finds_judged));
      set("high", s.high_score == null ? "—" : fmt(s.high_score), s.high_score_player || "");
      set("sweeps", fmt(s.sweeps));
    } catch {
      ["played", "finds", "high", "sweeps"].forEach((k) => set(k, "—", "AWAITING LINK"));
    }
  });
})();

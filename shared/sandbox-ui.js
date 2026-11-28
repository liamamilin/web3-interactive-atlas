(function () {
  const STORAGE_KEY = "web3_atlas_progress_v1";
  const THEME_KEY = "web3_atlas_theme_v1";
  const TRACK_KEY = "web3_atlas_active_track";

  const TRACKS = [
    {
      id: "survival",
      name: "🛡️ 新手防坑生存线",
      desc: "无银行账本蓝图、助记词、CEX 托管边界、Gas、防盗授权到第一笔 Swap",
      modules: ["00-blockchain-blueprint", "01-wallet-keys", "20-custody-multisig", "02-tx-gas-multichain", "03-security-traps", "04-first-swap-amm"]
    },
    {
      id: "defi",
      name: "⚡ DeFi 交易与收益线",
      desc: "智能合约乐高、AMM/v3、稳定币、借贷、质押循环贷、Pendle 与 MEV",
      modules: ["22-smart-contracts-composability", "04-first-swap-amm", "19-clmm-yield-splitting", "05-stablecoins-peg", "06-lending-liquidation", "18-staking-restaking", "07-perps-leverage", "11-mev-dark-forest"]
    },
    {
      id: "research",
      name: "🔍 链上投研排雷线",
      desc: "联合曲线 PvP、解锁抛压、预言机、真实收益与链上指标体检",
      modules: ["08-bonding-curves", "12-tokenomics", "13-oracles-real-apps", "14-onchain-forensics"]
    },
    {
      id: "frontier",
      name: "🚀 底层原理与前沿线",
      desc: "协议设计蓝图、账本共识、L2 跨链桥、ZK 隐私、账户抽象、RWA 与 AI Agent",
      modules: ["00-blockchain-blueprint", "09-consensus-ledger", "10-scaling-bridges", "21-zk-privacy", "15-account-abstraction", "16-rwa-institutional", "17-ai-agent-crypto"]
    }
  ];

  function getProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }
    catch { return {}; }
  }

  function setLessonDone(lessonId, done) {
    const data = getProgress();
    if (done) data[lessonId] = true;
    else delete data[lessonId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return data;
  }

  function getTheme() {
    try { return localStorage.getItem(THEME_KEY) || "dark"; }
    catch { return "dark"; }
  }

  function applyTheme(theme) {
    const t = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem(THEME_KEY, t); } catch {}
    document.querySelectorAll("[data-atlas-theme-btn]").forEach((btn) => {
      btn.textContent = t === "light" ? "🌙 深色" : "☀️ 浅色";
    });
    return t;
  }

  function initTheme() {
    return applyTheme(getTheme());
  }

  function bindThemeToggle(btn) {
    if (!btn) return;
    btn.setAttribute("data-atlas-theme-btn", "1");
    btn.textContent = getTheme() === "light" ? "🌙 深色" : "☀️ 浅色";
    btn.addEventListener("click", () => {
      applyTheme(getTheme() === "light" ? "dark" : "light");
    });
  }

  function getActiveTrack() {
    try { return sessionStorage.getItem(TRACK_KEY) || null; }
    catch { return null; }
  }

  function setActiveTrack(trackId) {
    try {
      if (trackId) sessionStorage.setItem(TRACK_KEY, trackId);
      else sessionStorage.removeItem(TRACK_KEY);
    } catch {}
  }

  function ensureFavicon(prefix) {
    if (document.querySelector('link[rel="icon"]')) return;
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href = `${prefix}favicon.svg`;
    document.head.appendChild(link);
  }

  function loadCatalogAndRenderNav(lessonId) {
    const mount = () => {
      const cat = window.WEB3_ATLAS_CATALOG;
      if (!cat || !Array.isArray(cat.modules)) return;

      const byId = {};
      const byPath = {};
      const defaultFlat = [];
      cat.modules.forEach((m) => {
        byId[m.id] = m;
        (m.lessons || []).forEach((l) => {
          const entry = { ...l, moduleId: m.id, moduleTitle: m.title?.zh || "", moduleIcon: m.icon || "", layer: m.layer || "" };
          defaultFlat.push(entry);
          byPath[l.path] = entry;
        });
      });

      let flat = defaultFlat;
      let trackLabel = "";
      const activeTrackId = getActiveTrack();
      if (activeTrackId) {
        const trackObj = TRACKS.find((t) => t.id === activeTrackId);
        if (trackObj) {
          const trackFlat = [];
          trackObj.modules.forEach((mid) => {
            const m = byId[mid];
            if (!m) return;
            (m.lessons || []).forEach((l) => {
              trackFlat.push(byPath[l.path]);
            });
          });
          if (trackFlat.some((item) => item && item.path === lessonId)) {
            flat = trackFlat;
            trackLabel = `${trackObj.name} · `;
          }
        }
      }

      const idx = flat.findIndex((item) => item && item.path === lessonId);
      if (idx === -1) return;

      const cur = flat[idx];
      const prev = idx > 0 ? flat[idx - 1] : null;
      const next = idx < flat.length - 1 ? flat[idx + 1] : null;
      const progress = getProgress();

      const container = document.querySelector(".lesson-container") || document.body;
      const nav = document.createElement("nav");
      nav.className = "lesson-footer-nav";
      nav.setAttribute("aria-label", "课程导航");

      const prereqs = (cur.prerequisites || []).filter((p) => byPath[p]);
      const prereqHtml = prereqs.length ? `
        <div class="lesson-prereq-bar">
          <span>前置知识快捷回看：</span>
          ${prereqs.map((p) => {
            const met = !!progress[p];
            return `<a href="../${p}" class="${met ? "met" : ""}">${met ? "✓ " : "○ "}${byPath[p].title.zh}</a>`;
          }).join("")}
        </div>
      ` : "";

      const prevHtml = prev
        ? `<a class="nav-card prev" href="../${prev.path}">
            <div class="nc-dir">← ${trackLabel}上一课 (${idx} / ${flat.length})</div>
            <div class="nc-title">${prev.title.zh}</div>
            <div class="nc-mod">${prev.moduleIcon} ${prev.moduleTitle}</div>
          </a>`
        : `<a class="nav-card prev" href="../index.html">
            <div class="nc-dir">← 返回目录</div>
            <div class="nc-title">Web3 Interactive Atlas 首页</div>
            <div class="nc-mod">${trackLabel}第 1 / ${flat.length} 课</div>
          </a>`;

      const nextHtml = next
        ? `<a class="nav-card next" href="../${next.path}">
            <div class="nc-dir">${trackLabel}下一课 (${idx + 2} / ${flat.length}) →</div>
            <div class="nc-title">${next.title.zh}</div>
            <div class="nc-mod">${next.moduleIcon} ${next.moduleTitle}</div>
          </a>`
        : `<a class="nav-card next" href="../quiz.html">
            <div class="nc-dir">${trackLabel}终章挑战 →</div>
            <div class="nc-title">🧭 V1–V5 阶段综合排雷测验</div>
            <div class="nc-mod">检验 20 道真实链上决策场景</div>
          </a>`;

      nav.innerHTML = `
        ${prereqHtml}
        <div class="lesson-prev-next">
          ${prevHtml}
          ${nextHtml}
        </div>
      `;
      container.appendChild(nav);
    };

    if (window.WEB3_ATLAS_CATALOG) {
      mount();
    } else {
      const s = document.createElement("script");
      s.src = "../catalog.js";
      s.onload = mount;
      document.body.appendChild(s);
    }
  }

  function initLessonPage({ lessonId, moduleName }) {
    initTheme();
    ensureFavicon("../");
    const progress = getProgress();
    const isDone = !!progress[lessonId];

    const bar = document.createElement("header");
    bar.className = "atlas-topbar";
    bar.innerHTML = `
      <a class="brand" href="../index.html">← Web3 Interactive Atlas</a>
      <div class="nav-actions">
        <span style="color:var(--text-muted)">${moduleName || ""}</span>
        <button id="atlas-theme-btn" class="btn" style="padding:6px 10px;font-size:13px;"></button>
        <button id="atlas-done-btn" class="btn ${isDone ? "btn-primary" : ""}">
          ${isDone ? "✓ 已掌握" : "标记为已掌握"}
        </button>
      </div>
    `;
    document.body.prepend(bar);

    bindThemeToggle(document.getElementById("atlas-theme-btn"));

    const btn = document.getElementById("atlas-done-btn");
    btn.addEventListener("click", () => {
      const next = !getProgress()[lessonId];
      setLessonDone(lessonId, next);
      btn.className = `btn ${next ? "btn-primary" : ""}`;
      btn.textContent = next ? "✓ 已掌握" : "标记为已掌握";
    });

    loadCatalogAndRenderNav(lessonId);
  }

  function bindTaskChecklist(lessonId) {
    const items = document.querySelectorAll(".task-item");
    items.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("done");
        const box = item.querySelector("input[type='checkbox']");
        if (box) box.checked = item.classList.contains("done");
        const allDone = [...items].every((el) => el.classList.contains("done"));
        if (allDone && lessonId) {
          setLessonDone(lessonId, true);
          const btn = document.getElementById("atlas-done-btn");
          if (btn) {
            btn.className = "btn btn-primary";
            btn.textContent = "✓ 已掌握";
          }
        }
      });
    });
  }

  initTheme();
  window.AtlasUI = {
    TRACKS,
    getProgress,
    setLessonDone,
    initTheme,
    bindThemeToggle,
    getActiveTrack,
    setActiveTrack,
    initLessonPage,
    bindTaskChecklist
  };
})();

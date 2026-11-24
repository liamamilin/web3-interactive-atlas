(function () {
  const STORAGE_KEY = "web3_atlas_progress_v1";

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

      const flat = [];
      const byPath = {};
      cat.modules.forEach((m) => {
        (m.lessons || []).forEach((l) => {
          const entry = { ...l, moduleTitle: m.title?.zh || "", moduleIcon: m.icon || "", layer: m.layer || "" };
          flat.push(entry);
          byPath[l.path] = entry;
        });
      });

      const idx = flat.findIndex((item) => item.path === lessonId);
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
            <div class="nc-dir">← 上一课 (${idx} / ${flat.length})</div>
            <div class="nc-title">${prev.title.zh}</div>
            <div class="nc-mod">${prev.moduleIcon} ${prev.moduleTitle}</div>
          </a>`
        : `<a class="nav-card prev" href="../index.html">
            <div class="nc-dir">← 返回目录</div>
            <div class="nc-title">Web3 Interactive Atlas 首页</div>
            <div class="nc-mod">第 1 / ${flat.length} 课</div>
          </a>`;

      const nextHtml = next
        ? `<a class="nav-card next" href="../${next.path}">
            <div class="nc-dir">下一课 (${idx + 2} / ${flat.length}) →</div>
            <div class="nc-title">${next.title.zh}</div>
            <div class="nc-mod">${next.moduleIcon} ${next.moduleTitle}</div>
          </a>`
        : `<a class="nav-card next" href="../quiz.html">
            <div class="nc-dir">全课终章挑战 →</div>
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
    ensureFavicon("../");
    const progress = getProgress();
    const isDone = !!progress[lessonId];

    const bar = document.createElement("header");
    bar.className = "atlas-topbar";
    bar.innerHTML = `
      <a class="brand" href="../index.html">← Web3 Interactive Atlas</a>
      <div class="nav-actions">
        <span style="color:var(--text-muted)">${moduleName || ""}</span>
        <button id="atlas-done-btn" class="btn ${isDone ? "btn-primary" : ""}">
          ${isDone ? "✓ 已掌握" : "标记为已掌握"}
        </button>
      </div>
    `;
    document.body.prepend(bar);

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

  window.AtlasUI = { getProgress, setLessonDone, initLessonPage, bindTaskChecklist };
})();

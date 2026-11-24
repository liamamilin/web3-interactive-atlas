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

  function initLessonPage({ lessonId, moduleName }) {
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

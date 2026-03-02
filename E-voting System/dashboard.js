// tabsbar.js
// Upgraded: Results is ALWAYS visible.
// - If VOTE_STATUS !== "ENDED" -> Results is locked (disabled), but NOT too faint.
// - If VOTE_STATUS === "ENDED" -> Results becomes clickable and normal.

document.addEventListener("DOMContentLoaded", () => {
  // ===== CONFIG (connect later with your login/vote system) =====
  const USER_ROLE = "voter";   // "admin" or "voter" (not hiding Results anymore)
  const VOTE_STATUS = "LIVE";  // "LIVE" or "ENDED"

  const tabButtons = Array.from(document.querySelectorAll(".tabBtn"));
  const panels = Array.from(document.querySelectorAll(".panel"));
  const activeLine = document.getElementById("activeLine");
  const tabsContainer = document.getElementById("tabsContainer");

  const resultsBtn = document.querySelector(".resultsTab");

  // ===== RESULTS BEHAVIOR (VISIBLE ALWAYS) =====
  if (resultsBtn) {
    if (VOTE_STATUS !== "ENDED") {
      // Locked but readable
      resultsBtn.disabled = true;

      // remove any previous states (if reloaded)
      resultsBtn.classList.remove("opacity-[0.45]");
      resultsBtn.classList.add("opacity-[0.85]", "cursor-not-allowed");

      resultsBtn.title = "Results will be available after voting ends.";

      // Add (Locked) label only once
      if (!resultsBtn.dataset.lockedApplied) {
        resultsBtn.dataset.originalText = resultsBtn.textContent.trim();
        resultsBtn.innerHTML =
          `${resultsBtn.dataset.originalText} <span class="ml-[6px] text-[12px] font-[900]">(Locked)</span>`;
        resultsBtn.dataset.lockedApplied = "true";
      }
    } else {
      // Unlocked
      resultsBtn.disabled = false;
      resultsBtn.classList.remove("opacity-[0.85]", "cursor-not-allowed");
      resultsBtn.title = "";

      // Restore original text if it was locked before
      if (resultsBtn.dataset.originalText) {
        resultsBtn.textContent = resultsBtn.dataset.originalText;
      }
      delete resultsBtn.dataset.lockedApplied;
    }
  }

  function setActiveStyles(activeId) {
    tabButtons.forEach((btn) => {
      const isActive = btn.getAttribute("data-tab") === activeId;

      // Do not force active style on disabled buttons when clicked (we block click anyway)
      if (isActive) {
        btn.classList.add("bg-slate-900", "text-white");
        btn.classList.remove("text-slate-700");
      } else {
        btn.classList.remove("bg-slate-900", "text-white");
        btn.classList.add("text-slate-700");
      }
    });
  }

  function showPanel(activeId) {
    panels.forEach((panel) => {
      const isTarget = panel.getAttribute("data-panel") === activeId;
      panel.classList.toggle("hidden", !isTarget);
    });
  }

  function moveUnderline(activeId) {
    const activeBtn = tabButtons.find((b) => b.getAttribute("data-tab") === activeId);
    if (!activeBtn || !activeLine || !tabsContainer) return;

    const btnRect = activeBtn.getBoundingClientRect();
    const cRect = tabsContainer.getBoundingClientRect();

    // Position underline relative to container scroll
    const left = Math.round((btnRect.left - cRect.left) + tabsContainer.scrollLeft);
    const width = Math.round(btnRect.width);

    activeLine.style.left = left + "px";
    activeLine.style.width = width + "px";

    // Keep active tab visible on mobile
    activeBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  function activateTab(tabId) {
    setActiveStyles(tabId);
    showPanel(tabId);
    moveUnderline(tabId);
  }

  // Click handlers
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return; // Important: prevent switching to locked Results
      activateTab(btn.getAttribute("data-tab"));
    });
  });

  // Default tab
  activateTab("dashboard");

  // Recalculate underline on resize
  window.addEventListener("resize", () => {
    const currentActive = tabButtons.find((b) => b.classList.contains("bg-slate-900"));
    if (currentActive) activateTab(currentActive.getAttribute("data-tab"));
  });

  // Keep underline aligned when tabs scroll (mobile)
  if (tabsContainer) {
    tabsContainer.addEventListener("scroll", () => {
      const currentActive = tabButtons.find((b) => b.classList.contains("bg-slate-900"));
      if (currentActive) moveUnderline(currentActive.getAttribute("data-tab"));
    });
  }

  // Optional: logout button handler (wire later)
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      // Replace with your real logout logic
      alert("Logout clicked (connect to your auth/logout).");
    });
  }
});
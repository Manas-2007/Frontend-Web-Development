function setVoterHomeStatus(isVoted, voteISODateTime){
  const dot = document.getElementById("voteStatusDot");
  const text = document.getElementById("voteStatusText");

  const hasVotedEl = document.getElementById("hasVoted");
  const voteDateEl = document.getElementById("voteDate");
  const voteTimeEl = document.getElementById("voteTime");

  const voteCountEl = document.getElementById("voteCount");
  const voteProgress = document.getElementById("voteProgress");

  if(!isVoted){
    dot.className = "w-[11px] h-[11px] rounded-full bg-gray-400";
    text.innerText = "NOT VOTED";
    text.className = "text-[13px] sm:text-[14px] font-[900] tracking-[0.6px] text-gray-700";

    hasVotedEl.innerText = "No";
    hasVotedEl.className = "mt-[4px] text-[18px] font-[900] text-slate-900";

    voteDateEl.innerText = "—";
    voteTimeEl.innerText = "—";

    voteCountEl.innerText = "0";
    voteProgress.style.width = "0%";
    return;
  }

  // voted state
  dot.className = "w-[11px] h-[11px] rounded-full bg-green-500";
  text.innerText = "VOTED";
  text.className = "text-[13px] sm:text-[14px] font-[900] tracking-[0.6px] text-green-700";

  hasVotedEl.innerText = "Yes";
  hasVotedEl.className = "mt-[4px] text-[18px] font-[900] text-green-700";

  const dt = new Date(voteISODateTime);
  const dateStr = dt.toLocaleDateString("en-IN", { day:"2-digit", month:"short", year:"numeric" });
  const timeStr = dt.toLocaleTimeString("en-IN", { hour:"2-digit", minute:"2-digit" });

  voteDateEl.innerText = dateStr;
  voteTimeEl.innerText = timeStr;

  voteCountEl.innerText = "1";
  voteProgress.style.width = "100%";
}
document.addEventListener("DOMContentLoaded", function () {
  const navHome = document.getElementById("navHome");
  const tabHome = document.getElementById("tab-home");

  navHome.addEventListener("click", function (e) {
    e.preventDefault();

    tabHome.classList.remove("hidden");
    tabHome.classList.add("block");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const navHome = document.getElementById("navHome");
  const navHow = document.getElementById("navHow");

  const tabHome = document.getElementById("tab-home");
  const tabHow = document.getElementById("tab-how");

  function hideAllTabs() {
    tabHome.classList.remove("block");
    tabHome.classList.add("hidden");

    tabHow.classList.remove("block");
    tabHow.classList.add("hidden");
  }

  navHome.addEventListener("click", function (e) {
    e.preventDefault();
    hideAllTabs();
    tabHome.classList.remove("hidden");
    tabHome.classList.add("block");
  });

  navHow.addEventListener("click", function (e) {
    e.preventDefault();
    hideAllTabs();
    tabHow.classList.remove("hidden");
    tabHow.classList.add("block");
  });
});
document.addEventListener("DOMContentLoaded", function () {

  const navHome = document.getElementById("navHome");
  const navHow = document.getElementById("navHow");

  const tabHome = document.getElementById("tab-home");
  const tabHow = document.getElementById("tab-how");

  const navTabs = [navHome, navHow];

  function resetTabs() {
    navTabs.forEach(tab => {
      tab.classList.remove(
        "border-y-red-600",
        "text-red-600",
        "scale-[1.12]",
        "translate-y-[-3px]"
      );
    });
  }

  function hideAllTabs() {
    tabHome.classList.add("hidden");
    tabHow.classList.add("hidden");

    tabHome.classList.remove("block");
    tabHow.classList.remove("block");
  }

  navHome.addEventListener("click", function (e) {
    e.preventDefault();

    hideAllTabs();
    resetTabs();

    tabHome.classList.remove("hidden");
    tabHome.classList.add("block");

    navHome.classList.add(
      "border-y-red-600",
      "text-red-600",
      "scale-[1.12]",
      "translate-y-[-3px]"
    );
  });

  navHow.addEventListener("click", function (e) {
    e.preventDefault();

    hideAllTabs();
    resetTabs();

    tabHow.classList.remove("hidden");
    tabHow.classList.add("block");

    navHow.classList.add(
      "border-y-red-600",
      "text-red-600",
      "scale-[1.12]",
      "translate-y-[-3px]"
    );
  });

});


function setVoterHomeStatus(isVoted, voteISODateTime) {
  const dot = document.getElementById("voteStatusDot");
  const text = document.getElementById("voteStatusText");

  const hasVotedEl = document.getElementById("hasVoted");
  const voteDateEl = document.getElementById("voteDate");
  const voteTimeEl = document.getElementById("voteTime");

  const voteCountEl = document.getElementById("voteCount");
  const voteProgress = document.getElementById("voteProgress");

  if (!isVoted) {
    if (dot) dot.className = "w-[11px] h-[11px] rounded-full bg-gray-400";
    if (text) {
      text.innerText = "NOT VOTED";
      text.className = "text-[13px] sm:text-[14px] font-[900] tracking-[0.6px] text-gray-700";
    }

    if (hasVotedEl) {
      hasVotedEl.innerText = "No";
      hasVotedEl.className = "mt-[4px] text-[18px] font-[900] text-slate-900";
    }

    if (voteDateEl) voteDateEl.innerText = "—";
    if (voteTimeEl) voteTimeEl.innerText = "—";
    if (voteCountEl) voteCountEl.innerText = "0";
    if (voteProgress) voteProgress.style.width = "0%";
    return;
  }

  if (dot) dot.className = "w-[11px] h-[11px] rounded-full bg-green-500";
  if (text) {
    text.innerText = "VOTED";
    text.className = "text-[13px] sm:text-[14px] font-[900] tracking-[0.6px] text-green-700";
  }

  if (hasVotedEl) {
    hasVotedEl.innerText = "Yes";
    hasVotedEl.className = "mt-[4px] text-[18px] font-[900] text-green-700";
  }

  const dt = new Date(voteISODateTime);
  const dateStr = dt.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const timeStr = dt.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (voteDateEl) voteDateEl.innerText = dateStr;
  if (voteTimeEl) voteTimeEl.innerText = timeStr;
  if (voteCountEl) voteCountEl.innerText = "1";
  if (voteProgress) voteProgress.style.width = "100%";
}

document.addEventListener("DOMContentLoaded", function () {
  const navHome = document.getElementById("navHome");
  const navHow = document.getElementById("navHow");
  const navStatus = document.getElementById("navStatus");

  const tabHome = document.getElementById("tab-home");
  const tabHow = document.getElementById("tab-how");
  const tabStatus = document.getElementById("tab-status");

  const navTabs = [navHome, navHow, navStatus];
  const allSections = [tabHome, tabHow, tabStatus];

  function resetNavTabs() {
    navTabs.forEach((tab) => {
      if (!tab) return;
      tab.classList.remove(
        "border-y-red-600",
        "text-red-600",
        "scale-[1.12]",
        "translate-y-[-3px]"
      );
    });
  }

  function hideAllSections() {
    allSections.forEach((section) => {
      if (!section) return;
      section.classList.add("hidden");
      section.classList.remove("block");
    });
  }

  function openTab(sectionToShow, navToActivate) {
    hideAllSections();
    resetNavTabs();

    if (sectionToShow) {
      sectionToShow.classList.remove("hidden");
      sectionToShow.classList.add("block");
    }

    if (navToActivate) {
      navToActivate.classList.add(
        "border-y-red-600",
        "text-red-600",
        "scale-[1.12]",
        "translate-y-[-3px]"
      );
    }
  }

  if (navHome) {
    navHome.addEventListener("click", function (e) {
      e.preventDefault();
      openTab(tabHome, navHome);
    });
  }

  if (navHow) {
    navHow.addEventListener("click", function (e) {
      e.preventDefault();
      openTab(tabHow, navHow);
    });
  }

  if (navStatus) {
    navStatus.addEventListener("click", function (e) {
      e.preventDefault();
      openTab(tabStatus, navStatus);
    });
  }

  openTab(tabHome, navHome);
});


document.addEventListener("DOMContentLoaded", function () {

  const navHome = document.getElementById("navHome");
  const navHow = document.getElementById("navHow");
  const navStatus = document.getElementById("navStatus");
  const navParties = document.getElementById("navParties");

  const tabHome = document.getElementById("tab-home");
  const tabHow = document.getElementById("tab-how");
  const tabStatus = document.getElementById("tab-status");
  const tabParties = document.getElementById("tab-parties");

  const navTabs = [navHome, navHow, navStatus, navParties];
  const allSections = [tabHome, tabHow, tabStatus, tabParties];

  function resetNavTabs() {
    navTabs.forEach((tab) => {
      if (!tab) return;
      tab.classList.remove(
        "border-y-red-600",
        "text-red-600",
        "scale-[1.12]",
        "translate-y-[-3px]"
      );
    });
  }

  function hideAllSections() {
    allSections.forEach((section) => {
      if (!section) return;
      section.classList.add("hidden");
      section.classList.remove("block");
    });
  }

  function openTab(sectionToShow, navToActivate) {
    hideAllSections();
    resetNavTabs();

    if (sectionToShow) {
      sectionToShow.classList.remove("hidden");
      sectionToShow.classList.add("block");
    }

    if (navToActivate) {
      navToActivate.classList.add(
        "border-y-red-600",
        "text-red-600",
        "scale-[1.12]",
        "translate-y-[-3px]"
      );
    }
  }

  if (navHome) {
    navHome.addEventListener("click", function (e) {
      e.preventDefault();
      openTab(tabHome, navHome);
    });
  }

  if (navHow) {
    navHow.addEventListener("click", function (e) {
      e.preventDefault();
      openTab(tabHow, navHow);
    });
  }

  if (navStatus) {
    navStatus.addEventListener("click", function (e) {
      e.preventDefault();
      openTab(tabStatus, navStatus);
    });
  }

  if (navParties) {
    navParties.addEventListener("click", function (e) {
      e.preventDefault();
      openTab(tabParties, navParties);
    });
  }

  openTab(tabHome, navHome);
});


document.addEventListener("DOMContentLoaded", function () {

  const navHome = document.getElementById("navHome");
  const navHow = document.getElementById("navHow");
  const navStatus = document.getElementById("navStatus");
  const navParties = document.getElementById("navParties");
  const navResults = document.getElementById("navResults");

  const tabHome = document.getElementById("tab-home");
  const tabHow = document.getElementById("tab-how");
  const tabStatus = document.getElementById("tab-status");
  const tabParties = document.getElementById("tab-parties");
  const tabResults = document.getElementById("tab-results");

  const navTabs = [navHome, navHow, navStatus, navParties, navResults];
  const allSections = [tabHome, tabHow, tabStatus, tabParties, tabResults];

  function resetNavTabs() {
    navTabs.forEach((tab) => {
      if (!tab) return;
      tab.classList.remove(
        "border-y-red-600",
        "text-red-600",
        "scale-[1.12]",
        "translate-y-[-3px]"
      );
    });
  }

  function hideAllSections() {
    allSections.forEach((section) => {
      if (!section) return;
      section.classList.add("hidden");
      section.classList.remove("block");
    });
  }

  function openTab(sectionToShow, navToActivate) {
    hideAllSections();
    resetNavTabs();

    if (sectionToShow) {
      sectionToShow.classList.remove("hidden");
      sectionToShow.classList.add("block");
    }

    if (navToActivate) {
      navToActivate.classList.add(
        "border-y-red-600",
        "text-red-600",
        "scale-[1.12]",
        "translate-y-[-3px]"
      );
    }
  }

  if (navHome) {
    navHome.addEventListener("click", function (e) {
      e.preventDefault();
      openTab(tabHome, navHome);
    });
  }

  if (navHow) {
    navHow.addEventListener("click", function (e) {
      e.preventDefault();
      openTab(tabHow, navHow);
    });
  }

  if (navStatus) {
    navStatus.addEventListener("click", function (e) {
      e.preventDefault();
      openTab(tabStatus, navStatus);
    });
  }

  if (navParties) {
    navParties.addEventListener("click", function (e) {
      e.preventDefault();
      openTab(tabParties, navParties);
    });
  }

  if (navResults) {
    navResults.addEventListener("click", function (e) {
      e.preventDefault();
      openTab(tabResults, navResults);
    });
  }

  openTab(tabHome, navHome);
});
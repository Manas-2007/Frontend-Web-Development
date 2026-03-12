// ===============================
// LOGIN + CURRENT USER
// ===============================
const isLoggedIn = localStorage.getItem("isLoggedIn");
const currentRole = localStorage.getItem("userRole");
const currentVoter = localStorage.getItem("voterName");

// allow both voter and admin
if (isLoggedIn !== "true" || !currentRole) {
  alert("Please login first");
  window.location.href = "login.html";
}

// ===============================
// DEFAULT ELECTION STATES
// ===============================
if (localStorage.getItem("voteStarted") === null) {
  localStorage.setItem("voteStarted", "false");
}
if (localStorage.getItem("voteEnded") === null) {
  localStorage.setItem("voteEnded", "false");
}
if (localStorage.getItem("resultShown") === null) {
  localStorage.setItem("resultShown", "false");
}

// ===============================
// FETCH VOTER DATA FOR DASHBOARD
// ===============================
const voterNameEl = document.getElementById("voterName");
const voterIdEl = document.getElementById("voterId");
const voterAreaEl = document.getElementById("voterArea");

if (voterNameEl) {
  voterNameEl.textContent = currentVoter || "Voter";
}

// keep voter ID stable per voter
if (currentVoter && !localStorage.getItem("voterId_" + currentVoter)) {
  const voterID = "EVB-" + Math.floor(10000 + Math.random() * 90000);
  localStorage.setItem("voterId_" + currentVoter, voterID);
}
if (voterIdEl && currentVoter) {
  voterIdEl.textContent = localStorage.getItem("voterId_" + currentVoter);
}

// keep constituency stable per voter
const constituencies = [
  "Huzurganj",
  "Indore Central",
  "Bhopal North",
  "Ujjain Rural",
  "Gwalior East",
  "Jabalpur West",
  "Dewas City",
  "Ratlam Rural"
];

if (currentVoter && !localStorage.getItem("voterArea_" + currentVoter)) {
  const randomArea =
    constituencies[Math.floor(Math.random() * constituencies.length)];
  localStorage.setItem("voterArea_" + currentVoter, randomArea);
}
if (voterAreaEl && currentVoter) {
  voterAreaEl.textContent = localStorage.getItem("voterArea_" + currentVoter);
}

// ===============================
// HOME TAB STATUS UI
// ===============================
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
      text.className =
        "text-[13px] sm:text-[14px] font-[900] tracking-[0.6px] text-gray-700";
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
    text.className =
      "text-[13px] sm:text-[14px] font-[900] tracking-[0.6px] text-green-700";
  }

  if (hasVotedEl) {
    hasVotedEl.innerText = "Yes";
    hasVotedEl.className = "mt-[4px] text-[18px] font-[900] text-green-700";
  }

  if (voteISODateTime) {
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
  }

  if (voteCountEl) voteCountEl.innerText = "1";
  if (voteProgress) voteProgress.style.width = "100%";
}

// load vote status on refresh
const savedVoteTime = localStorage.getItem("votedAt_" + currentVoter);
const alreadyVoted = localStorage.getItem("voted_" + currentVoter) === "true";
setVoterHomeStatus(alreadyVoted, savedVoteTime);

// ===============================
// TAB SYSTEM
// ===============================
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

  const baseTabClass =
    "px-[16px] py-[10px] rounded-[12px] text-[15px] text-slate-700 border-[1px] border-transparent transition duration-[250ms]";
  const activeTabClass =
    "px-[16px] py-[10px] rounded-[12px] text-[15px] text-red-600 bg-red-500/10 border-[1px] border-red-500/15 shadow-[0px_6px_16px_rgba(239,68,68,0.08)] transition duration-[250ms]";

  const hoverMap = new Map([
    [navHome, "hover:bg-red-500/10 hover:text-red-600"],
    [navHow, "hover:bg-orange-500/10 hover:text-orange-600 hover:border-orange-500/10"],
    [navStatus, "hover:bg-emerald-500/10 hover:text-emerald-600"],
    [navParties, "hover:bg-red-500/10 hover:text-red-600"],
    [navResults, "hover:bg-sky-500/10 hover:text-sky-600"],
  ]);

  function resetNavTabs() {
    navTabs.forEach((tab) => {
      if (!tab) return;
      tab.className = `${baseTabClass} ${hoverMap.get(tab) || ""}`;
      tab.blur();
    });
  }

  function hideAllSections() {
    allSections.forEach((section) => {
      if (!section) return;
      section.classList.add("hidden");
      section.classList.remove("block");
    });
  }

  window.showTab = function (tabName) {
    hideAllSections();
    resetNavTabs();

    const map = {
      home: [tabHome, navHome],
      how: [tabHow, navHow],
      status: [tabStatus, navStatus],
      parties: [tabParties, navParties],
      results: [tabResults, navResults],
    };

    const selected = map[tabName];
    if (!selected) return;

    const [sectionToShow, navToActivate] = selected;

    if (sectionToShow) {
      sectionToShow.classList.remove("hidden");
      sectionToShow.classList.add("block");
    }

    if (navToActivate) {
      navToActivate.className = activeTabClass;
    }
  };

  navHome?.addEventListener("click", (e) => {
    e.preventDefault();
    showTab("home");
  });

  navHow?.addEventListener("click", (e) => {
    e.preventDefault();
    showTab("how");
  });

  navStatus?.addEventListener("click", (e) => {
    e.preventDefault();
    showTab("status");
  });

  navParties?.addEventListener("click", (e) => {
    e.preventDefault();
    showTab("parties");
  });

  navResults?.addEventListener("click", (e) => {
    e.preventDefault();
    showTab("results");
  });

  showTab("home");
});

// ===============================
// VOTE SYSTEM
// ===============================
const voteButtons = document.querySelectorAll(".voteBtn");

const voteModal = document.getElementById("voteModal");
const modalPartyName = document.getElementById("modalPartyName");
const modalPartyImg = document.getElementById("modalPartyImg");

const confirmVoteBtn = document.getElementById("confirmVoteBtn");
const cancelVoteBtn = document.getElementById("cancelVoteBtn");

let selectedParty = null;

// disable if already voted
if (alreadyVoted) {
  voteButtons.forEach((btn) => {
    btn.disabled = true;
    btn.textContent = "Vote Locked";
    btn.classList.add("opacity-50", "cursor-not-allowed");
  });
}

// open confirm modal
voteButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const started = localStorage.getItem("voteStarted") === "true";
    const ended = localStorage.getItem("voteEnded") === "true";

    // voting only allowed when election is live
    if (!started || ended) {
      alert("Voting is not active right now.");
      return;
    }

    // find the parent party block of clicked button
    const partyWrapper = btn.closest(".group");
    if (!partyWrapper) {
      alert("Unable to detect selected party.");
      return;
    }

    // get real party name from card heading
    const partyHeading = partyWrapper.querySelector("h3");
    const partyImage = partyWrapper.querySelector("img");

    selectedParty = partyHeading ? partyHeading.textContent.trim() : null;
    const img = partyImage ? partyImage.getAttribute("src") : "";

    if (!selectedParty) {
      alert("Party name not found.");
      return;
    }

    if (modalPartyName) {
      modalPartyName.textContent = selectedParty;
    }

    if (modalPartyImg) {
      modalPartyImg.src = img || "";
      modalPartyImg.alt = selectedParty;
    }

    voteModal?.classList.remove("hidden");
    voteModal?.classList.add("flex");
  });
});

// cancel vote
cancelVoteBtn?.addEventListener("click", () => {
  voteModal?.classList.add("hidden");
  voteModal?.classList.remove("flex");
});

// confirm vote
confirmVoteBtn?.addEventListener("click", () => {
  if (!currentVoter || !selectedParty) return;

  localStorage.setItem("voted_" + currentVoter, "true");
  localStorage.setItem("votedParty_" + currentVoter, selectedParty);
  localStorage.setItem("votedAt_" + currentVoter, new Date().toISOString());

  alert("Vote submitted successfully ✅");

  voteModal?.classList.add("hidden");
  voteModal?.classList.remove("flex");

  voteButtons.forEach((btn) => {
    btn.disabled = true;
    btn.textContent = "Vote Locked";
    btn.classList.add("opacity-50", "cursor-not-allowed");
  });

  setVoterHomeStatus(true, localStorage.getItem("votedAt_" + currentVoter));
});

// ===============================
// ROLE-BASED ADMIN CONTROL
// ===============================
const adminControlPanel = document.getElementById("adminControlPanel");
const startVotingBtn = document.getElementById("startVotingBtn");
const stopVotingBtn = document.getElementById("stopVotingBtn");
const showResultBtn = document.getElementById("showResultBtn");
const resetVotingBtn = document.getElementById("resetVotingBtn");

const electionStateDot = document.getElementById("electionStateDot");
const electionStateText = document.getElementById("electionStateText");

const resultBoard = document.getElementById("resultBoard");
const resultList = document.getElementById("resultList");

if (currentRole === "admin" && adminControlPanel) {
  adminControlPanel.classList.remove("hidden");
}

// ===============================
// ELECTION BADGE UI
// ===============================
function updateElectionStateUI() {
  const started = localStorage.getItem("voteStarted") === "true";
  const ended = localStorage.getItem("voteEnded") === "true";

  if (!electionStateText || !electionStateDot) return;

  if (!started && !ended) {
    electionStateText.textContent = "NOT STARTED";
    electionStateDot.className =
      "w-[10px] h-[10px] rounded-full bg-[rgb(107,114,128)]";
    return;
  }

  if (started && !ended) {
    electionStateText.textContent = "LIVE NOW";
    electionStateDot.className =
      "w-[10px] h-[10px] rounded-full bg-[rgb(34,197,94)]";
    return;
  }

  if (ended) {
    electionStateText.textContent = "VOTING CLOSED";
    electionStateDot.className =
      "w-[10px] h-[10px] rounded-full bg-[rgb(239,68,68)]";
  }
}

// ===============================
// NAVBAR LIVE STATUS UI
// ===============================
function updateLiveVoteNavbarStatus() {
  const liveDot = document.getElementById("liveDot");
  const liveText = document.getElementById("liveText");
  const voteLiveBox = document.getElementById("voteLiveBox");

  if (!liveDot || !liveText || !voteLiveBox) return;

  const started = localStorage.getItem("voteStarted") === "true";
  const ended = localStorage.getItem("voteEnded") === "true";

  if (started && !ended) {
    liveDot.className = "w-[10px] h-[10px] rounded-full bg-[rgb(34,197,94)]";
    liveText.textContent = "LIVE NOW";
    liveText.className =
      "text-[13px] font-[700] text-[rgb(21,128,61)] tracking-[0.4px]";
    voteLiveBox.className =
      "inline-flex items-center gap-[8px] bg-[linear-gradient(90deg,rgba(240,253,244,1)_0%,rgba(220,252,231,1)_100%)] border-[1px] border-[rgba(34,197,94,0.20)] px-[14px] py-[9px] rounded-[999px] shadow-[0px_8px_20px_rgba(34,197,94,0.10)]";
    return;
  }

  if (!started && ended) {
    liveDot.className = "w-[10px] h-[10px] rounded-full bg-[rgb(239,68,68)]";
    liveText.textContent = "VOTING CLOSED";
    liveText.className =
      "text-[13px] font-[700] text-[rgb(185,28,28)] tracking-[0.4px]";
    voteLiveBox.className =
      "inline-flex items-center gap-[8px] bg-[linear-gradient(90deg,rgba(254,242,242,1)_0%,rgba(255,228,230,1)_100%)] border-[1px] border-[rgba(239,68,68,0.20)] px-[14px] py-[9px] rounded-[999px] shadow-[0px_8px_20px_rgba(239,68,68,0.10)]";
    return;
  }

  liveDot.className = "w-[10px] h-[10px] rounded-full bg-[rgb(107,114,128)]";
  liveText.textContent = "NOT STARTED";
  liveText.className =
    "text-[13px] font-[700] text-[rgb(71,85,105)] tracking-[0.4px]";
  voteLiveBox.className =
    "inline-flex items-center gap-[8px] bg-[linear-gradient(90deg,rgba(248,250,252,1)_0%,rgba(241,245,249,1)_100%)] border-[1px] border-[rgba(148,163,184,0.20)] px-[14px] py-[9px] rounded-[999px] shadow-[0px_8px_20px_rgba(15,23,42,0.06)]";
}

updateElectionStateUI();
updateLiveVoteNavbarStatus();

// ===============================
// ENABLE / DISABLE VOTE BUTTONS
// ===============================
function updateVoteButtonsState() {
  const started = localStorage.getItem("voteStarted") === "true";
  const ended = localStorage.getItem("voteEnded") === "true";
  const voted = localStorage.getItem("voted_" + currentVoter) === "true";

  voteButtons.forEach((btn) => {
    btn.disabled = false;
    btn.classList.remove("opacity-50", "cursor-not-allowed");

    btn.textContent = "Vote";

    if (!started || ended) {
      btn.disabled = true;
      btn.classList.add("opacity-50", "cursor-not-allowed");

      if (ended) {
        btn.textContent = "Voting Closed";
      }
    }

    if (voted) {
      btn.disabled = true;
      btn.textContent = "Vote Locked";
      btn.classList.add("opacity-50", "cursor-not-allowed");
    }
  });
}
updateVoteButtonsState();

// ===============================
// START VOTING
// ===============================
startVotingBtn?.addEventListener("click", () => {
  const ok = confirm("Are you sure you want to START voting now?");
  if (!ok) return;

  localStorage.setItem("voteStarted", "true");
  localStorage.setItem("voteEnded", "false");
  localStorage.setItem("resultShown", "false");

  updateElectionStateUI();
  updateVoteButtonsState();
  updateLiveVoteNavbarStatus();
  updateResultStatusUI();
  loadPublishedResultsIfAvailable();

  alert("Voting has started successfully ✅");
});

// ===============================
// STOP VOTING
// ===============================
stopVotingBtn?.addEventListener("click", () => {
  const ok = confirm("Are you sure you want to STOP voting now?");
  if (!ok) return;

  localStorage.setItem("voteStarted", "false");
  localStorage.setItem("voteEnded", "true");

  updateElectionStateUI();
  updateVoteButtonsState();
  updateLiveVoteNavbarStatus();
  updateResultStatusUI();

  alert("Voting has been stopped ✅");
});

// ===============================
// RESET VOTING
// ===============================
resetVotingBtn?.addEventListener("click", () => {
  const ok = confirm("This will clear all votes and reset the election. Continue?");
  if (!ok) return;

  const keysToDelete = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (
      key.startsWith("voted_") ||
      key.startsWith("votedParty_") ||
      key.startsWith("votedAt_")
    ) {
      keysToDelete.push(key);
    }
  }

  keysToDelete.forEach((key) => localStorage.removeItem(key));

  localStorage.setItem("voteStarted", "false");
  localStorage.setItem("voteEnded", "false");
  localStorage.setItem("resultShown", "false");

  updateElectionStateUI();
  updateLiveVoteNavbarStatus();
  updateResultStatusUI();

  alert("Voting reset successfully ✅");
  window.location.reload();
});

// ===============================
// RESULT DATA CALCULATION
// ===============================
function getAllPartyVotes() {
  const allParties = [
    "Bharatiya Janata Party (BJP)",
    "Indian National Congress (INC)",
    "Aam Aadmi Party (AAP)",
    "Bahujan Samaj Party (BSP)",
    "Communist Party of India (CPI)",
    "Communist Party of India (Marxist) – CPI(M)",
    "National People's Party (NPP)",
    "Nationalist Congress Party (NCP)",
    "Samajwadi Party (SP)",
    "Shiv Sena",
    "Janata Dal (United) – JD(U)",
    "Rashtriya Janata Dal (RJD)",
    "Trinamool Congress (TMC)",
    "Telugu Desam Party (TDP)",
    "Dravida Munnetra Kazhagam (DMK)"
  ];

  const partyVoteMap = {};

  allParties.forEach((party) => {
    partyVoteMap[party] = 0;
  });

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key.startsWith("votedParty_")) {
      const partyName = localStorage.getItem(key);

      if (partyVoteMap.hasOwnProperty(partyName)) {
        partyVoteMap[partyName]++;
      }
    }
  }

  return Object.entries(partyVoteMap)
    .map(([party, votes]) => ({ party, votes }))
    .sort((a, b) => b.votes - a.votes);
}

// ===============================
// RESULT STATUS BADGE UI
// ===============================
function updateResultStatusUI() {
  const resultStatusDot = document.getElementById("resultStatusDot");
  const resultStatusText = document.getElementById("resultStatusText");

  if (!resultStatusDot || !resultStatusText) return;

  const resultShown = localStorage.getItem("resultShown") === "true";

  if (resultShown) {
    resultStatusDot.className =
      "w-[11px] h-[11px] rounded-full bg-[rgb(34,197,94)]";
    resultStatusText.textContent = "RESULT PUBLISHED";
    resultStatusText.className =
      "text-[14px] font-[800] tracking-[0.5px] text-[rgb(21,128,61)]";
  } else {
    resultStatusDot.className =
      "w-[11px] h-[11px] rounded-full bg-[rgb(148,163,184)]";
    resultStatusText.textContent = "RESULT LOCKED";
    resultStatusText.className =
      "text-[14px] font-[800] tracking-[0.5px] text-[rgb(71,85,105)]";
  }
}

// ===============================
// RENDER RESULT BOARD
// ===============================
function renderResults() {
  const resultList = document.getElementById("resultList");
  const winnerSummary = document.getElementById("winnerSummary");

  if (!resultList) return;

  const results = getAllPartyVotes();
  const totalVotes = results.reduce((sum, item) => sum + item.votes, 0);

  resultList.innerHTML = "";
  if (winnerSummary) winnerSummary.innerHTML = "";

  if (results.length === 0) {
    if (winnerSummary) {
      winnerSummary.innerHTML = `
        <div class="text-center">
          <div class="w-[64px] h-[64px] mx-auto rounded-[18px]
          bg-[linear-gradient(135deg,rgba(248,250,252,1)_0%,rgba(226,232,240,1)_100%)]
          border-[1px] border-[rgb(226,232,240)]
          flex items-center justify-center text-[28px]">
            📊
          </div>

          <h3 class="mt-[16px] text-[24px] md:text-[30px] font-[900] text-[rgb(15,23,42)]">
            No Results Available Yet
          </h3>

          <p class="mt-[10px] text-[14px] md:text-[16px] leading-[1.8] font-[500] text-[rgb(71,85,105)] max-w-[680px] mx-auto">
            No votes have been recorded for the current election yet.
          </p>
        </div>
      `;
    }

    resultList.innerHTML = `
      <div class="p-[16px] md:p-[24px] text-center">
        <p class="text-[16px] md:text-[18px] font-[800] text-[rgb(15,23,42)]">No ranked parties to display</p>
      </div>
    `;
    return;
  }

  const winner = results[0];
  const winnerPercent =
    totalVotes > 0 ? ((winner.votes / totalVotes) * 100).toFixed(1) : "0.0";

  // ===============================
  // WINNER SUMMARY
  // ===============================
  if (winnerSummary) {
    winnerSummary.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[18px] md:gap-[22px] items-center">

        <div>
          <div class="inline-flex items-center gap-[8px] px-[12px] py-[7px]
          rounded-[999px] border-[1px] border-[rgba(245,158,11,0.18)]
          bg-[rgba(245,158,11,0.10)]">
            <span class="text-[14px]">👑</span>
            <span class="text-[12px] font-[800] tracking-[0.5px] text-[rgb(180,83,9)]">
              WINNING PARTY
            </span>
          </div>

          <h3 class="mt-[16px] text-[24px] sm:text-[28px] md:text-[36px] font-[900] leading-[1.12] text-[rgb(15,23,42)]">
            ${winner.party}
          </h3>

          <p class="mt-[10px] text-[14px] md:text-[15px] leading-[1.8] font-[500] text-[rgb(71,85,105)] max-w-[760px]">
            This party received the highest number of valid votes in the final published result and secured the top rank in the election.
          </p>

          <div class="mt-[18px] grid grid-cols-2 sm:grid-cols-3 gap-[10px] md:gap-[12px]">
            <div class="rounded-[18px] border-[1px] border-[rgb(226,232,240)]
            bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,250,252,1)_100%)]
            p-[14px]">
              <p class="text-[11px] font-[800] tracking-[0.5px] text-[rgb(100,116,139)]">RANK</p>
              <p class="mt-[6px] text-[20px] font-[900] text-[rgb(15,23,42)]">#1</p>
            </div>

            <div class="rounded-[18px] border-[1px] border-[rgb(226,232,240)]
            bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,250,252,1)_100%)]
            p-[14px]">
              <p class="text-[11px] font-[800] tracking-[0.5px] text-[rgb(100,116,139)]">TOTAL VOTES</p>
              <p class="mt-[6px] text-[20px] font-[900] text-[rgb(15,23,42)]">${winner.votes}</p>
            </div>

            <div class="rounded-[18px] border-[1px] border-[rgb(226,232,240)]
            bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,250,252,1)_100%)]
            p-[14px] col-span-2 sm:col-span-1">
              <p class="text-[11px] font-[800] tracking-[0.5px] text-[rgb(100,116,139)]">VOTE SHARE</p>
              <p class="mt-[6px] text-[20px] font-[900] text-[rgb(22,163,74)]">${winnerPercent}%</p>
            </div>
          </div>
        </div>

        <div class="rounded-[22px] md:rounded-[24px]
        border-[1px] border-[rgb(226,232,240)]
        bg-[linear-gradient(135deg,rgba(255,255,255,1)_0%,rgba(248,250,252,1)_100%)]
        p-[16px] md:p-[20px]
        shadow-[0px_12px_28px_rgba(15,23,42,0.06)]">

          <div class="flex items-center justify-between gap-[12px]">
            <div>
              <p class="text-[12px] font-[800] tracking-[0.5px] text-[rgb(100,116,139)]">WINNER PERFORMANCE</p>
              <p class="mt-[6px] text-[28px] md:text-[34px] font-[900] leading-[1] text-[rgb(15,23,42)]">${winner.votes}</p>
            </div>

            <div class="w-[54px] h-[54px] rounded-[16px]
            bg-[linear-gradient(135deg,rgba(254,249,195,1)_0%,rgba(254,240,138,1)_100%)]
            border-[1px] border-[rgba(245,158,11,0.18)]
            flex items-center justify-center text-[24px]">
              🏆
            </div>
          </div>

          <div class="mt-[18px]">
            <div class="flex items-center justify-between mb-[8px]">
              <span class="text-[12px] font-[700] text-[rgb(100,116,139)]">Vote Share</span>
              <span class="text-[12px] font-[800] text-[rgb(22,163,74)]">${winnerPercent}%</span>
            </div>

            <div class="h-[12px] w-full rounded-[999px] bg-[rgb(226,232,240)] overflow-hidden">
              <div class="h-[12px] rounded-[999px]
              bg-[linear-gradient(90deg,rgba(22,163,74,1)_0%,rgba(34,197,94,1)_100%)]"
              style="width:${winnerPercent}%"></div>
            </div>
          </div>

          <p class="mt-[14px] text-[13px] leading-[1.7] font-[600] text-[rgb(71,85,105)]">
            The top party is highlighted with a winning performance bar for clear voter-side result visualization.
          </p>
        </div>
      </div>
    `;
  }

  // ===============================
  // GRAPH STYLE RANKING LIST
  // ===============================
  results.forEach((item, index) => {
    const percentage =
      totalVotes > 0 ? ((item.votes / totalVotes) * 100).toFixed(1) : "0.0";

    const isWinner = index === 0;

    const row = document.createElement("div");
    row.className = `
      px-[14px] sm:px-[18px] md:px-[24px] py-[14px] md:py-[18px]
      bg-white hover:bg-[rgb(248,250,252)]
      transition duration-[200ms]
    `;

    row.innerHTML = `
      <div class="rounded-[18px] md:rounded-[20px]
      border-[1px] ${isWinner ? "border-[rgba(34,197,94,0.20)] bg-[rgba(240,253,244,0.65)]" : "border-[rgb(226,232,240)] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,250,252,1)_100%)]"}
      p-[14px] md:p-[16px]">

        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[10px]">
          <div class="flex items-start gap-[10px] min-w-0">
            <div class="inline-flex items-center justify-center
            min-w-[42px] h-[42px] px-[12px]
            rounded-[12px]
            border-[1px]
            ${
              isWinner
                ? "border-[rgba(34,197,94,0.18)] bg-[rgba(34,197,94,0.10)] text-[rgb(21,128,61)]"
                : "border-[rgb(226,232,240)] bg-[rgb(248,250,252)] text-[rgb(51,65,85)]"
            }
            text-[16px] font-[900]">
              ${index + 1}
            </div>

            <div class="min-w-0">
              <p class="text-[15px] sm:text-[16px] md:text-[18px] font-[800] text-[rgb(15,23,42)] leading-[1.35] break-words">
                ${item.party}
              </p>
              <p class="mt-[4px] text-[11px] md:text-[12px] font-[700] ${isWinner ? "text-[rgb(21,128,61)]" : "text-[rgb(100,116,139)]"}">
                ${isWinner ? "Winning party" : "Election party"}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-[18px] sm:gap-[22px] shrink-0">
            <div class="text-right">
              <p class="text-[20px] md:text-[24px] font-[900] leading-[1] text-[rgb(15,23,42)]">${item.votes}</p>
              <p class="mt-[5px] text-[10px] md:text-[11px] font-[700] tracking-[0.4px] text-[rgb(100,116,139)]">VOTES</p>
            </div>

            <div class="text-right">
              <p class="text-[16px] md:text-[18px] font-[900] leading-[1] ${isWinner ? "text-[rgb(22,163,74)]" : "text-[rgb(51,65,85)]"}">
                ${percentage}%
              </p>
              <p class="mt-[5px] text-[10px] md:text-[11px] font-[700] tracking-[0.4px] text-[rgb(100,116,139)]">SHARE</p>
            </div>
          </div>
        </div>

        <div class="mt-[12px]">
          <div class="h-[10px] md:h-[12px] w-full rounded-[999px] bg-[rgb(226,232,240)] overflow-hidden">
            <div class="h-[10px] md:h-[12px] rounded-[999px]
            ${isWinner
              ? "bg-[linear-gradient(90deg,rgba(22,163,74,1)_0%,rgba(34,197,94,1)_100%)]"
              : "bg-[linear-gradient(90deg,rgba(37,99,235,1)_0%,rgba(59,130,246,1)_100%)]"}"
            style="width:${percentage}%"></div>
          </div>
        </div>
      </div>
    `;

    resultList.appendChild(row);
  });
}

// ===============================
// SHOW RESULT
// ===============================
showResultBtn?.addEventListener("click", () => {
  const ok = confirm("Are you sure you want to PUBLISH the final result?");
  if (!ok) return;

  const ended = localStorage.getItem("voteEnded") === "true";

  if (!ended) {
    alert("Please stop voting first before showing results.");
    return;
  }

  localStorage.setItem("resultShown", "true");

  renderResults();
  updateResultStatusUI();

  if (resultBoard) {
    resultBoard.classList.remove("hidden");
  }

  const lockedCard = document.getElementById("lockedResultCard");
  if (lockedCard) {
    lockedCard.classList.add("hidden");
  }

  if (typeof showTab === "function") {
    showTab("results");
  }

  alert("Final result published successfully ✅");
});

// ===============================
// LOAD RESULT IF ALREADY SHOWN
// ===============================
function loadPublishedResultsIfAvailable() {
  const resultShown = localStorage.getItem("resultShown") === "true";

  const resultBoard = document.getElementById("resultBoard");
  const lockedCard = document.getElementById("lockedResultCard");

  updateResultStatusUI();

  if (resultShown) {
    renderResults();

    if (resultBoard) {
      resultBoard.classList.remove("hidden");
    }

    if (lockedCard) {
      lockedCard.classList.add("hidden");
    }
  } else {
    if (resultBoard) {
      resultBoard.classList.add("hidden");
    }

    if (lockedCard) {
      lockedCard.classList.remove("hidden");
    }
  }
}

loadPublishedResultsIfAvailable();

//Go to parties & read instructions (home tab)
const goToPartiesBtn = document.getElementById("goToPartiesBtn");
const readInstructionsBtn = document.getElementById("readInstructionsBtn");

goToPartiesBtn?.addEventListener("click", () => {
  showTab("parties");
});

readInstructionsBtn?.addEventListener("click", () => {
  showTab("how");
});

// ===============================
// LOGOUT SYSTEM
// ===============================
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn?.addEventListener("click", () => {
  const confirmLogout = confirm("Are you sure you want to logout?");
  if (!confirmLogout) return;

  // remove login session
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userRole");
  localStorage.removeItem("voterName");

  // redirect to login
  window.location.href = "login.html";
});
const mobileBtns = document.querySelectorAll(".mobileNavBtn");
const sections = document.querySelectorAll(".tabSection");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");

mobileBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;

    // hide all sections
    sections.forEach((sec) => {
      sec.classList.add("hidden");
      sec.classList.remove("block");
    });

    // map nav button to tab section
    let sectionId = "";

    if (target === "navHome") sectionId = "tab-home";
    if (target === "navHow") sectionId = "tab-how";
    if (target === "navStatus") sectionId = "tab-status";
    if (target === "navParties") sectionId = "tab-parties";
    if (target === "navResults") sectionId = "tab-results";

    const section = document.getElementById(sectionId);

    if (section) {
      section.classList.remove("hidden");
      section.classList.add("block");
    }

    // auto close sidebar on mobile
    if (mobileMenuToggle) {
      mobileMenuToggle.checked = false;
    }
  });
});

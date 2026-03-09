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
      navToActivate.classList.add(
        "border-y-red-600",
        "text-red-600",
        "scale-[1.12]",
        "translate-y-[-3px]"
      );
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

    if (!started || ended) {
      alert("Voting is not active right now.");
      return;
    }

    selectedParty = btn.dataset.party;
    const img = btn.dataset.img;

    if (modalPartyName) modalPartyName.textContent = selectedParty;
    if (modalPartyImg) modalPartyImg.src = img;

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
    liveText.className = "text-[13px] font-[700] text-[rgb(21,128,61)] tracking-[0.4px]";
    voteLiveBox.className =
      "inline-flex items-center gap-[8px] bg-[linear-gradient(90deg,rgba(240,253,244,1)_0%,rgba(220,252,231,1)_100%)] border-[1px] border-[rgba(34,197,94,0.20)] px-[14px] py-[9px] rounded-[999px] shadow-[0px_8px_20px_rgba(34,197,94,0.10)]";
    return;
  }

  if (!started && ended) {
    liveDot.className = "w-[10px] h-[10px] rounded-full bg-[rgb(239,68,68)]";
    liveText.textContent = "VOTING CLOSED";
    liveText.className = "text-[13px] font-[700] text-[rgb(185,28,28)] tracking-[0.4px]";
    voteLiveBox.className =
      "inline-flex items-center gap-[8px] bg-[linear-gradient(90deg,rgba(254,242,242,1)_0%,rgba(255,228,230,1)_100%)] border-[1px] border-[rgba(239,68,68,0.20)] px-[14px] py-[9px] rounded-[999px] shadow-[0px_8px_20px_rgba(239,68,68,0.10)]";
    return;
  }

  liveDot.className = "w-[10px] h-[10px] rounded-full bg-[rgb(107,114,128)]";
  liveText.textContent = "NOT STARTED";
  liveText.className = "text-[13px] font-[700] text-[rgb(71,85,105)] tracking-[0.4px]";
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

    if (!started || ended) {
      btn.disabled = true;
      btn.classList.add("opacity-50", "cursor-not-allowed");
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

  alert("Voting reset successfully ✅");
  window.location.reload();
});

// ===============================
// RESULT DATA CALCULATION
// ===============================
function getAllPartyVotes() {
  const partyVoteMap = {};

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key.startsWith("votedParty_")) {
      const partyName = localStorage.getItem(key);

      if (!partyVoteMap[partyName]) {
        partyVoteMap[partyName] = 0;
      }

      partyVoteMap[partyName]++;
    }
  }

  return Object.entries(partyVoteMap)
    .map(([party, votes]) => ({ party, votes }))
    .sort((a, b) => b.votes - a.votes);
}

// ===============================
// RENDER RESULT BOARD
// ===============================
function renderResults() {
  if (!resultList) return;

  const results = getAllPartyVotes();
  resultList.innerHTML = "";

  if (results.length === 0) {
    resultList.innerHTML = `
      <div class="rounded-[20px] border-[1px] border-[rgb(203,213,225)]
      bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,250,252,1)_100%)]
      p-[18px] text-center text-[rgb(71,85,105)] font-[700]">
        No votes have been recorded yet.
      </div>
    `;
    return;
  }

  results.forEach((item, index) => {
    const isWinner = index === 0;

    const row = document.createElement("div");
    row.className = `
      rounded-[22px] border-[1px] p-[18px]
      ${
        isWinner
          ? "border-[rgba(234,179,8,0.20)] bg-[linear-gradient(135deg,rgba(254,249,195,1)_0%,rgba(255,255,255,1)_100%)] shadow-[0px_12px_28px_rgba(234,179,8,0.12)]"
          : "border-[rgb(203,213,225)] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,250,252,1)_100%)] shadow-[0px_10px_20px_rgba(15,23,42,0.06)]"
      }
    `;

    row.innerHTML = `
      <div class="flex items-center justify-between gap-[16px]">
        <div class="flex items-center gap-[14px]">
          <div class="w-[48px] h-[48px] rounded-[16px]
          ${
            isWinner
              ? "bg-[linear-gradient(135deg,rgba(253,230,138,1)_0%,rgba(254,249,195,1)_100%)] text-[rgb(133,77,14)]"
              : "bg-[linear-gradient(135deg,rgba(241,245,249,1)_0%,rgba(226,232,240,1)_100%)] text-[rgb(71,85,105)]"
          }
          flex items-center justify-center text-[20px] font-[900]">
            ${index + 1}
          </div>

          <div>
            <p class="text-[22px] font-[900] text-[rgb(15,23,42)]">
              ${item.party} ${isWinner ? "👑" : ""}
            </p>
            <p class="mt-[4px] text-[13px] font-[600] text-[rgb(100,116,139)]">
              ${isWinner ? "Leading / Winner Party" : "Election Party"}
            </p>
          </div>
        </div>

        <div class="text-right">
          <p class="text-[12px] font-[800] tracking-[0.5px] text-[rgb(100,116,139)]">TOTAL VOTES</p>
          <p class="mt-[6px] text-[28px] font-[900] text-[rgb(15,23,42)]">${item.votes}</p>
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
if (localStorage.getItem("resultShown") === "true") {
  renderResults();

  if (resultBoard) {
    resultBoard.classList.remove("hidden");
  }

  const lockedCard = document.getElementById("lockedResultCard");
  if (lockedCard) {
    lockedCard.classList.add("hidden");
  }
}
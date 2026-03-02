// ===============================
// ADMIN FIXED REGISTERED DETAILS
// ===============================
const ADMIN = {
  username: "admin",
  password: "admin123"
};

// ===============================
const tabVoter = document.getElementById("tabVoter");
const tabAdmin = document.getElementById("tabAdmin");

const adminTools = document.getElementById("adminTools");
const showBtn = document.getElementById("showAdminDetailsBtn");
const adminBox = document.getElementById("adminDetailsBox");

const adminUserText = document.getElementById("adminUserText");
const adminPassText = document.getElementById("adminPassText");

const roleInput = document.getElementById("role");

const form = document.getElementById("loginForm");
const password = document.getElementById("password");
const togglePass = document.getElementById("togglePass");

const voteStatus = document.getElementById("voteStatus");

// ===============================
// STATUS UI (STYLING CONTROLLER)
// ===============================
function setStatusUI(type, message) {
  // type: "live" | "wait" | "admin" | "error"
  const base =
    "inline-flex items-center gap-[8px] rounded-[10px] px-[10px] py-[6px] text-[11px] font-[800] border";

  // Reset classes safely (only voteStatus element)
  voteStatus.className = base;

  if (type === "live") {
    voteStatus.classList.add("bg-green-500/15", "border-green-300/40", "text-green-100");
    voteStatus.innerHTML = `<span class="text-[12px]">✅</span> ${message}`;
    return;
  }

  if (type === "admin") {
    voteStatus.classList.add("bg-blue-500/15", "border-blue-300/40", "text-blue-100");
    voteStatus.innerHTML = `<span class="text-[12px]">🔐</span> ${message}`;
    return;
  }

  if (type === "error") {
    voteStatus.classList.add("bg-red-500/15", "border-red-300/40", "text-red-100");
    voteStatus.innerHTML = `<span class="text-[12px]">⚠️</span> ${message}`;
    return;
  }

  // default = wait
  voteStatus.classList.add("bg-amber-500/15", "border-amber-300/40", "text-amber-100");
  voteStatus.innerHTML = `<span class="text-[12px]">⏳</span> ${message}`;
}

// ===============================
// DEFAULT STATE
// ===============================
if (localStorage.getItem("voteStarted") === null) {
  localStorage.setItem("voteStarted", "false");
}

// ===============================
// TAB SWITCHING
// ===============================
tabAdmin.addEventListener("click", () => {
  roleInput.value = "admin";
  adminTools.classList.remove("hidden");

  tabAdmin.classList.add("bg-white/25");
  tabVoter.classList.remove("bg-white/25");

  // was: voteStatus.innerText = ...
  setStatusUI("admin", "Admin login required to start voting.");
});

tabVoter.addEventListener("click", () => {
  roleInput.value = "voter";
  adminTools.classList.add("hidden");

  tabVoter.classList.add("bg-white/25");
  tabAdmin.classList.remove("bg-white/25");

  checkVotingStatus();
});

// ===============================
// SHOW ADMIN DETAILS BUTTON
// ===============================
showBtn.addEventListener("click", () => {
  adminUserText.textContent = ADMIN.username;
  adminPassText.textContent = ADMIN.password;

  adminBox.classList.toggle("hidden");
});

// ===============================
// PASSWORD TOGGLE
// ===============================
togglePass.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglePass.textContent = "HIDE";
  } else {
    password.type = "password";
    togglePass.textContent = "SHOW";
  }
});

// ===============================
// CHECK VOTING STATUS
// ===============================
function checkVotingStatus() {
  if (localStorage.getItem("voteStarted") === "true") {
    setStatusUI("live", "Voting LIVE. You may login.");
  } else {
    setStatusUI("wait", "Voting not started yet. Wait for Admin.");
  }
}

checkVotingStatus();

// ===============================
// LOGIN LOGIC
// ===============================
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const role = roleInput.value;

  // ========= ADMIN LOGIN =========
  if (role === "admin") {
    if (username === ADMIN.username && pass === ADMIN.password) {
      alert("Admin Login Successful ✅");

      // Admin starts vote automatically
      localStorage.setItem("voteStarted", "true");

      window.location.href = "admin-dashboard.html";
    } else {
      alert("Invalid Admin Credentials ❌");
      setStatusUI("error", "Invalid Admin Credentials.");
    }
    return;
  }

  // ========= VOTER LOGIN =========
  if (localStorage.getItem("voteStarted") !== "true") {
    alert("Voting not started yet!");
    setStatusUI("wait", "Voting not started yet. Wait for Admin.");
    return;
  }

  if (username === "" || pass === "") {
    alert("Enter voter credentials");
    setStatusUI("error", "Please enter voter credentials.");
    return;
  }

  alert("Voter Login Successful ✅");
  window.location.href = "voter-dashboard.html";
});

// ===============================
// LEARN MORE MODAL
// ===============================
const learnBtn = document.getElementById("learnMoreBtn");
const modal = document.getElementById("learnModal");
const closeModal = document.getElementById("closeModal");

learnBtn?.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

closeModal?.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// close when clicking outside
modal?.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// ===============================
// RESET VOTING (ADMIN ONLY)
// ===============================
const resetVoteBtn = document.getElementById("resetVoteBtn");

resetVoteBtn?.addEventListener("click", () => {
  if (roleInput.value !== "admin") {
    alert("Access denied. Only Admin can reset voting.");
    setStatusUI("error", "Access denied. Admin only.");
    return;
  }

  localStorage.setItem("voteStarted", "false");
  alert("Voting reset successful. Voters are blocked until Admin starts again.");
  checkVotingStatus();
});
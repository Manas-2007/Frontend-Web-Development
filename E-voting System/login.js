// ===============================
// ADMIN FIXED REGISTERED DETAILS
// ===============================
const ADMIN = {
  username: "admin",
  password: "admin123"
};

// ===============================
// ELEMENTS
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
const usernameInput = document.getElementById("username");
const password = document.getElementById("password");
const togglePass = document.getElementById("togglePass");

const voteStatus = document.getElementById("voteStatus");

const learnBtn = document.getElementById("learnMoreBtn");
const modal = document.getElementById("learnModal");
const closeModal = document.getElementById("closeModal");

// ===============================
// DEFAULT STATE
// ===============================
if (localStorage.getItem("voteStarted") === null) {
  localStorage.setItem("voteStarted", "false");
}

// ===============================
// STATUS UI
// ===============================
function setStatusUI(type, message) {

  const base =
    "inline-flex items-center gap-[8px] rounded-[12px] px-[12px] py-[7px] text-[12px] font-[700] border-[1px]";

  voteStatus.className = base;

  if (type === "live") {
    voteStatus.classList.add(
      "bg-emerald-400/12",
      "border-emerald-400/30",
      "text-emerald-100"
    );
    voteStatus.innerHTML = `✅ ${message}`;
    return;
  }

  if (type === "admin") {
    voteStatus.classList.add(
      "bg-blue-400/12",
      "border-blue-300/30",
      "text-blue-100"
    );
    voteStatus.innerHTML = `🔐 ${message}`;
    return;
  }

  if (type === "error") {
    voteStatus.classList.add(
      "bg-red-400/12",
      "border-red-300/30",
      "text-red-100"
    );
    voteStatus.innerHTML = `⚠️ ${message}`;
    return;
  }

  voteStatus.classList.add(
    "bg-amber-400/12",
    "border-amber-300/30",
    "text-amber-100"
  );
  voteStatus.innerHTML = `⏳ ${message}`;
}

// ===============================
// TAB UI STYLING
// ===============================
function setActiveTab(activeRole) {

  const activeClasses = [
    "bg-white/20",
    "border-white/45",
    "text-white",
    "shadow-[0px_8px_20px_rgba(255,255,255,0.08)]"
  ];

  const inactiveClasses = [
    "bg-white/10",
    "border-white/30",
    "text-white"
  ];

  tabVoter.classList.remove(...activeClasses);
  tabAdmin.classList.remove(...activeClasses);

  tabVoter.classList.add(...inactiveClasses);
  tabAdmin.classList.add(...inactiveClasses);

  if (activeRole === "admin") {
    tabAdmin.classList.remove(...inactiveClasses);
    tabAdmin.classList.add(...activeClasses);
  } else {
    tabVoter.classList.remove(...inactiveClasses);
    tabVoter.classList.add(...activeClasses);
  }
}

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

// ===============================
// SWITCH TO ADMIN
// ===============================
function switchToAdmin() {

  roleInput.value = "admin";
  adminTools.classList.remove("hidden");

  setActiveTab("admin");
  setStatusUI("admin", "Admin login required to control voting.");

  adminBox?.classList.add("hidden");

  usernameInput?.focus();
}

// ===============================
// SWITCH TO VOTER
// ===============================
function switchToVoter() {

  roleInput.value = "voter";
  adminTools.classList.add("hidden");

  adminBox?.classList.add("hidden");

  setActiveTab("voter");
  checkVotingStatus();

  usernameInput?.focus();
}

// ===============================
// TAB EVENTS
// ===============================
tabAdmin?.addEventListener("click", switchToAdmin);
tabVoter?.addEventListener("click", switchToVoter);

// ===============================
// SHOW ADMIN DETAILS
// ===============================
showBtn?.addEventListener("click", () => {

  adminUserText.textContent = ADMIN.username;
  adminPassText.textContent = ADMIN.password;

  adminBox.classList.toggle("hidden");
});

// ===============================
// PASSWORD TOGGLE
// ===============================
togglePass?.addEventListener("click", () => {

  if (password.type === "password") {
    password.type = "text";
    togglePass.textContent = "HIDE";
  } else {
    password.type = "password";
    togglePass.textContent = "SHOW";
  }
});

// ===============================
// LOGIN LOGIC
// ===============================
form?.addEventListener("submit", (e) => {

  e.preventDefault();

  const username = usernameInput.value.trim();
  const pass = password.value.trim();
  const role = roleInput.value;

  // ========= ADMIN LOGIN =========
  if (role === "admin") {

    if (username === ADMIN.username && pass === ADMIN.password) {

      alert("Admin Login Successful ✅");

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", "admin");

      localStorage.setItem("voteStarted", "true");

      window.location.href = "dashboard.html";

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

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userRole", "voter");
  localStorage.setItem("voterName", username);

window.location.href = "dashboard.html";
});

// ===============================
// LEARN MORE MODAL
// ===============================
learnBtn?.addEventListener("click", () => {

  modal.classList.remove("hidden");
  modal.classList.add("flex");

});

function closeLearnModal() {

  modal.classList.add("hidden");
  modal.classList.remove("flex");

}

closeModal?.addEventListener("click", closeLearnModal);

modal?.addEventListener("click", (e) => {

  if (e.target === modal) {
    closeLearnModal();
  }

});

document.addEventListener("keydown", (e) => {

  if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
    closeLearnModal();
  }

});

// ===============================
// INITIAL PAGE LOAD STATE
// ===============================
switchToVoter();

password.type = "password";

if (togglePass) togglePass.textContent = "SHOW";
// ABOUT MODAL
const aboutBtn = document.getElementById("aboutBtn");
const aboutModal = document.getElementById("aboutModal");
const aboutOverlay = document.getElementById("aboutOverlay");
const aboutClose = document.getElementById("aboutClose");
const aboutOk = document.getElementById("aboutOk");
const aboutGoHow = document.getElementById("aboutGoHow");

function openAbout() {
  aboutModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeAbout() {
  aboutModal.classList.add("hidden");
  document.body.style.overflow = "";
}

aboutBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  openAbout();
});

aboutOverlay?.addEventListener("click", closeAbout);
aboutClose?.addEventListener("click", closeAbout);
aboutOk?.addEventListener("click", closeAbout);

aboutGoHow?.addEventListener("click", () => {
  closeAbout();
});

// ESC close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !aboutModal.classList.contains("hidden")) {
    closeAbout();
  }
});


// FEATURES MODAL
const featuresBtn = document.getElementById("featuresBtn");
const featuresModal = document.getElementById("featuresModal");
const featuresOverlay = document.getElementById("featuresOverlay");
const featuresClose = document.getElementById("featuresClose");
const featuresOk = document.getElementById("featuresOk");

function openFeatures() {
  featuresModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeFeatures() {
  featuresModal.classList.add("hidden");
  document.body.style.overflow = "";
}

featuresBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  openFeatures();
});

featuresOverlay?.addEventListener("click", closeFeatures);
featuresClose?.addEventListener("click", closeFeatures);
featuresOk?.addEventListener("click", closeFeatures);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !featuresModal.classList.contains("hidden")) {
    closeFeatures();
  }
});

// HOW IT WORKS MODAL
const howBtn = document.getElementById("howBtn");
const howBtnMobile = document.getElementById("howBtnMobile");
const howModal = document.getElementById("howModal");
const howOverlay = document.getElementById("howOverlay");
const howClose = document.getElementById("howClose");
const howOk = document.getElementById("howOk");

function openHow() {
  howModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function closeHow() {
  howModal.classList.add("hidden");
  document.body.style.overflow = "";
}

howBtn?.addEventListener("click", (e) => { e.preventDefault(); openHow(); });
howBtnMobile?.addEventListener("click", (e) => { e.preventDefault(); openHow(); });

howOverlay?.addEventListener("click", closeHow);
howClose?.addEventListener("click", closeHow);
howOk?.addEventListener("click", closeHow);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !howModal.classList.contains("hidden")) closeHow();
});


// SECURITY MODAL
const securityBtn = document.getElementById("securityBtn");
const securityBtnMobile = document.getElementById("securityBtnMobile");
const securityModal = document.getElementById("securityModal");
const securityOverlay = document.getElementById("securityOverlay");
const securityClose = document.getElementById("securityClose");
const securityOk = document.getElementById("securityOk");

function openSecurity() {
  securityModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function closeSecurity() {
  securityModal.classList.add("hidden");
  document.body.style.overflow = "";
}

securityBtn?.addEventListener("click", (e) => { e.preventDefault(); openSecurity(); });
securityBtnMobile?.addEventListener("click", (e) => { e.preventDefault(); openSecurity(); });

securityOverlay?.addEventListener("click", closeSecurity);
securityClose?.addEventListener("click", closeSecurity);
securityOk?.addEventListener("click", closeSecurity);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !securityModal.classList.contains("hidden")) closeSecurity();
});

// GUIDELINES MODAL
const guideBtn = document.getElementById("guideBtn");
const guideBtnMobile = document.getElementById("guideBtnMobile");
const guideModal = document.getElementById("guideModal");
const guideOverlay = document.getElementById("guideOverlay");
const guideClose = document.getElementById("guideClose");
const guideOk = document.getElementById("guideOk");

function openGuide(){
  guideModal.classList.remove("hidden");
  document.body.style.overflow="hidden";
}
function closeGuide(){
  guideModal.classList.add("hidden");
  document.body.style.overflow="";
}

guideBtn?.addEventListener("click",(e)=>{e.preventDefault();openGuide();});
guideBtnMobile?.addEventListener("click",(e)=>{e.preventDefault();openGuide();});

guideOverlay?.addEventListener("click",closeGuide);
guideClose?.addEventListener("click",closeGuide);
guideOk?.addEventListener("click",closeGuide);

document.addEventListener("keydown",(e)=>{
 if(e.key==="Escape" && !guideModal.classList.contains("hidden")) closeGuide();
});

// CONTACT MODAL
const contactBtn = document.getElementById("contactBtn");
const contactBtnMobile = document.getElementById("contactBtnMobile");
const contactModal = document.getElementById("contactModal");
const contactOverlay = document.getElementById("contactOverlay");
const contactClose = document.getElementById("contactClose");
const contactOk = document.getElementById("contactOk");

function openContact() {
  contactModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function closeContact() {
  contactModal.classList.add("hidden");
  document.body.style.overflow = "";
}

contactBtn?.addEventListener("click", (e) => { e.preventDefault(); openContact(); });
contactBtnMobile?.addEventListener("click", (e) => { e.preventDefault(); openContact(); });

contactOverlay?.addEventListener("click", closeContact);
contactClose?.addEventListener("click", closeContact);
contactOk?.addEventListener("click", closeContact);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !contactModal.classList.contains("hidden")) closeContact();
});
// ABOUT MODAL (CLASS BASED)
const aboutBtns = document.querySelectorAll(".openAbout");

const aboutModal = document.getElementById("aboutModal");
const aboutOverlay = document.getElementById("aboutOverlay");
const aboutClose = document.getElementById("aboutClose");
const aboutOk = document.getElementById("aboutOk");

function openAbout(){
  aboutModal.classList.remove("hidden");
  document.body.style.overflow="hidden";
}

function closeAbout(){
  aboutModal.classList.add("hidden");
  document.body.style.overflow="";
}

aboutBtns.forEach(btn=>{
  btn.addEventListener("click",(e)=>{
    e.preventDefault();
    openAbout();
  });
});

aboutOverlay?.addEventListener("click",closeAbout);
aboutClose?.addEventListener("click",closeAbout);
aboutOk?.addEventListener("click",closeAbout);

document.addEventListener("keydown",(e)=>{
  if(e.key==="Escape" && !aboutModal.classList.contains("hidden")){
    closeAbout();
  }
});

// ESC close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !aboutModal.classList.contains("hidden")) {
    closeAbout();
  }
});


// FEATURES MODAL (CLASS BASED)
const featureBtns = document.querySelectorAll(".openFeatures");

const featuresModal = document.getElementById("featuresModal");
const featuresOverlay = document.getElementById("featuresOverlay");
const featuresClose = document.getElementById("featuresClose");
const featuresOk = document.getElementById("featuresOk");

function openFeatures(){
  featuresModal.classList.remove("hidden");
  document.body.style.overflow="hidden";
}

function closeFeatures(){
  featuresModal.classList.add("hidden");
  document.body.style.overflow="";
}

featureBtns.forEach(btn=>{
  btn.addEventListener("click",(e)=>{
    e.preventDefault();
    openFeatures();
  });
});

featuresOverlay?.addEventListener("click",closeFeatures);
featuresClose?.addEventListener("click",closeFeatures);
featuresOk?.addEventListener("click",closeFeatures);

document.addEventListener("keydown",(e)=>{
  if(e.key==="Escape" && !featuresModal.classList.contains("hidden")){
    closeFeatures();
  }
});
// HOW IT WORKS MODAL (CLASS BASED)
const howBtns = document.querySelectorAll(".howBtn");

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

// 🔥 sab buttons automatically work
howBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    openHow();
  });
});

// close actions
howOverlay?.addEventListener("click", closeHow);
howClose?.addEventListener("click", closeHow);
howOk?.addEventListener("click", closeHow);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !howModal.classList.contains("hidden")) {
    closeHow();
  }
});

// SECURITY MODAL (CLASS BASED)
const securityBtns = document.querySelectorAll(".openSecurity");

const securityModal = document.getElementById("securityModal");
const securityOverlay = document.getElementById("securityOverlay");
const securityClose = document.getElementById("securityClose");
const securityOk = document.getElementById("securityOk");

function openSecurity(){
  securityModal.classList.remove("hidden");
  document.body.style.overflow="hidden";
}
function closeSecurity(){
  securityModal.classList.add("hidden");
  document.body.style.overflow="";
}

securityBtns.forEach(btn=>{
  btn.addEventListener("click",(e)=>{
    e.preventDefault();
    openSecurity();
  });
});

securityOverlay?.addEventListener("click",closeSecurity);
securityClose?.addEventListener("click",closeSecurity);
securityOk?.addEventListener("click",closeSecurity);

document.addEventListener("keydown",(e)=>{
 if(e.key==="Escape" && !securityModal.classList.contains("hidden")) closeSecurity();
});

// GUIDELINES MODAL
const guideBtns = document.querySelectorAll(".openGuide");

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

guideBtns.forEach(btn=>{
  btn.addEventListener("click",(e)=>{
    e.preventDefault();
    openGuide();
  });
});

guideOverlay?.addEventListener("click",closeGuide);
guideClose?.addEventListener("click",closeGuide);
guideOk?.addEventListener("click",closeGuide);

document.addEventListener("keydown",(e)=>{
 if(e.key==="Escape" && !guideModal.classList.contains("hidden")) closeGuide();
});

//CONTACT MODAL (CLASS BASED)
const contactBtns = document.querySelectorAll(".openContact");

const contactModal = document.getElementById("contactModal");
const contactOverlay = document.getElementById("contactOverlay");
const contactClose = document.getElementById("contactClose");
const contactOk = document.getElementById("contactOk");

function openContact(){
  contactModal.classList.remove("hidden");
  document.body.style.overflow="hidden";
}

function closeContact(){
  contactModal.classList.add("hidden");
  document.body.style.overflow="";
}

contactBtns.forEach(btn=>{
  btn.addEventListener("click",(e)=>{
    e.preventDefault();
    openContact();
  });
});

contactOverlay?.addEventListener("click",closeContact);
contactClose?.addEventListener("click",closeContact);
contactOk?.addEventListener("click",closeContact);

document.addEventListener("keydown",(e)=>{
  if(e.key==="Escape" && !contactModal.classList.contains("hidden")){
    closeContact();
  }
});

const startVoteBtn = document.getElementById("startVoteBtn");

startVoteBtn?.addEventListener("click", () => {
  window.location.href = "./login.html";  // same folder me ho to
});
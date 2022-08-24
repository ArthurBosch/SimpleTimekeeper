//DOM
const DOMElements = {
  navIcon: document.querySelector("#navIcon"),
  overlay: document.querySelector("#overlay"),
  shiftInfo: document.querySelector("#shiftInfo"),
  shiftInfoMin: document.querySelector("#shiftInfoMin"),
  circleButton: document.querySelector("#circleButton"),
  sidenav: document.querySelector("#navigation"),
  main: document.querySelector("#main"),
  container: document.querySelector("#container"),
};

//FUNCS
const showNav = () => {
  DOMElements.sidenav.style.right = 0;
  DOMElements.navIcon.classList.add("visibility-hidden");
  DOMElements.overlay.classList.add("overlay");
};

const hideNav = (e) => {
  if (e.target.closest("#navigation")) return;
  DOMElements.sidenav.style.right = "-800px";
  DOMElements.navIcon.classList.remove("visibility-hidden");
  DOMElements.overlay.classList.remove("overlay");
};

const showShiftInfo = () => {
  console.log("click");
  DOMElements.shiftInfo.style.bottom = 0;
};

const hideShiftInfo = (e) => {
  if (e.target.closest("#shiftInfo")) return;
  DOMElements.shiftInfo.style.bottom = "-270px";
};

//LISTENERS
const setupListeners = () => {
  DOMElements.navIcon.addEventListener("click", showNav);
  DOMElements.overlay.addEventListener("click", hideNav);
  DOMElements.circleButton.addEventListener("click", showShiftInfo);
  DOMElements.container.addEventListener("click", hideShiftInfo);
};

setupListeners();

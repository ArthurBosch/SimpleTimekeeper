//DOM
const DOMElements = {
  navIcon: document.querySelector("#navIcon"),
  overlay: document.querySelector("#overlay"),
  shiftInfo: document.querySelector("#shiftInfo"),
  shiftInfoMin: document.querySelector("#shiftInfoMin"),
  circleButton: document.querySelector("#circleButton"),
  sidenav: document.querySelector("#navigation"),
  body: document.querySelector("body"),
};

//FUNCS
const showNav = () => {
  console.log("click");
  DOMElements.sidenav.style.right = 0;
  DOMElements.navIcon.classList.add("hidden");
  DOMElements.overlay.classList.add("overlay");
};

const hideNav = () => {
  console.log("lay");
  DOMElements.sidenav.style.right = "-800px";
  DOMElements.navIcon.classList.remove("hidden");
  DOMElements.overlay.classList.remove("overlay");
  DOMElements.shiftInfo.style.bottom = "-270px";
};

const showShiftInfo = () => {
  DOMElements.shiftInfo.style.bottom = 0;
};

//LISTENERS
const setupListeners = () => {
  DOMElements.navIcon.addEventListener("click", showNav);
  DOMElements.overlay.addEventListener("click", hideNav);
  DOMElements.circleButton.addEventListener("click", showShiftInfo);
};

setupListeners();

/***************************
NAVBAR BUTTON  
***************************/

const menuBtn = document.querySelector(".navbar-toggler");

var menuOpen = false;

const navbarOpen = () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
};

const navbarFocusClose = () => {
  if (menuOpen) {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
};

menuBtn.addEventListener("click", () => {
  navbarOpen();
});

menuBtn.addEventListener("focus", () => {
  navbarFocusClose();
});

/***************************
NAVBAR BUTTON ENDS 
***************************/

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



/***************************
DARK MODE 
***************************/

// Select the button and add an event listener
var toggleButton = document.querySelector("#toggle-button");
toggleButton.addEventListener("click", toggleClass);

// Function to toggle the class
function toggleClass() {;
  
    var elements = document.querySelectorAll(".my-class-card")

  for (var x = 0; x < elements.length; x++) {
    // Check if the button is active or not
    if (toggleButton.classList.contains("dark-mode-card")) {
      // If active, remove the class
      elements[x].classList.remove("dark-mode-card-active");
    } else {
      // If not active, add the class
      elements[x].classList.add("dark-mode-card-active");
    }
  }
  
  
  // Select all elements with the class "my-class"
  var elements = document.querySelectorAll(".my-class")
  // Loop through the elements
  for (var i = 0; i < elements.length; i++) {
    // Check if the button is active or not
    if (toggleButton.classList.contains("dark-mode")) {
      // If active, remove the class
      elements[i].classList.remove("dark-mode-active");
    } else {
      // If not active, add the class
      elements[i].classList.add("dark-mode-active");
    }
  }





  var elements = document.querySelectorAll(".togglers")

  for (var t = 0; t < elements.length; t++) {
    // Check if the button is active or not
    if (toggleButton.classList.contains("toggler-display")) {
      // If active, remove the class
      elements[t].classList.remove("toggler-display-active");
    }   
    else {
      // If not active, add the class
      elements[t].classList.add("toggler-display-active");
    }
  }


  

  // Toggle the active class on the button
  toggleButton.classList.toggle("dark-mode");
  toggleButton.classList.toggle("toggler-display");
  toggleButton.classList.toggle("dark-mode-card");

}










/***************************
DARK MODE ENDS
***************************/



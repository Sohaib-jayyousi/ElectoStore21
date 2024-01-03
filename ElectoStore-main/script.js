// ------- js for menu --------//

var Menuİtems = document.getElementById("Menuİtems");

Menuİtems.style.maxHeight = "0px";

function menutoggle() {
  if (Menuİtems.style.maxHeight == "0px") {
    Menuİtems.style.maxHeight = "200px";
  } else {
    Menuİtems.style.maxHeight = "0px";
  }
}

//---------- js for product gallery --------//

//----------- jv for toggle form -------//

function userScroll() {
  const navbar = document.getElementsByClassName(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("navbar-sticky");
    }
  });
}

document.addEventListener(DOMContentLoaded, userScroll);

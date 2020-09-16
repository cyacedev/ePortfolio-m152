function navToggle() {
  var btn = document.getElementById("menuBtn");
  var navMenuMobile = document.getElementById("navMenuMobile");
  var header = document.getElementById("header");
  var menuIcon = document.getElementById("menuIcon");
  var closeIcon = document.getElementById("closeIcon");

  navMenuMobile.classList.toggle("hidden");
  navMenuMobile.classList.toggle("flex");
  navMenuMobile.classList.toggle("shadow");
  header.classList.toggle("shadow");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}

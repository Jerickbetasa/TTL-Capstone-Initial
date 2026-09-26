const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav1");

menuButton.onclick = function() {
    nav.classList.toggle("open");
};
const hamburger = document.querySelector("#hamburger");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const closeButton = document.querySelector("#close-button");
const body = document.querySelector("body");

hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    hamburgerMenu.style.right = "0";
    hamburgerMenu.style.bottom = "0";
    hamburgerMenu.style.top = "0";
    body.style.background = "rgba(0, 0, 0, 0.8)";
    body.style.backdropFilter = "blur(20px)";

})

closeButton.addEventListener("click", () => {
    hamburgerMenu.style.right = "1500px";
})
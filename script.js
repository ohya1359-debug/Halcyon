const toggle = document.getElementById("menuToggle");
const overlay = document.getElementById("overlay");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
});

overlay.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
});
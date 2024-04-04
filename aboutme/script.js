const menu = document.querySelector("#menu");
const navlist = document.querySelector(".mobile");

menu.addEventListener("click", () => {
    menu.classList.toggle("activate");
    navlist.classList.toggle("activate");
})


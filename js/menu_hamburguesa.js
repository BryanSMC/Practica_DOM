export default function hamburgerMenu(menuBtn, menuB) {
    const d = document;

    const buttonMenu = d.querySelector(menuBtn);
    const menu = d.querySelector(menuB)

    buttonMenu.addEventListener("click", () => {
        menu.classList.toggle("is-active");
        buttonMenu.classList.toggle("is-active");
    })
}


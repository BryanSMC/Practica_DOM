export default function hamburgerMenu(menuBtn, menuB, menuLink) {
    const d = document;

    const $buttonMenu = d.querySelector(menuBtn),
        $menu = d.querySelector(menuB),
        $menuLink = d.querySelector(menuLink);

    $buttonMenu.addEventListener("click", () => {
        $menu.classList.toggle("is-active");
        $buttonMenu.classList.toggle("openmenu");
    })

    $menuLink.addEventListener("click", (e) => {
        $menu.classList.remove("is-active");
        $buttonMenu.classList.remove("openmenu");
    })
}


export default function hamburgerMenu(menuBtn, menuB, menuLink, scroll) {
    const d = document;

    const $buttonMenu = d.querySelector(menuBtn),
        $menu = d.querySelector(menuB),
        $menuLink = d.querySelector(menuLink),
        $scrollH = d.getElementById(scroll);

    $buttonMenu.addEventListener("click", () => {
        $menu.classList.toggle("is-active");
        $buttonMenu.classList.toggle("openmenu");
        $scrollH.classList.toggle("menu-scroll-hidden");
    })

    $menuLink.addEventListener("click", (e) => {
        $menu.classList.remove("is-active");
        $buttonMenu.classList.remove("openmenu");
        $scrollH.classList.remove("menu-scroll-hidden");
    })
}


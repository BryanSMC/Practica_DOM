const d = document;

function scrollUp(btn) {
    let $scrollActive = d.querySelector(btn);

    window.onscroll = function () {
        let currentScroll = d.documentElement.scrollTop || d.body.scrollTop;

        if (currentScroll > 600) {
            $scrollActive.classList.remove("btn-ocultar");
        } else if (currentScroll < 600) {
            $scrollActive.classList.add("btn-ocultar");
        }
    };

    $scrollActive.addEventListener("click", () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0,
        });
    });
}

scrollUp(".btn-scroll");

export { scrollUp }
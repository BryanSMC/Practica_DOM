import { $scroll } from "./index_dom.js";

export { scrollUp }

const d = document;

function scrollUp(btn) {
    let $scrollActive = d.querySelector(btn);

    window.onscroll = function () {
        let currentScroll = d.documentElement.scrollTop || d.body.scrollTop;

        if (currentScroll > 500) {
            $scrollActive.classList.add("btn-mostrar");
            $scrollActive.classList.remove("btn-ocultar");
        } else if (currentScroll < 500) {
            $scrollActive.classList.remove("btn-mostrar");
            $scrollActive.classList.add("btn-ocultar");
        }
    };

    $scrollActive.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });
}

scrollUp(".scroll-active");

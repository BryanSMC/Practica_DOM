const d = document;

function slider(slider, fotos, btnl, btnr) {
    const $slider = d.getElementById(slider);

    let $fotos = d.querySelectorAll(fotos),
        $ultFoto = $fotos[$fotos.length - 1];

    const $btnRight = d.getElementById(btnr),
        $btnLeft = d.getElementById(btnl);

    function siguiente() {
        let $priFoto = d.querySelectorAll(fotos)[0];

        $slider.style.transition = "margin-left .5s ease"
        $slider.style.marginLeft = "-200%"

        setTimeout(() => {
            $slider.style.transition = "none"
            $slider.insertAdjacentElement("beforeend", $priFoto);
            $slider.style.marginLeft = "-100%"
        }, 500);
    }

    function atras() {
        let $fotos = d.querySelectorAll(fotos),
        $ultFoto = $fotos[$fotos.length - 1];

        $slider.style.transition = "margin-left .5s ease"
        $slider.style.marginLeft = "0%"

        setTimeout(() => {
            $slider.style.transition = "none"
            $slider.insertAdjacentElement("afterbegin", $ultFoto);
            $slider.style.marginLeft = "-100%"
        }, 500);
    }

    $btnRight.addEventListener("click", (e) => {
        siguiente();
    })

    $btnLeft.addEventListener("click", (e) => {
        atras();
    })

}

export { slider }
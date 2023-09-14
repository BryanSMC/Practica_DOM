export default function abrirUrl($url, $ancho, $alto, $abrir, $cerrar) {
    let ventana;

    $abrir.addEventListener("submit", (e) => {
        e.preventDefault();
        const url = $url.value,
            ancho = $ancho.value,
            alto = $alto.value;

        let features = `menubar=yes, location=no, resizable=yes,scrollbars=yes, status=no, height=${alto}, width=${ancho}`;

        ventana = open(url, "_blank", features);
    })

    $cerrar.addEventListener("click", () => {
        ventana.close();
    })
}
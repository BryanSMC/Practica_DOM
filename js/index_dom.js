/* Exports */
export { $reloj, $formato, $scroll }

/* Imports */
import hamburgerMenu from "./menu_hamburguesa.js";
import { finalizarReloj, startTime } from "./reloj.js";
import { sound } from "./alarma_sonora.js";
import { atajo, moveBall } from "./eventos_teclado.js";
import { currentCDown } from "./cuenta_regresiva.js";
import { scrollUp } from "./boton_scroll.js";

/* Obteniendo para el menu */
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".button-menu", ".menu", ".menu-container")
});

/* Obteniendo para el reloj */
let $reloj,
    $formato,
    $inicio = d.getElementById("iniciar-reloj"),
    $fin = d.getElementById("finalizar-reloj");

$inicio.addEventListener("click", (e) => {
    $reloj = d.getElementById("reloj");
    $formato = d.getElementById("formato");
    startTime();
    //Desactivando boton iniciar reloj y el estilo hover
    $inicio.disabled = true;
    $inicio.classList.add("no-hover");
});

$fin.addEventListener("click", (e) => {
    finalizarReloj();
    $inicio.disabled = false;
    $inicio.classList.remove("no-hover");
});

/* Obteniendo para la alarma */

let $alarma = d.getElementById("alarma"),
    $reproducir = d.getElementById("reproducir-alarma"),
    $pausar = d.getElementById("pausar-alarma");

$reproducir.addEventListener("click", () => {
    sound.play();
    sound.loop = true;
    $reproducir.disabled = true;
    $reproducir.classList.add("no-hover");
});

$pausar.addEventListener("click", () => {
    sound.pause();
    sound.currentTime = 0;
    $reproducir.disabled = false;
    $reproducir.classList.remove("no-hover");
})

/* Eventos de teclado */

d.addEventListener("keydown", (e) => {
    moveBall(e, ".ball", ".stage")
})

d.addEventListener("keydown", (e) => {
    atajo(e);
});

/* Cuenta Regresiva */

d.addEventListener("DOMContentLoaded", () => {
    currentCDown();
})

/* Boton Scroll */

let $scroll = d.getElementById("btn-scroll");

$scroll.addEventListener("click", () => {
    scrollUp(".scroll-active");
})


console.log("El archivo js/index_dom.js se está ejecutando correctamente.");
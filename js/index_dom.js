/* Imports */
import hamburgerMenu from "./menu_hamburguesa.js";
import { finalizarReloj, startTime } from "./reloj.js";
import { sound } from "./alarma_sonora.js";
import { atajo, moveBall } from "./eventos_teclado.js";
import { currentCDown } from "./cuenta_regresiva.js";
import { scrollUp } from "./boton_scroll.js";
import modoOscuro from "./modo_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import abrirUrl from "./responsive_tester.js";
import { uuser } from "./user_agent.js";
import { detectCon } from "./deteccion_conex.js";
import { webcam } from "./deteccion_webcam.js";
import { posicionActual } from "./deteccion_geolo.js";
import { filtro } from "./filtro_busqueda.js";
import { sorteoDigital } from "./sorteo_digital.js";
import { slider } from "./responsive_slider.js";
import { narrador } from "./narrador.js";

/* Obteniendo para el menu */
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".button-menu", ".menu", ".menu-container");
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
    scrollUp(".btn-scroll");
})


/* Tema Oscuro */
modoOscuro(".btn-darkmode", "dark-theme")

/* Objeto Responsive */

d.addEventListener("DOMContentLoaded", () => {
    responsiveMedia("video",
        "(min-width: 1024px)",
        `<a href="https://youtu.be/dQw4w9WgXcQ?si=WVY4m8MGtL_LMqBH" target="_blank" rel="noopener">Ver video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/YPzl_DZqzFA?si=X_E0WZp_3Fm8od6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);

    responsiveMedia("gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/kGdBoyQKmDr4ftbCA" target="_blank" rel="noopener">Ver mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31676.555579830532!2d-73.87209463325581!3d7.0597680887569965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e42eca8af70acad%3A0xcfa9ac026f4a1cd6!2sBarrancabermeja%2C%20Santander!5e0!3m2!1ses!2sco!4v1694629390640!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
})

/* Responsive Tester */

abrirUrl(
    d.getElementById('url'),
    d.getElementById('ancho'),
    d.getElementById('alto'),
    d.getElementById('abrir'),
    d.getElementById('cerrar')
);

/* User Agent */

uuser("user-agent")

/* Detección de conexion */

detectCon();

/* Detección Webcam */

webcam("webcam");

/* Deteccion de ubicacion */

posicionActual(`posicion`);

/* Filtro de busqueda */

filtro("search", ".card", "no-results");

/* Sorteo Digital */

sorteoDigital("input-sorteo", "boton-sorteo", "contenedor-items", "btn-sortear", "result-sorteo");

/* Responsive Slider */

slider("slider", ".slider-foto", "btnslider-left", "btnslider-right");

/* Narrador */

narrador("voz--selector", "voz--texto", "btn--voz");

/* Exports */
export { $reloj, $formato, $scroll }
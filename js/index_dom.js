/* Exports */
export { $reloj, $formato }

/* Imports */
import hamburgerMenu from "./menu_hamburguesa.js";
import { finalizarReloj, startTime } from "./reloj.js";

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

console.log("El archivo js/index_dom.js se está ejecutando correctamente.");

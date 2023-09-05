/* Exports */
export { startTime, finalizarReloj }

/* Imports */
import { $formato, $reloj } from "./index_dom.js";

/* Codigo */
let intervalo;

function startTime() {

    function currentTime() {

        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        hour = (hour < 10) ? "0" + hour : hour;
        minute = (minute < 10) ? "0" + minute : minute;
        second = (second < 10) ? "0" + second : second;

        /* Formato 12h */

        if (hour >= 12) {
            hour = hour - 12;
            var ampm = `PM`
        } else {
            ampm = `AM`
        }

        if (hour <= 12) {
            hour = `0${hour}`
        }

        if (hour === 0) {
            hour = 12;
        }

        let time = `${hour}:${minute}:${second}`;
        let formato = `${ampm}`

        $reloj.innerHTML = time;
        $formato.innerHTML = formato;
    }

    intervalo = setInterval(currentTime, 1000);
}

function finalizarReloj() {
    clearInterval(intervalo);
    $reloj.innerHTML = "";
    $formato.innerHTML = "";
}
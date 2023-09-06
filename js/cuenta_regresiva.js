export { currentCDown }

const d = document;
let intervalo;

const currentCDown = () => {
    function cDown() {
        const cDate = new Date("Dec 31, 2023 24:00:00").getTime();
        const now = new Date().getTime();
        const difference = cDate - now;

        // Funcion del tiempo
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        function esBisiesto(anio) {
            return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
        }

        function milisegundosEnAnio(anio) {
            return esBisiesto(anio) ? day * 366 : day * 365;
        }

        const anioActual = new Date().getFullYear();
        const year = milisegundosEnAnio(anioActual);

        const textYear = Math.floor(difference / year),
            remMs = difference % year,

            textDay = Math.floor(remMs / day),
            textHour = Math.floor((remMs % day) / hour),
            textMinute = Math.floor((remMs % hour) / minute),
            textSecond = Math.floor((remMs % minute) / second);

        const $year = d.getElementById("year"),
            $day = d.getElementById("day"),
            $hour = d.getElementById("hour"),
            $minute = d.getElementById("minute"),
            $second = d.getElementById("second");

        $year.innerText = textYear
        $day.innerText = textDay
        $hour.innerText = textHour
        $minute.innerText = textMinute
        $second.innerText = textSecond
    }

    intervalo = setInterval(cDown, 1000);

}
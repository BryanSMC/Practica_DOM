
const d = document,
    n = navigator;

function posicionActual(ps) {
    const $posicion = d.getElementById(ps),

    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    },

    success = (pos) => {
        const geolocation = pos.coords

        let properties = `
            <p><strong>Latitud:</strong> ${geolocation.latitude}</p>
            <p><strong>Longitud:</strong> ${geolocation.longitude}</p>
            <p><strong>Precisión:</strong> ${geolocation.accuracy}</p>
            <a href="https://www.google.com/maps/@${geolocation.latitude},${geolocation.longitude},15z?authuser=0&entry=ttu}" target="_blanl" rel="noopener">Ver en Google Maps</a>
        `;

        $posicion.innerHTML = properties;
    }

    const error = (err) => {
        $posicion.innerHTML = `<p class"center-items">Sucedio un error con la ubicación o sus permisos</p>
        <p><mark>${err.message}</mark></p>`;
    };

    n.geolocation.getCurrentPosition(success, error, options)
}

export { posicionActual }
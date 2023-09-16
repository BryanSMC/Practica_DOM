const d = document,
    n = navigator;

function webcam(cam) {
    const $cam = d.getElementById(cam)

    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({ audio: false, video: true })
            .then((stream) => {
                $cam.srcObject = stream;
                $cam.play();
            })
            .catch((err) => {
                $cam.insertAdjacentHTML("afterend", `<p class"center-items">Sucedio un error con la camara o sus permisos</p>
                <p><mark>${err}</mark></p>`)
            })

    }
}

export { webcam }
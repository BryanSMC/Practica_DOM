let d = document,
    w = window;

function detectCon() {
    const online = () => {
        const $element = d.createElement("div")

        if (navigator.onLine) {
            $element.textContent = "Conexión Reestablecida";
            $element.classList.add("online")
            $element.classList.remove("offline")
        } else {
            $element.textContent = "Conexión Perdida";
            $element.classList.add("offline")
            $element.classList.remove("online")
        }

        d.body.insertAdjacentElement("afterbegin", $element);
        setTimeout(() => d.body.removeChild($element), 2000);
    }

    w.addEventListener("online", (e) => {
        online();
    })

    w.addEventListener("offline", (e) => {
        online();
    })
}

export { detectCon }
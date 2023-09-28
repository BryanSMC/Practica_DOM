const d = document;

function narrador(selector, vTexto, btnVoz) {
    const $selector = d.getElementById(selector),
        $texto = d.getElementById(vTexto),
        $btnVoz = d.getElementById(btnVoz),
        speech = new SpeechSynthesisUtterance();

    let voces = [];

    d.addEventListener("DOMContentLoaded", (e) => {

        speechSynthesis.addEventListener("voiceschanged", (e) => {

            voces = speechSynthesis.getVoices();

            voces.forEach(voice => {
                const $opcion = d.createElement("option");
                $opcion.value = voice.name;
                $opcion.textContent = `${voice.name} - ${voice.lang}`;

                $selector.appendChild($opcion);
            });
        })
    });

    $selector.addEventListener("change", (e) => {
        speech.voice = voces.find(voice => voice.name === e.target.value);
        console.log(speech);
    });

    $btnVoz.addEventListener("click", () => {
        speech.text = $texto.value;
        speechSynthesis.speak(speech);
    });
}

export { narrador }
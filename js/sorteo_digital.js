const d = document;
function sorteoDigital(inpSorteo, btnSorteo, contItems, sortear, resultado) {
    const $btnSorteo = d.getElementById(btnSorteo),
        $contenedor = d.getElementById(contItems),
        $btnSortear = d.getElementById(sortear),
        $resultado = d.getElementById(resultado);

    let contenedor = [];

    $btnSorteo.addEventListener("click", (e) => {
        const $inpSorteo = d.getElementById(inpSorteo).value;

        if ($inpSorteo === ``) {
            alert("El campo no puede estar vacio");
        } else {
            const nuevoItem = d.createElement("p");
            nuevoItem.classList.add("item-sorteo");
            nuevoItem.textContent = $inpSorteo;

            nuevoItem.addEventListener("click", () => {
                const indice = contenedor.indexOf($inpSorteo);
                if (indice !== -1) {
                    contenedor.splice(indice, 1);
                    $contenedor.removeChild(nuevoItem);
                    console.log(contenedor);
                }
            })

            contenedor.push($inpSorteo);
            console.log(contenedor);
            $contenedor.appendChild(nuevoItem);
            d.getElementById(inpSorteo).value = "";
        }
    })

    $btnSortear.addEventListener("click", (e) => {
        let ramdon = Math.floor(Math.random() * contenedor.length);
        $resultado.innerHTML = `<p>Ganó: ${contenedor[ramdon]}</p>`;
    })
}

export { sorteoDigital }
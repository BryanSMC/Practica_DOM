
const d = document;

function filtro(search, card, nor) {
    const $input = d.getElementById(search),
        $cards = d.querySelectorAll(card),
        $noResults = document.getElementById(nor);

        $noResults.style.display = 'none';

    $input.addEventListener("keyup", (e) => {
        const searchText = e.target.value.toLowerCase();
        let foundResults = false;

        $cards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            if (cardText.includes(searchText)) {
                card.classList.remove("filter");
                foundResults = true;
            } else if (!cardText.includes(searchText)) {
                card.classList.add("filter");
            }

            if (foundResults) {
                $noResults.style.display = 'none';
            } else {
                $noResults.style.display = 'block';
            }
        });
    });
}

export { filtro }
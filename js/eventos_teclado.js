export { moveBall, atajo }

const d = document;
let x = 0,
    y = 0;

function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        $limitBall = $ball.getBoundingClientRect(),
        $limitStage = $stage.getBoundingClientRect();

    switch (e.keyCode) {
        case 37:
            if ($limitBall.left > $limitStage.left) {
                x--;
                e.preventDefault();
            };
            break;
        case 38:
            if ($limitBall.top > $limitStage.top) {
                y--;
                e.preventDefault();
            };
            break;
        case 39:
            if ($limitBall.right < $limitStage.right) {
                x++;
                e.preventDefault();
            };
            break;
        case 40:
            if ($limitBall.bottom < $limitStage.bottom) {
                y++;
                e.preventDefault();
            };
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${Math.floor(x * 10)}px, ${Math.floor(y * 10)}px)`;
}

function atajo(e) {

    if (e.altKey && e.key === "a") {
        alert(`Haz lanzado una alerta con el teclado`);
    };

    if (e.altKey && e.key === "c") {
        confirm(`Haz lanzado un confirm con el teclado`);
    };

    if (e.altKey && e.key === "i") {
        prompt(`Haz lanzado un prompt con el teclado`);
    };
}
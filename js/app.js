import "../sass/main.scss";
import {Game} from "./game"

const newGame = new Game();
newGame.showFurry();
newGame.showCoin();
newGame.startGame();

document.querySelector(".btn").addEventListener("click", () => {
    window.location.reload();
})
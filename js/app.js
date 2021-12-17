import "../sass/main.scss";

console.log("Test");

class Furry {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.direction = "right";
    }

}

class Coin {
    constructor() {
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }
}

class Game {
    board = document.querySelectorAll("#board div")
    furry = new Furry();
    coin = new Coin();
    score = 0;

    index(x, y) {
        return x + (y * 10);
    }

    showFurry() {
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');

    }

    showCoin() {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    }
}

const newGame = new Game();
newGame.showFurry();
newGame.showCoin();
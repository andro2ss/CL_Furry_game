import "../sass/main.scss";

console.log("Test");

class Furry {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.direction = "right";         //possible directions: left, right, up, down
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
        this.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
        document.addEventListener('keydown',(event) => {
            this.turnFurry(event);
        });
    }

    hideVisibleFurry() {
        const hideFurry = document.querySelector(".furry");
        if (hideFurry !== null) {
            hideFurry.classList.remove("furry");
        }
    }

    showCoin() {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    }

    startGame() {
        this.idSetInterval = setInterval(() => {
            this.moveFurry();
        }, 250);
    }

    moveFurry() {
        if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        } else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        }
        this.showFurry();
    }

    turnFurry(event) {
        if (event.which === 37) {
            this.furry.direction = "left"
        } else if (event.which === 39) {
            this.furry.direction = "right"
        } else if (event.which === 40) {
            this.furry.direction = "down"
        } else if (event.which === 38) {
            this.furry.direction = "up"
        }
    }
}

const newGame = new Game();
newGame.showFurry();
newGame.showCoin();
newGame.startGame();

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
        }, 2250);
    }

    moveFurry() {
        if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        } else {
            this.furry.y = this.furry.y - 1;
        }
        this.showFurry();
    }
}

const newGame = new Game();
newGame.showFurry();
newGame.showCoin();
newGame.startGame();

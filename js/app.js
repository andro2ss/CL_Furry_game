import "../sass/main.scss";

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
    constructor() {
        this.board = document.querySelectorAll("#board div")
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
        this.speed = 1000;
    }

    index(x, y) {
        let yControl = 10
        if (y < 0 || y > 9) {
            yControl = 0;
        }
        return x + (y * yControl);
    }

    showFurry() {
        this.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
        document.addEventListener('keydown', (event) => {
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
        this.checkCoinCollision();
        this.gameOver();
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

    checkCoinCollision() {
        if (this.coin.x === this.furry.x && this.coin.y === this.furry.y) {
            const hideCoin = document.querySelector(".coin");
            if (hideCoin !== null) {
                hideCoin.classList.remove("coin");
            }
            this.coin = new Coin();
            this.score++;
            document.getElementById("score").innerText = this.score;
            this.showCoin();
            this.speed = this.speed * 0.9;
            clearInterval(this.idSetInterval);
            this.startGame();
        }
    }

    gameOver() {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            clearInterval(this.idSetInterval);
            this.hideVisibleFurry();
            document.getElementById("over").classList.remove("hide");
            document.getElementById("final-score").innerText = this.score;
        }
    }

    startGame() {
        this.idSetInterval = setInterval(() => {
            this.moveFurry();
        }, this.speed);
    }

}

const newGame = new Game();
newGame.showFurry();
newGame.showCoin();
newGame.startGame();

document.querySelector(".btn").addEventListener("click", () => {
    window.location.reload();
})
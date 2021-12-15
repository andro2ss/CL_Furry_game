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
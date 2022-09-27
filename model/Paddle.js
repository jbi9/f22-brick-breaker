import Sprite from "./Sprite.js";

class Paddle extends Sprite {

    constructor(x, y, width, height, color, dx, dy) {
        super(x, y, width, height, color, 0, 0);
        document.addEventListener(
            "keydown", 
            this.handleKeyDown.bind(this)
        )
        document.addEventListener(
            "keyup", 
            this.handleKeyUp.bind(this)
        )
    }

    handleKeyDown(event) {
       if (event.key === "Right" || event.key === "ArrowRight") {
            this.dx = 3;
       } else if (event.key === "Left" || event.key === "ArrowLeft") {
            this.dx = -3
       }
    }

    handleKeyUp(event) {
        if (event.key === "Right" || event.key === "ArrowRight") {
            this.dx = 0;
        } else if (event.key === "Left" || event.key === "ArrowLeft") {
            this.dx = 0;
        }

    }

    move(canvasWidth) {
        super.move();
        if (this.x < 0) {
            this.x = 0;
        } else if (this.x + this.width > canvasWidth) {
            this.x = canvasWidth - this.width;
        }
    }

}

export default Paddle;
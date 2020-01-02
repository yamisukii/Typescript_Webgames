"use strict";
var L09_Klassen;
(function (L09_Klassen) {
    class Bird {
        constructor() {
            // console.log("Snow Constructor");
            let x = 1000 * Math.random();
            let y = 700 * Math.random();
            this.position = new L09_Klassen.Vektor(x, y);
            let xBird = (3 * Math.random()) + 1;
            this.velocity = new L09_Klassen.Vektor(xBird, 0);
        }
        move() {
            // console.log("Move");
            this.position.add(this.velocity);
            if (this.position.x > L09_Klassen.crc2.canvas.width) {
                this.position.x -= L09_Klassen.crc2.canvas.width;
                this.position.y = L09_Klassen.crc2.canvas.height * Math.random();
            }
            if (this.position.y > L09_Klassen.crc2.canvas.height) {
                this.position.y -= L09_Klassen.crc2.canvas.height;
                this.position.x = L09_Klassen.crc2.canvas.width * Math.random();
            }
            if (this.velocity.x > 2 && this.position.x > L09_Klassen.crc2.canvas.width / 2) {
                let yVelo = (2 * Math.random()) + 1;
                this.velocity.y = yVelo;
            }
        }
        changeDirection() {
            this.position.add(this.velocity);
            let xVelo = (4 * Math.random()) + 1;
            this.velocity.x = -(xVelo);
        }
        draw() {
            L09_Klassen.crc2.save();
            L09_Klassen.crc2.beginPath();
            L09_Klassen.crc2.translate(this.position.x, this.position.y);
            L09_Klassen.crc2.ellipse(0, 0, 10, 20, 5, 0, 2 * Math.PI);
            L09_Klassen.crc2.fillStyle = "red";
            L09_Klassen.crc2.fill();
            L09_Klassen.crc2.closePath();
            L09_Klassen.crc2.beginPath();
            L09_Klassen.crc2.arc(18, 2, 10, 0, 2 * Math.PI);
            L09_Klassen.crc2.fillStyle = "black";
            L09_Klassen.crc2.fill();
            L09_Klassen.crc2.closePath();
            L09_Klassen.crc2.beginPath();
            L09_Klassen.crc2.arc(20, 0, 2, 0, 2 * Math.PI);
            L09_Klassen.crc2.fillStyle = "yellow";
            L09_Klassen.crc2.fill();
            L09_Klassen.crc2.closePath();
            L09_Klassen.crc2.scale(7, 8);
            L09_Klassen.crc2.translate(-1, -1);
            L09_Klassen.crc2.beginPath();
            L09_Klassen.crc2.moveTo(0, 0);
            L09_Klassen.crc2.lineTo(2, -3);
            L09_Klassen.crc2.lineTo(2, 2);
            L09_Klassen.crc2.closePath();
            L09_Klassen.crc2.fillStyle = "red";
            L09_Klassen.crc2.fill();
            L09_Klassen.crc2.beginPath();
            L09_Klassen.crc2.moveTo(4.5, 0.5);
            L09_Klassen.crc2.lineTo(6.5, 1.5);
            L09_Klassen.crc2.lineTo(4.5, 2);
            L09_Klassen.crc2.closePath();
            L09_Klassen.crc2.fillStyle = "black";
            L09_Klassen.crc2.fill();
            L09_Klassen.crc2.restore();
        }
    }
    L09_Klassen.Bird = Bird;
})(L09_Klassen || (L09_Klassen = {}));
//# sourceMappingURL=Bird.js.map
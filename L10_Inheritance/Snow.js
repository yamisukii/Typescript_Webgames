"use strict";
var L09_Klassen;
(function (L09_Klassen) {
    class Snow {
        constructor() {
            this.gradient = L09_Klassen.crc2.createRadialGradient(0, 0, 0, 0, 0, 5);
            // console.log("Snow Constructor");
            let x = 1000 * Math.random();
            let y = 700 * Math.random();
            this.position = new L09_Klassen.Vektor(x, y);
            let ySnow = (3 * Math.random()) + 1;
            this.velocity = new L09_Klassen.Vektor(0, ySnow);
        }
        move() {
            // console.log("Move");
            this.position.add(this.velocity);
            if (this.position.y > L09_Klassen.crc2.canvas.height) {
                this.position.y -= L09_Klassen.crc2.canvas.height;
                this.position.x = L09_Klassen.crc2.canvas.width * Math.random();
            }
        }
        draw() {
            L09_Klassen.crc2.beginPath();
            L09_Klassen.crc2.save();
            L09_Klassen.crc2.translate(this.position.x, this.position.y);
            L09_Klassen.crc2.fillStyle = this.gradient;
            L09_Klassen.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            L09_Klassen.crc2.fillStyle = "white";
            L09_Klassen.crc2.fill();
            L09_Klassen.crc2.restore();
        }
    }
    L09_Klassen.Snow = Snow;
})(L09_Klassen || (L09_Klassen = {}));
//# sourceMappingURL=Snow.js.map
"use strict";
var endabgabe;
(function (endabgabe) {
    class Food extends endabgabe.Moveable {
        constructor() {
            super();
            this.gradient = endabgabe.crc2.createRadialGradient(0, 0, 0, 0, 0, 5);
            this.radius = 20;
        }
        draw() {
            console.log();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.save();
            endabgabe.crc2.translate(this.posiX, this.posiY);
            endabgabe.crc2.fillStyle = this.gradient;
            endabgabe.crc2.arc(0, 0, this.radius, 0, 2 * Math.PI);
            endabgabe.crc2.fillStyle = "brown";
            endabgabe.crc2.fill();
            if (this.radius > 0.8) {
                this.radius -= 0.8;
                if (this.radius < 1.8) {
                    this.radius = 0;
                }
            }
            endabgabe.crc2.restore();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.save();
            endabgabe.crc2.translate(this.posiX, this.posiY);
            endabgabe.crc2.fillStyle = this.gradient;
            endabgabe.crc2.arc(0, 0, 3, 0, 2 * Math.PI);
            endabgabe.crc2.fillStyle = "brown";
            endabgabe.crc2.fill();
            endabgabe.crc2.restore();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.save();
            endabgabe.crc2.translate(this.posiX + 4, this.posiY + 4);
            endabgabe.crc2.fillStyle = this.gradient;
            endabgabe.crc2.arc(0, 0, 3, 0, 2 * Math.PI);
            endabgabe.crc2.fillStyle = "brown";
            endabgabe.crc2.fill();
            endabgabe.crc2.restore();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.save();
            endabgabe.crc2.translate(this.posiX - 4, this.posiY + 4);
            endabgabe.crc2.fillStyle = this.gradient;
            endabgabe.crc2.arc(0, 0, 3, 0, 2 * Math.PI);
            endabgabe.crc2.fillStyle = "brown";
            endabgabe.crc2.fill();
            endabgabe.crc2.restore();
        }
    }
    endabgabe.Food = Food;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Food.js.map
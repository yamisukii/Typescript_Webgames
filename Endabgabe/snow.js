"use strict";
var endabgabe;
(function (endabgabe) {
    class Snow extends endabgabe.Moveable {
        constructor() {
            super();
            this.gradient = endabgabe.crc2.createRadialGradient(0, 0, 0, 0, 0, 5);
            this.radius = 20;
            // let ySnow: number = (3 * Math.random()) + 4;
            let ySnow = new endabgabe.Vector(0, 0);
            ySnow.random(1, 4);
            this.velocity = ySnow;
        }
        draw() {
            endabgabe.crc2.beginPath();
            endabgabe.crc2.save();
            endabgabe.crc2.translate(this.position.x, this.position.y);
            endabgabe.crc2.fillStyle = this.gradient;
            endabgabe.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            endabgabe.crc2.fillStyle = "white";
            endabgabe.crc2.fill();
            endabgabe.crc2.restore();
        }
        snowball() {
            console.log();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.save();
            endabgabe.crc2.translate(this.posiX, this.posiY);
            endabgabe.crc2.fillStyle = this.gradient;
            endabgabe.crc2.arc(0, 0, this.radius, 0, 2 * Math.PI);
            endabgabe.crc2.fillStyle = "white";
            endabgabe.crc2.fill();
            if (this.radius > 0.8) {
                this.radius -= 0.8;
                if (this.radius < 1.8) {
                    this.radius = 0;
                }
            }
            endabgabe.crc2.restore();
        }
    }
    endabgabe.Snow = Snow;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=snow.js.map
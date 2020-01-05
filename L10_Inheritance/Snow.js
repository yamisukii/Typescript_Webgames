"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    class Snow extends L10_Inheritance.Moveable {
        constructor() {
            super();
            this.gradient = L10_Inheritance.crc2.createRadialGradient(0, 0, 0, 0, 0, 5);
            let ySnow = (3 * Math.random()) + 1;
            this.velocity = new L10_Inheritance.Vektor(0, ySnow);
        }
        draw() {
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.save();
            L10_Inheritance.crc2.translate(this.position.x, this.position.y);
            L10_Inheritance.crc2.fillStyle = this.gradient;
            L10_Inheritance.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            L10_Inheritance.crc2.fillStyle = "white";
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.restore();
        }
    }
    L10_Inheritance.Snow = Snow;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Snow.js.map
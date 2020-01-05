"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    class Bird extends L10_Inheritance.Moveable {
        constructor() {
            super();
            let xBird = (3 * Math.random()) + 1;
            this.velocity = new L10_Inheritance.Vektor(xBird, 0);
        }
        draw() {
            L10_Inheritance.crc2.save();
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.translate(this.position.x, this.position.y);
            L10_Inheritance.crc2.ellipse(0, 0, 10, 20, 5, 0, 2 * Math.PI);
            L10_Inheritance.crc2.fillStyle = "red";
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.arc(18, 2, 10, 0, 2 * Math.PI);
            L10_Inheritance.crc2.fillStyle = "black";
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.arc(20, 0, 2, 0, 2 * Math.PI);
            L10_Inheritance.crc2.fillStyle = "yellow";
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.scale(7, 8);
            L10_Inheritance.crc2.translate(-1, -1);
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.moveTo(0, 0);
            L10_Inheritance.crc2.lineTo(2, -3);
            L10_Inheritance.crc2.lineTo(2, 2);
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.fillStyle = "red";
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.moveTo(4.5, 0.5);
            L10_Inheritance.crc2.lineTo(6.5, 1.5);
            L10_Inheritance.crc2.lineTo(4.5, 2);
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.fillStyle = "black";
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.restore();
        }
    }
    L10_Inheritance.Bird = Bird;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Bird.js.map
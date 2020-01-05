"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    function drawBirdhouse(_position, _size) {
        L10_Inheritance.crc2.save();
        L10_Inheritance.crc2.translate(_position.x, _position.y);
        let x = (Math.random() - 0.5) * _size.x;
        let y = -(Math.random() * _size.y);
        L10_Inheritance.crc2.translate(x, y);
        L10_Inheritance.crc2.scale(7, 8);
        L10_Inheritance.crc2.beginPath();
        L10_Inheritance.crc2.moveTo(0, 0);
        L10_Inheritance.crc2.lineTo(4, 0);
        L10_Inheritance.crc2.lineTo(4, -10);
        L10_Inheritance.crc2.lineTo(10, -10);
        L10_Inheritance.crc2.lineTo(10, -20);
        L10_Inheritance.crc2.lineTo(0, -25);
        L10_Inheritance.crc2.lineTo(-10, -20);
        L10_Inheritance.crc2.lineTo(-10, -10);
        L10_Inheritance.crc2.lineTo(-4, -10);
        L10_Inheritance.crc2.lineTo(-4, 0);
        L10_Inheritance.crc2.closePath();
        L10_Inheritance.crc2.fillStyle = "brown";
        L10_Inheritance.crc2.fill();
        L10_Inheritance.crc2.fillStyle = "yellow";
        L10_Inheritance.crc2.beginPath();
        L10_Inheritance.crc2.arc(0, -17, 2, 0, 2 * Math.PI);
        L10_Inheritance.crc2.fill();
        L10_Inheritance.crc2.closePath();
        L10_Inheritance.crc2.restore();
    }
    L10_Inheritance.drawBirdhouse = drawBirdhouse;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Birdhouse.js.map
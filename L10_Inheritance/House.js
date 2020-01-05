"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    function drawHouse(_position, _size) {
        L10_Inheritance.crc2.save();
        L10_Inheritance.crc2.translate(_position.x, _position.y);
        let x = (Math.random() - 0.5) * _size.x;
        let y = -(Math.random() * _size.y);
        L10_Inheritance.crc2.translate(x, y);
        L10_Inheritance.crc2.fillStyle = "HSLA(170, 100%, 50%)";
        L10_Inheritance.crc2.fillRect(0, 0, 300, 150);
        L10_Inheritance.crc2.beginPath();
        L10_Inheritance.crc2.moveTo(-10, 0);
        L10_Inheritance.crc2.lineTo(150, -50);
        L10_Inheritance.crc2.lineTo(310, 0);
        L10_Inheritance.crc2.closePath();
        L10_Inheritance.crc2.fillStyle = "red";
        L10_Inheritance.crc2.fill();
        L10_Inheritance.crc2.fillStyle = "blue";
        L10_Inheritance.crc2.fillRect(20, 20, 60, 60);
        L10_Inheritance.crc2.fillStyle = "brown";
        L10_Inheritance.crc2.fillRect(140, 50, 50, 100);
        L10_Inheritance.crc2.beginPath();
        L10_Inheritance.crc2.arc(155, 85, 5, 0, 2 * Math.PI);
        L10_Inheritance.crc2.fillStyle = "yellow";
        L10_Inheritance.crc2.fill();
        L10_Inheritance.crc2.restore();
    }
    L10_Inheritance.drawHouse = drawHouse;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=House.js.map
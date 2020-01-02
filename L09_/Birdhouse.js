"use strict";
var L09_Klassen;
(function (L09_Klassen) {
    function drawBirdhouse(_position, _size) {
        L09_Klassen.crc2.save();
        L09_Klassen.crc2.translate(_position.x, _position.y);
        let x = (Math.random() - 0.5) * _size.x;
        let y = -(Math.random() * _size.y);
        L09_Klassen.crc2.translate(x, y);
        L09_Klassen.crc2.scale(8, 8);
        L09_Klassen.crc2.beginPath();
        L09_Klassen.crc2.moveTo(0, 0);
        L09_Klassen.crc2.lineTo(4, 0);
        L09_Klassen.crc2.lineTo(4, -10);
        L09_Klassen.crc2.lineTo(10, -10);
        L09_Klassen.crc2.lineTo(10, -20);
        L09_Klassen.crc2.lineTo(0, -25);
        L09_Klassen.crc2.lineTo(-10, -20);
        L09_Klassen.crc2.lineTo(-10, -10);
        L09_Klassen.crc2.lineTo(-4, -10);
        L09_Klassen.crc2.lineTo(-4, 0);
        L09_Klassen.crc2.closePath();
        L09_Klassen.crc2.fillStyle = "brown";
        L09_Klassen.crc2.fill();
        L09_Klassen.crc2.fillStyle = "yellow";
        L09_Klassen.crc2.beginPath();
        L09_Klassen.crc2.arc(0, -17, 2, 0, 2 * Math.PI);
        L09_Klassen.crc2.fill();
        L09_Klassen.crc2.closePath();
        L09_Klassen.crc2.restore();
    }
    L09_Klassen.drawBirdhouse = drawBirdhouse;
})(L09_Klassen || (L09_Klassen = {}));
//# sourceMappingURL=Birdhouse.js.map
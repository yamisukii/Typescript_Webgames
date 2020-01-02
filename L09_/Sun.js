"use strict";
var L09_Klassen;
(function (L09_Klassen) {
    function drawSun(_postion) {
        // console.log("Sun", _postion);
        let r1 = 30;
        let r2 = 150;
        let gradient = L09_Klassen.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L09_Klassen.crc2.save();
        L09_Klassen.crc2.translate(_postion.x, _postion.y);
        L09_Klassen.crc2.fillStyle = gradient;
        L09_Klassen.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_Klassen.crc2.fill();
        L09_Klassen.crc2.restore();
    }
    L09_Klassen.drawSun = drawSun;
})(L09_Klassen || (L09_Klassen = {}));
//# sourceMappingURL=Sun.js.map
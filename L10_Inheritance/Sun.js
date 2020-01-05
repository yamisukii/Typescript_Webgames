"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    function drawSun(_postion) {
        // console.log("Sun", _postion);
        let r1 = 30;
        let r2 = 150;
        let gradient = L10_Inheritance.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L10_Inheritance.crc2.save();
        L10_Inheritance.crc2.translate(_postion.x, _postion.y);
        L10_Inheritance.crc2.fillStyle = gradient;
        L10_Inheritance.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L10_Inheritance.crc2.fill();
        L10_Inheritance.crc2.restore();
    }
    L10_Inheritance.drawSun = drawSun;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Sun.js.map
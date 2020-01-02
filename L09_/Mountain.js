"use strict";
var L09_Klassen;
(function (L09_Klassen) {
    function drawMountain(_postion, _min, _max, _colorLow, _colorHigh) {
        // console.log("Mountains", _postion, _min, _max, _colorLow, -_colorHigh);
        let stepMin = 50;
        let stepMax = 100;
        let x = 0;
        L09_Klassen.crc2.save();
        L09_Klassen.crc2.translate(_postion.x, _postion.y);
        L09_Klassen.crc2.beginPath();
        L09_Klassen.crc2.moveTo(0, 0);
        L09_Klassen.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09_Klassen.crc2.lineTo(x, y);
        } while (x < L09_Klassen.crc2.canvas.width);
        L09_Klassen.crc2.lineTo(x, 0);
        L09_Klassen.crc2.closePath();
        let gradient = L09_Klassen.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L09_Klassen.crc2.fillStyle = gradient;
        L09_Klassen.crc2.fill();
        L09_Klassen.crc2.restore();
    }
    L09_Klassen.drawMountain = drawMountain;
})(L09_Klassen || (L09_Klassen = {}));
//# sourceMappingURL=Mountain.js.map
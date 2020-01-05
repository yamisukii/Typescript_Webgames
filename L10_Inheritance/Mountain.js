"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    function drawMountain(_postion, _min, _max, _colorLow, _colorHigh) {
        // console.log("Mountains", _postion, _min, _max, _colorLow, -_colorHigh);
        let stepMin = 50;
        let stepMax = 100;
        let x = 0;
        L10_Inheritance.crc2.save();
        L10_Inheritance.crc2.translate(_postion.x, _postion.y);
        L10_Inheritance.crc2.beginPath();
        L10_Inheritance.crc2.moveTo(0, 0);
        L10_Inheritance.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L10_Inheritance.crc2.lineTo(x, y);
        } while (x < L10_Inheritance.crc2.canvas.width);
        L10_Inheritance.crc2.lineTo(x, 0);
        L10_Inheritance.crc2.closePath();
        let gradient = L10_Inheritance.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L10_Inheritance.crc2.fillStyle = gradient;
        L10_Inheritance.crc2.fill();
        L10_Inheritance.crc2.restore();
    }
    L10_Inheritance.drawMountain = drawMountain;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Mountain.js.map
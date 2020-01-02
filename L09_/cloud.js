"use strict";
var L09_Klassen;
(function (L09_Klassen) {
    function drawCloud(_postion, _size) {
        // console.log("Clouds", _postion, _size);
        let nParticles = 30;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = L09_Klassen.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L09_Klassen.crc2.save();
        L09_Klassen.crc2.translate(_postion.x, _postion.y);
        L09_Klassen.crc2.fillStyle = gradient;
        for (let i = 0; i < nParticles; i++) {
            L09_Klassen.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L09_Klassen.crc2.translate(x, y);
            L09_Klassen.crc2.fill(particle);
            L09_Klassen.crc2.restore();
        }
        L09_Klassen.crc2.restore();
    }
    L09_Klassen.drawCloud = drawCloud;
})(L09_Klassen || (L09_Klassen = {}));
//# sourceMappingURL=cloud.js.map
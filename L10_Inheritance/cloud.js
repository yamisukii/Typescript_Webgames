"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    function drawCloud(_postion, _size) {
        // console.log("Clouds", _postion, _size);
        let nParticles = 30;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = L10_Inheritance.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L10_Inheritance.crc2.save();
        L10_Inheritance.crc2.translate(_postion.x, _postion.y);
        L10_Inheritance.crc2.fillStyle = gradient;
        for (let i = 0; i < nParticles; i++) {
            L10_Inheritance.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L10_Inheritance.crc2.translate(x, y);
            L10_Inheritance.crc2.fill(particle);
            L10_Inheritance.crc2.restore();
        }
        L10_Inheritance.crc2.restore();
    }
    L10_Inheritance.drawCloud = drawCloud;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=cloud.js.map
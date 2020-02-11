"use strict";
var endabgabe;
(function (endabgabe) {
    let gradient;
    let golden = 0.62;
    function background() {
        gradient = endabgabe.crc2.createLinearGradient(0, 0, 0, endabgabe.crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(195, 100%, 50%)");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSLA(210, 100%, 50%, 0)");
        endabgabe.crc2.fillStyle = gradient;
        endabgabe.crc2.fillRect(0, 0, endabgabe.crc2.canvas.width, endabgabe.crc2.canvas.height);
        let horizon = golden * endabgabe.crc2.canvas.height;
        let sunPosition = new endabgabe.Vector(600, 100);
        let cloudPosition = new endabgabe.Vector(400, 100);
        let cloudSize = new endabgabe.Vector(300, 50);
        let mountainPosition = new endabgabe.Vector(0, horizon);
        drawSun(sunPosition);
        drawCloud(cloudPosition, cloudSize);
        drawMountainBack(mountainPosition, 100, 250);
        drawMountain(mountainPosition, 50, 120);
    }
    endabgabe.background = background;
    function drawSun(_postion) {
        // console.log("Sun", _postion);
        let r1 = 30;
        let r2 = 100;
        let gradient = endabgabe.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        endabgabe.crc2.save();
        endabgabe.crc2.translate(_postion.x, _postion.y);
        endabgabe.crc2.fillStyle = gradient;
        endabgabe.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        endabgabe.crc2.fill();
        endabgabe.crc2.restore();
    }
    endabgabe.drawSun = drawSun;
    function drawCloud(_postion, _size) {
        // console.log("Clouds", _postion, _size);
        let nParticles = 20;
        let radiusParticle = 100;
        let particle = new Path2D();
        let gradient = endabgabe.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        endabgabe.crc2.save();
        endabgabe.crc2.translate(_postion.x, _postion.y);
        endabgabe.crc2.fillStyle = gradient;
        for (let i = 0; i < nParticles; i++) {
            endabgabe.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            endabgabe.crc2.translate(x, y);
            endabgabe.crc2.fill(particle);
            endabgabe.crc2.restore();
        }
        endabgabe.crc2.restore();
    }
    endabgabe.drawCloud = drawCloud;
    function drawMountainBack(_postion, _min, _max) {
        // console.log("Mountains", _postion, _min, _max, _colorLow, -_colorHigh);
        let stepMin = 75;
        let stepMax = 200;
        let x = 0;
        endabgabe.crc2.save();
        endabgabe.crc2.translate(_postion.x, _postion.y);
        endabgabe.crc2.beginPath();
        endabgabe.crc2.moveTo(0, 0);
        endabgabe.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            endabgabe.crc2.lineTo(x, y);
        } while (x < endabgabe.crc2.canvas.width);
        endabgabe.crc2.lineTo(x, 0);
        endabgabe.crc2.closePath();
        let gradient = endabgabe.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, "HSLA(0, 0%, 60%)");
        gradient.addColorStop(0.8, "white");
        endabgabe.crc2.fillStyle = gradient;
        endabgabe.crc2.fill();
        endabgabe.crc2.restore();
    }
    endabgabe.drawMountainBack = drawMountainBack;
    function drawMountain(_postion, _min, _max) {
        // console.log("Mountains", _postion, _min, _max, _colorLow, -_colorHigh);
        let stepMin = 75;
        let stepMax = 200;
        let x = 0;
        endabgabe.crc2.save();
        endabgabe.crc2.translate(_postion.x, _postion.y);
        endabgabe.crc2.beginPath();
        endabgabe.crc2.moveTo(0, 0);
        endabgabe.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            endabgabe.crc2.lineTo(x, y);
        } while (x < endabgabe.crc2.canvas.width);
        endabgabe.crc2.lineTo(x, 0);
        endabgabe.crc2.closePath();
        let gradient = endabgabe.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, "grey");
        gradient.addColorStop(0.7, "HSLA(0, 0%, 90%)");
        gradient.addColorStop(1, "HSLA(0, 0%, 100%)");
        endabgabe.crc2.fillStyle = gradient;
        endabgabe.crc2.fill();
        endabgabe.crc2.restore();
    }
    endabgabe.drawMountain = drawMountain;
    function createSnow(_nSnow) {
        for (let i = 0; i < _nSnow; i++) {
            let snow = new endabgabe.Snow();
            endabgabe.moveables.push(snow);
        }
    }
    endabgabe.createSnow = createSnow;
    function createBird(_nBirds) {
        for (let i = 0; i < _nBirds; i++) {
            let bird = new endabgabe.Bird();
            endabgabe.moveables.push(bird);
        }
    }
    endabgabe.createBird = createBird;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=background.js.map
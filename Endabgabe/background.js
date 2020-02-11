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
        let birdhousePosition = new endabgabe.Vector(200, 400);
        let housePosition = new endabgabe.Vector(500, 300);
        let cloudPosition = new endabgabe.Vector(400, 100);
        let cloudSize = new endabgabe.Vector(300, 50);
        let houseSize = new endabgabe.Vector(200, 50);
        let mountainPosition = new endabgabe.Vector(0, horizon);
        drawSun(sunPosition);
        drawCloud(cloudPosition, cloudSize);
        drawMountainBack(mountainPosition, 100, 250);
        drawMountain(mountainPosition, 50, 120);
        drawBirdhouse(birdhousePosition, houseSize);
        drawHouse(housePosition, houseSize);
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
    function drawBirdhouse(_position, _size) {
        endabgabe.crc2.save();
        endabgabe.crc2.translate(_position.x, _position.y);
        let x = (Math.random() - 0.5) * _size.x;
        let y = -(Math.random() * _size.y);
        endabgabe.crc2.translate(x, y);
        endabgabe.crc2.scale(7, 8);
        endabgabe.crc2.beginPath();
        endabgabe.crc2.moveTo(0, 0);
        endabgabe.crc2.lineTo(4, 0);
        endabgabe.crc2.lineTo(4, -10);
        endabgabe.crc2.lineTo(10, -10);
        endabgabe.crc2.lineTo(10, -20);
        endabgabe.crc2.lineTo(0, -25);
        endabgabe.crc2.lineTo(-10, -20);
        endabgabe.crc2.lineTo(-10, -10);
        endabgabe.crc2.lineTo(-4, -10);
        endabgabe.crc2.lineTo(-4, 0);
        endabgabe.crc2.closePath();
        endabgabe.crc2.fillStyle = "brown";
        endabgabe.crc2.fill();
        endabgabe.crc2.fillStyle = "yellow";
        endabgabe.crc2.beginPath();
        endabgabe.crc2.arc(0, -17, 2, 0, 2 * Math.PI);
        endabgabe.crc2.fill();
        endabgabe.crc2.closePath();
        endabgabe.crc2.restore();
    }
    endabgabe.drawBirdhouse = drawBirdhouse;
    function drawHouse(_position, _size) {
        endabgabe.crc2.save();
        endabgabe.crc2.translate(_position.x, _position.y);
        let x = (Math.random() - 0.5) * _size.x;
        let y = -(Math.random() * _size.y);
        endabgabe.crc2.translate(x, y);
        endabgabe.crc2.fillStyle = "HSLA(170, 100%, 50%)";
        endabgabe.crc2.fillRect(0, 0, 300, 150);
        endabgabe.crc2.beginPath();
        endabgabe.crc2.moveTo(-10, 0);
        endabgabe.crc2.lineTo(150, -50);
        endabgabe.crc2.lineTo(310, 0);
        endabgabe.crc2.closePath();
        endabgabe.crc2.fillStyle = "red";
        endabgabe.crc2.fill();
        endabgabe.crc2.fillStyle = "blue";
        endabgabe.crc2.fillRect(20, 20, 60, 60);
        endabgabe.crc2.fillStyle = "brown";
        endabgabe.crc2.fillRect(140, 50, 50, 100);
        endabgabe.crc2.beginPath();
        endabgabe.crc2.arc(155, 85, 5, 0, 2 * Math.PI);
        endabgabe.crc2.fillStyle = "yellow";
        endabgabe.crc2.fill();
        endabgabe.crc2.restore();
    }
    endabgabe.drawHouse = drawHouse;
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
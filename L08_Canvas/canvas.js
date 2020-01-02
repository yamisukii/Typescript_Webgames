"use strict";
var L08_Canvas;
(function (L08_Canvas) {
    console.log("Waiting on load");
    window.addEventListener("load", handleLoad);
    let golden = 0.62;
    function handleLoad(_event) {
        console.log("Start now");
        let canvas = document.querySelector("canvas");
        L08_Canvas.crc2 = canvas.getContext("2d");
        if (!L08_Canvas.crc2)
            console.log("Fehler!");
        let horizon = L08_Canvas.crc2.canvas.height * golden;
        drawBackground();
        drawSun({ x: 800, y: 105 });
        drawCloud({ x: 500, y: 125 }, { x: 500, y: 75 });
        drawMountain({ x: 0, y: horizon }, 75, 200, "grey", "white");
        drawBirdhouse({ x: 200, y: 600 }, { x: 200, y: 100 });
        drawSnowflakes();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = L08_Canvas.crc2.createLinearGradient(0, 0, 0, L08_Canvas.crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(195, 100%, 50%)");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "white");
        L08_Canvas.crc2.fillStyle = gradient;
        L08_Canvas.crc2.fillRect(0, 0, L08_Canvas.crc2.canvas.width, L08_Canvas.crc2.canvas.height);
    }
    function drawSun(_postion) {
        console.log("Sun", _postion);
        let r1 = 30;
        let r2 = 150;
        let gradient = L08_Canvas.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L08_Canvas.crc2.save();
        L08_Canvas.crc2.translate(_postion.x, _postion.y);
        L08_Canvas.crc2.fillStyle = gradient;
        L08_Canvas.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L08_Canvas.crc2.fill();
        L08_Canvas.crc2.restore();
    }
    function drawCloud(_postion, _size) {
        console.log("Clouds", _postion, _size);
        let nParticles = 30;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = L08_Canvas.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L08_Canvas.crc2.save();
        L08_Canvas.crc2.translate(_postion.x, _postion.y);
        L08_Canvas.crc2.fillStyle = gradient;
        for (let i = 0; i < nParticles; i++) {
            L08_Canvas.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L08_Canvas.crc2.translate(x, y);
            L08_Canvas.crc2.fill(particle);
            L08_Canvas.crc2.restore();
        }
        L08_Canvas.crc2.restore();
    }
    function drawMountain(_postion, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _postion, _min, _max, _colorLow, -_colorHigh);
        let stepMin = 50;
        let stepMax = 100;
        let x = 0;
        L08_Canvas.crc2.save();
        L08_Canvas.crc2.translate(_postion.x, _postion.y);
        L08_Canvas.crc2.beginPath();
        L08_Canvas.crc2.moveTo(0, 0);
        L08_Canvas.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L08_Canvas.crc2.lineTo(x, y);
        } while (x < L08_Canvas.crc2.canvas.width);
        L08_Canvas.crc2.lineTo(x, 0);
        L08_Canvas.crc2.closePath();
        let gradient = L08_Canvas.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L08_Canvas.crc2.fillStyle = gradient;
        L08_Canvas.crc2.fill();
        L08_Canvas.crc2.restore();
    }
    function drawBirdhouse(_position, _size) {
        L08_Canvas.crc2.save();
        L08_Canvas.crc2.translate(_position.x, _position.y);
        let x = (Math.random() - 0.5) * _size.x;
        let y = -(Math.random() * _size.y);
        L08_Canvas.crc2.translate(x, y);
        L08_Canvas.crc2.scale(8, 8);
        L08_Canvas.crc2.beginPath();
        L08_Canvas.crc2.moveTo(0, 0);
        L08_Canvas.crc2.lineTo(4, 0);
        L08_Canvas.crc2.lineTo(4, -10);
        L08_Canvas.crc2.lineTo(10, -10);
        L08_Canvas.crc2.lineTo(10, -20);
        L08_Canvas.crc2.lineTo(0, -25);
        L08_Canvas.crc2.lineTo(-10, -20);
        L08_Canvas.crc2.lineTo(-10, -10);
        L08_Canvas.crc2.lineTo(-4, -10);
        L08_Canvas.crc2.lineTo(-4, 0);
        L08_Canvas.crc2.closePath();
        L08_Canvas.crc2.fillStyle = "brown";
        L08_Canvas.crc2.fill();
        L08_Canvas.crc2.fillStyle = "yellow";
        L08_Canvas.crc2.beginPath();
        L08_Canvas.crc2.arc(0, -17, 2, 0, 2 * Math.PI);
        L08_Canvas.crc2.fill();
        L08_Canvas.crc2.closePath();
        L08_Canvas.crc2.restore();
    }
    function drawSnowflakes() {
        let nFlakes = 80;
        let radius = 5;
        let flakes = new Path2D();
        let gradient = L08_Canvas.crc2.createRadialGradient(0, 0, 0, 0, 0, radius);
        flakes.arc(0, 0, radius, 0, 2 * Math.PI);
        gradient.addColorStop(0, "grey");
        gradient.addColorStop(1, "white");
        L08_Canvas.crc2.save();
        L08_Canvas.crc2.fillStyle = gradient;
        for (let i = 0; i < nFlakes; i++) {
            L08_Canvas.crc2.save();
            let x = Math.floor(Math.random() * (L08_Canvas.crc2.canvas.width - 1)) + 1;
            let y = Math.floor(Math.random() * (L08_Canvas.crc2.canvas.height - 1)) + 1;
            L08_Canvas.crc2.translate(x, y);
            L08_Canvas.crc2.fill(flakes);
            L08_Canvas.crc2.restore();
        }
        L08_Canvas.crc2.restore();
    }
})(L08_Canvas || (L08_Canvas = {}));
//# sourceMappingURL=canvas.js.map
"use strict";
var L09_Klassen;
(function (L09_Klassen) {
    console.log("Waiting on load");
    window.addEventListener("load", handleLoad);
    L09_Klassen.canvas = document.querySelector("canvas");
    let golden = 0.62;
    let snowflakes = [];
    let birds = [];
    function handleLoad(_event) {
        console.log("Start now");
        L09_Klassen.canvas = document.querySelector("canvas");
        L09_Klassen.crc2 = L09_Klassen.canvas.getContext("2d");
        if (!L09_Klassen.crc2)
            console.log("Fehler!");
        let horizon = L09_Klassen.crc2.canvas.height * golden;
        drawBackground();
        L09_Klassen.drawSun({ x: 800, y: 105 });
        L09_Klassen.drawCloud({ x: 500, y: 125 }, { x: 500, y: 75 });
        L09_Klassen.drawMountain({ x: 0, y: horizon }, 75, 200, "grey", "white");
        L09_Klassen.drawBirdhouse({ x: 200, y: 600 }, { x: 200, y: 100 });
        drawBird();
        let background = L09_Klassen.crc2.getImageData(0, 0, L09_Klassen.crc2.canvas.width, L09_Klassen.crc2.canvas.height);
        window.setInterval(update, 10, background);
        drawSnowflakes();
    }
    function drawBackground() {
        // console.log("Background");
        let gradient = L09_Klassen.crc2.createLinearGradient(0, 0, 0, L09_Klassen.crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(195, 100%, 50%)");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSLA(210, 100%, 50%, 0)");
        L09_Klassen.crc2.fillStyle = gradient;
        L09_Klassen.crc2.fillRect(0, 0, L09_Klassen.crc2.canvas.width, L09_Klassen.crc2.canvas.height);
    }
    function drawSnowflakes() {
        let nFlakes = 80;
        for (let i = 0; i < nFlakes; i++) {
            let snowflake = new L09_Klassen.Snow();
            snowflakes.push(snowflake);
        }
        console.log(snowflakes);
    }
    function drawBird() {
        let nBirds = 20;
        for (let i = 0; i < nBirds; i++) {
            let bird = new L09_Klassen.Bird();
            birds.push(bird);
        }
    }
    function update(_backgroundData) {
        L09_Klassen.crc2.putImageData(_backgroundData, 0, 0);
        for (let snowflake of snowflakes) {
            snowflake.move();
            snowflake.draw();
        }
        for (let bird of birds) {
            bird.move();
            bird.draw();
        }
    }
})(L09_Klassen || (L09_Klassen = {}));
//# sourceMappingURL=canvas.js.map
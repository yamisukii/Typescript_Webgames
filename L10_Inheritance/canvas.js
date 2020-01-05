"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    console.log("Waiting on load");
    window.addEventListener("load", handleLoad);
    L10_Inheritance.canvas = document.querySelector("canvas");
    let golden = 0.62;
    let moveables = [];
    function handleLoad(_event) {
        console.log("Start now");
        L10_Inheritance.canvas = document.querySelector("canvas");
        L10_Inheritance.crc2 = L10_Inheritance.canvas.getContext("2d");
        if (!L10_Inheritance.crc2)
            console.log("Fehler!");
        let horizon = L10_Inheritance.crc2.canvas.height * golden;
        drawBackground();
        L10_Inheritance.drawSun({ x: 800, y: 105 });
        L10_Inheritance.drawCloud({ x: 500, y: 125 }, { x: 500, y: 75 });
        L10_Inheritance.drawMountain({ x: 0, y: horizon }, 75, 200, "grey", "white");
        L10_Inheritance.drawHouse({ x: 600, y: 400 }, { x: 100, y: 100 });
        L10_Inheritance.drawBirdhouse({ x: 200, y: 600 }, { x: 200, y: 100 });
        drawBird();
        let background = L10_Inheritance.crc2.getImageData(0, 0, L10_Inheritance.crc2.canvas.width, L10_Inheritance.crc2.canvas.height);
        window.setInterval(update, 10, background);
        drawSnowflakes();
    }
    function drawBackground() {
        // console.log("Background");
        let gradient = L10_Inheritance.crc2.createLinearGradient(0, 0, 0, L10_Inheritance.crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(195, 100%, 50%)");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSLA(210, 100%, 50%, 0)");
        L10_Inheritance.crc2.fillStyle = gradient;
        L10_Inheritance.crc2.fillRect(0, 0, L10_Inheritance.crc2.canvas.width, L10_Inheritance.crc2.canvas.height);
    }
    function drawSnowflakes() {
        let nFlakes = 80;
        for (let i = 0; i < nFlakes; i++) {
            let snowflake = new L10_Inheritance.Snow();
            moveables.push(snowflake);
        }
        console.log(moveables);
    }
    function drawBird() {
        let nBirds = 20;
        for (let i = 0; i < nBirds; i++) {
            let bird = new L10_Inheritance.Bird();
            moveables.push(bird);
        }
    }
    function update(_backgroundData) {
        L10_Inheritance.crc2.putImageData(_backgroundData, 0, 0);
        for (let moveable of moveables) {
            if (moveable instanceof L10_Inheritance.Snow) {
                moveable.move();
                moveable.draw();
            }
            if (moveable instanceof L10_Inheritance.Bird) {
                moveable.move();
                moveable.draw();
            }
        }
    }
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=canvas.js.map
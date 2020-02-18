"use strict";
var endabgabe;
(function (endabgabe) {
    window.addEventListener("load", handleLoad);
    endabgabe.moveables = [];
    endabgabe.highscore = 500;
    endabgabe.timer = 30;
    endabgabe.hungryBirds = [];
    endabgabe.url = "https://milchstrasse.herokuapp.com/";
    function handleLoad() {
        endabgabe.canvas = document.querySelector("canvas");
        endabgabe.crc2 = endabgabe.canvas.getContext("2d");
        if (!endabgabe.crc2) {
            alert("Fehler!");
        }
        endabgabe.background();
        endabgabe.createSnow(40);
        let backGround = endabgabe.crc2.getImageData(0, 0, endabgabe.crc2.canvas.width, endabgabe.crc2.canvas.height);
        window.setInterval(update, 20, backGround);
        endabgabe.buttonHs = document.querySelector("button[id=hs]");
        endabgabe.buttonHs.addEventListener("click", endabgabe.showHighscore);
        endabgabe.buttonStart = document.querySelector("button[id=start]");
        endabgabe.buttonStart.addEventListener("click", startGame);
    }
    function startGame() {
        console.log("startGame");
        endabgabe.buttonStart.remove();
        endabgabe.buttonHs.remove();
        endabgabe.time = document.createElement("p");
        endabgabe.highScorer = document.createElement("p");
        endabgabe.div = document.querySelector("div");
        endabgabe.time.innerHTML = "Time: " + endabgabe.timer.toString();
        endabgabe.highScorer.innerHTML = "Highscore: " + endabgabe.highscore.toString();
        endabgabe.div.appendChild(endabgabe.time);
        endabgabe.div.appendChild(endabgabe.highScorer);
        endabgabe.createBird(20);
        endabgabe.interval = window.setInterval(endabgabe.loadedTime, 1000);
        endabgabe.canvas.addEventListener("click", thrwoSnowball);
        endabgabe.canvas.addEventListener("contextmenu", getRightClick);
        // tslint:disable-next-line: typedef
        window.addEventListener(`contextmenu`, function (e) {
            e.preventDefault();
        });
    }
    function getRightClick(_event) {
        console.log("getRightClick");
        endabgabe.food = new endabgabe.Food();
        endabgabe.food.getClick(_event.offsetX, _event.offsetY);
        let hotspot = new endabgabe.Vector(_event.offsetX, _event.offsetY);
        if (hotspot) {
            throwFood(hotspot);
        }
    }
    function throwFood(_hotspot) {
        for (let bird of endabgabe.moveables) {
            if (bird instanceof endabgabe.Bird) {
                bird.isFoodNear(_hotspot);
                if (bird.isFoodNear(_hotspot)) {
                    endabgabe.hungryBirds.push(bird);
                    let index = endabgabe.moveables.indexOf(bird);
                    endabgabe.moveables.splice(index, 1);
                    window.setTimeout(foodOver, 3000);
                }
            }
        }
        console.log(endabgabe.hungryBirds);
    }
    function foodOver() {
        for (let hungryBird of endabgabe.hungryBirds) {
            endabgabe.moveables.push(hungryBird);
        }
        endabgabe.hungryBirds = [];
    }
    function thrwoSnowball(_event) {
        console.log("throw snowball");
        endabgabe.snowball = new endabgabe.Snow();
        endabgabe.snowball.getClick(_event.offsetX, _event.offsetY);
        let hotspot = new endabgabe.Vector(_event.offsetX, _event.offsetY);
        console.log(hotspot);
        if (hotspot) {
            window.setTimeout(createSnowball, 350, hotspot);
        }
    }
    function createSnowball(_hotspot) {
        let birdHit = getBirdHit(_hotspot);
        console.log(birdHit);
        if (birdHit) {
            endabgabe.highscore += 10;
            endabgabe.highScorer.innerHTML = "Highscore: " + endabgabe.highscore.toString();
            endabgabe.div.appendChild(endabgabe.highScorer);
            console.log(endabgabe.highscore);
            breakBird(birdHit);
        }
    }
    function getBirdHit(_hotspot) {
        if (endabgabe.hungryBirds.length >= 1) {
            for (let bird of endabgabe.hungryBirds) {
                if (bird.isHit(_hotspot)) {
                    return bird;
                }
            }
        }
        else {
            for (let bird of endabgabe.moveables) {
                if (bird instanceof endabgabe.Bird) {
                    if (bird.isHit(_hotspot)) {
                        return bird;
                    }
                }
            }
        }
        return null;
    }
    function breakBird(_birdHit) {
        let index = endabgabe.moveables.indexOf(_birdHit);
        let indexHungry = endabgabe.hungryBirds.indexOf(_birdHit);
        if (endabgabe.hungryBirds.length >= 1) {
            endabgabe.hungryBirds.splice(indexHungry, 1);
        }
        else {
            endabgabe.moveables.splice(index, 1);
        }
    }
    function update(_backgroundData) {
        endabgabe.crc2.putImageData(_backgroundData, 0, 0);
        if (endabgabe.hungryBirds) {
            for (let hungryBird of endabgabe.hungryBirds) {
                hungryBird.moveToFood();
                hungryBird.draw();
            }
            for (let moveable of endabgabe.moveables) {
                if (moveable instanceof endabgabe.Bird) {
                    moveable.move();
                    // moveable.moveToFood();
                    moveable.draw();
                }
                if (moveable instanceof endabgabe.Snow) {
                    moveable.move();
                    moveable.draw();
                }
            }
        }
        else {
            for (let moveable of endabgabe.moveables) {
                if (moveable instanceof endabgabe.Bird) {
                    moveable.move();
                    // moveable.moveToFood();
                    moveable.draw();
                }
                if (moveable instanceof endabgabe.Snow) {
                    moveable.move();
                    moveable.draw();
                }
            }
        }
        if (endabgabe.snowball) {
            endabgabe.snowball.snowball();
        }
        if (endabgabe.food) {
            endabgabe.food.draw();
        }
    }
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=main.js.map
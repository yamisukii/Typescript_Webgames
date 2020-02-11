"use strict";
var endabgabe;
(function (endabgabe) {
    function loadedTime() {
        // console.log(timer);
        if (endabgabe.timer == 0) {
            endabgabe.timer = 0;
            safeHighscore(endabgabe.highscore);
            clearInterval(endabgabe.interval);
        }
        else {
            endabgabe.timer--;
            endabgabe.time.innerHTML = "Time: " + endabgabe.timer.toString();
            endabgabe.div.appendChild(endabgabe.time);
            endabgabe.highscore -= 5;
            endabgabe.highScorer.innerHTML = "Highscore: " + endabgabe.highscore.toString();
            endabgabe.div.appendChild(endabgabe.highScorer);
            // console.log(highscore);
        }
    }
    endabgabe.loadedTime = loadedTime;
    function showHighscore() {
        endabgabe.buttonHs.remove();
        endabgabe.buttonStart.remove();
    }
    endabgabe.showHighscore = showHighscore;
    function safeHighscore(_highscore) {
        endabgabe.time.remove();
        endabgabe.moveables = [];
        endabgabe.hungryBirds = [];
        endabgabe.form = document.createElement("form");
        endabgabe.div.appendChild(endabgabe.form);
        let input = document.createElement("input");
        input.placeholder = "Name";
        input.setAttribute("class", "nes-input");
        endabgabe.form.appendChild(input);
        let buttonSend = document.createElement("button");
        buttonSend.setAttribute("type", "button");
        buttonSend.setAttribute("class", "nes-btn is-primary");
        buttonSend.setAttribute("id", "save");
        buttonSend.innerHTML = "Save";
        endabgabe.form.appendChild(buttonSend);
        buttonSend.addEventListener("click", sendHs);
    }
    async function sendHs(_event) {
        console.log("send Highscore");
        let formData = new FormData(endabgabe.form);
        let query = new URLSearchParams(formData);
        let response = await fetch(endabgabe.url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
    }
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=TimerAndHs.js.map
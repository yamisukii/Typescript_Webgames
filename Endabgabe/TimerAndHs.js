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
            endabgabe.highscore -= 25;
            endabgabe.highScorer.innerHTML = "Highscore: " + endabgabe.highscore.toString();
            endabgabe.div.appendChild(endabgabe.highScorer);
            // console.log(highscore);
        }
    }
    endabgabe.loadedTime = loadedTime;
    async function showHighscore() {
        // buttonHs.remove();
        // buttonStart.remove();
        // console.log("Highscores ausgeben");
        let query = "command=retrieve";
        let response = await fetch(endabgabe.url + "?" + query);
        let responseJson = await response.json();
        for (let index = 0; index < responseJson.length; index++) {
            delete responseJson[index]["_id"];
        }
        let sortedJson = responseJson.sort(({ score: aScore }, { score: bScore }) => bScore - aScore);
        let output = "";
        for (let index = 0; index < sortedJson.length; index++) {
            output += sortedJson[index].name + " - " + sortedJson[index].score + "\n";
        }
        endabgabe.div.innerText = output;
    }
    endabgabe.showHighscore = showHighscore;
    function safeHighscore(_highscore) {
        endabgabe.time.remove();
        endabgabe.moveables = [];
        endabgabe.hungryBirds = [];
        console.log("end");
        let insertedname = prompt("Your Score: " + endabgabe.highscore + "\n Enter your name.");
        if (insertedname != null) {
            sendHs(insertedname, endabgabe.highscore);
        }
    }
    async function sendHs(_name, _highscore) {
        console.log("send Highscore");
        let query = "name=" + _name + "&score=" + _highscore;
        console.log(query);
        let response = await fetch(endabgabe.url + "?" + query);
        console.log(response);
    }
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=TimerAndHs.js.map
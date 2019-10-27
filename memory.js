var memory = ["A", "A", "B", "B", "C", "C", "D", "D", "F", "F"];
var memoryValues = [];
var memoryTiles = [];
var tilesFlipped = 0;
var Punkte = 0;
// tslint:disable-next-line: no-any
Array.prototype.memory_shuffle = function () {
    var j;
    var x;
    var i = this.length;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        x = this[j];
        this[j] = this[i];
        this[i] = x;
    }
};

var Spieleranzahl = prompt("Spieleranzahl eingeben von 1-4");

/*function Spieler() {
    var output = " ";
    for (var i = 0; i <= 4; i++) {
        output += "<option>" + i + "</option>";
    }
    document.getElementById("choice").innerHTML = output;
}*/

function Spieler() {
    if (Spieleranzahl <= 4 && Spieleranzahl >= 1) {
        var output = "";
        for (var i = 0; i < Spieleranzahl; i++) {
            output += "<div>Spieler " + (i+1) + " Punkte: " + Punkte +"</div>";
            
        }
        document.getElementById("choice").innerHTML = output;
        
    }else {
        alert("Angabe Ungültig");
        
    }
}


    function newBoard() {
        tilesFlipped = 0;
        var output = "";
        memory.memory_shuffle();
        for (var i = 0; i < memory.length; i++) {
            output += '<div id="tile_' + i + '" onclick="memoryFlipTile(this,\'' + memory[i] + '\')"></div>';
        }
        document.getElementById("memory_board").innerHTML = output;
    }
    // tslint:disable-next-line: typedef
    function memoryFlipTile(tile, val) {
        if (tile.innerHTML == "" && memoryValues.length < 2) {
            tile.style.background = "Red";
            tile.innerHTML = val;
            if (memoryValues.length == 0) {
                memoryValues.push(val);
                memoryTiles.push(tile.id);
            }

            else if (memoryValues.length == 1) {
                memoryValues.push(val);
                memoryTiles.push(tile.id);
                if (memoryValues[0] == memoryValues[1]) {
                    tilesFlipped += 2;
                     Punkte += 1;
                     Spieler();
                    // Clear both arrays
                    memoryValues = [];
                    memoryTiles = [];
                    // Check to see if the whole board is cleared
                    if (tilesFlipped == memory.length) {
                        alert("Board cleared... generating new board");
                        document.getElementById("memory_board").innerHTML = "";
                        newBoard();
                    }
                }
                else {
                    function flip2Back() {
                        // Flip the 2 tiles back over
                        var tile_1 = document.getElementById(memoryTiles[0]);
                        // tslint:disable-next-line: no-any
                        var tile_2 = document.getElementById(memoryTiles[1]);
                        tile_1.style.background = "url(palmen.jpg) no-repeat";
                        tile_1.innerHTML = "";
                        tile_2.style.background = "url(palmen.jpg) no-repeat";
                        tile_2.innerHTML = "";
                        // Clear both arrays
                        memoryValues = [];
                        memoryTiles = [];
                    }
                    setTimeout(flip2Back, 700);
                }
            }
        }
    }




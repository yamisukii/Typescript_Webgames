"use strict";
let memory = ["A", "A", "B", "B", "C", "C", "D", "D", "F", "F"];
let memoryValues = [];
let memoryTiles = [];
let tilesFlipped = 0;
// tslint:disable-next-line: no-any
Array.prototype.memory_shuffle = function () {
    let j;
    let x;
    for (let i = this.length; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = this[j];
        this[j] = this[i];
        this[i] = x;
    }
};
function newBoard() {
    tilesFlipped = 0;
    let output = "";
    memory.memory_shuffle();
    for (let i = 0; i < memory.length; i++) {
        output += "<div id=\"tile_" + i + "\" onclick=\"memoryFlipTile(this,'" + memory[i] + "')\"></div>";
    }
    document.getElementById("memory_board").innerHTML = output;
}
// tslint:disable-next-line: typedef
function memoryFlipTile(tile, val) {
    if (tile.innerHTML == "" && memoryValues.length < 2) {
        tile.style.background = "Redfunction memoryFlipTile(tile,val) {;;
        if (tile.innerHTML == "" && memoryValues.length < 2) {
            tile.style.background = "Yellow";
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
                    // Clear both arrays
                    // tslint:disable-next-line: no-unused-expression
                    memoryValues = [];
                    "";
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
                            // Clear both arrays
                            memoryValues = [];
                            memoryTiles = [];
                            // Check to see if the whole board is cleared
                            if (tilesFlipped == memory.length) {
                                alert("Board cleared... generating new board");
                                document.getElementById("memory_board").innerHTML = "";
                                newBoard();
                            }
                            // tslint:disable-next-line: typedef
                        }
                        else {
                            function flip2Back() {
                                // Flip the 2 tiles back over
                                let tile_1 = document.getElementById(memoryTiles[0]);
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
        }
    }
}
//# sourceMappingURL=memory.js.map
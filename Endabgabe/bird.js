"use strict";
var endabgabe;
(function (endabgabe) {
    class Bird extends endabgabe.Moveable {
        constructor() {
            super();
            let xBird = (3 * Math.random()) + 3;
            this.velocity = new endabgabe.Vector(xBird, 0);
        }
        draw() {
            endabgabe.crc2.save();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.translate(this.position.x, this.position.y);
            endabgabe.crc2.ellipse(0, 0, 10, 20, 5, 0, 2 * Math.PI);
            endabgabe.crc2.fillStyle = "red";
            endabgabe.crc2.fill();
            endabgabe.crc2.closePath();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.arc(18, 2, 10, 0, 2 * Math.PI);
            endabgabe.crc2.fillStyle = "black";
            endabgabe.crc2.fill();
            endabgabe.crc2.closePath();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.arc(20, 0, 2, 0, 2 * Math.PI);
            endabgabe.crc2.fillStyle = "yellow";
            endabgabe.crc2.fill();
            endabgabe.crc2.closePath();
            endabgabe.crc2.scale(7, 8);
            endabgabe.crc2.translate(-1, -1);
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(0, 0);
            endabgabe.crc2.lineTo(2, -3);
            endabgabe.crc2.lineTo(2, 2);
            endabgabe.crc2.closePath();
            endabgabe.crc2.fillStyle = "red";
            endabgabe.crc2.fill();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(4.5, 0.5);
            endabgabe.crc2.lineTo(6.5, 1.5);
            endabgabe.crc2.lineTo(4.5, 2);
            endabgabe.crc2.closePath();
            endabgabe.crc2.fillStyle = "black";
            endabgabe.crc2.fill();
            endabgabe.crc2.restore();
        }
        isHit(_hotspot) {
            let hitsize = 32;
            let difference = new endabgabe.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
        isFoodNear(_hotspot) {
            let foodSize = 200;
            let difference = new endabgabe.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < foodSize && Math.abs(difference.y) < foodSize);
        }
        moveToFood() {
            let ySnow = new endabgabe.Vector(0, 0);
            ySnow.random(1, 1);
            this.position.add(ySnow);
        }
    }
    endabgabe.Bird = Bird;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=bird.js.map
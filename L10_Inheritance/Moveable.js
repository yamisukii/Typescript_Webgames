"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    class Moveable {
        constructor() {
            let x = 1000 * Math.random();
            let y = 700 * Math.random();
            this.position = new L10_Inheritance.Vektor(x, y);
        }
        move() {
            // console.log("Move");
            this.position.add(this.velocity);
            if (this.position.x > L10_Inheritance.crc2.canvas.width) {
                this.position.x -= L10_Inheritance.crc2.canvas.width;
                this.position.y = L10_Inheritance.crc2.canvas.height * Math.random();
            }
            if (this.position.y > L10_Inheritance.crc2.canvas.height) {
                this.position.y -= L10_Inheritance.crc2.canvas.height;
                this.position.x = L10_Inheritance.crc2.canvas.width * Math.random();
            }
            let yWerte = [2, 1.5, 3];
            let n = Math.floor(Math.random() * 2.5);
            if (this.velocity.x > 2 && this.position.x > L10_Inheritance.crc2.canvas.width / 1.5) {
                let s = Math.random() - 0.5;
                if (s < 0) {
                    s = -1;
                }
                if (s > 0) {
                    s = 1;
                }
                let yVelo = yWerte[n] * s;
                this.velocity.y = yVelo;
            }
        }
    }
    L10_Inheritance.Moveable = Moveable;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Moveable.js.map
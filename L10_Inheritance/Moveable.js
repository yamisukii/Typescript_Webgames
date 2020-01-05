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
            let n = (Math.random() * 4);
            if (this.velocity.x > 2 && this.position.x > L10_Inheritance.crc2.canvas.width / n) {
                let yVelo = (Math.random() - 0.5) * 2;
                this.velocity.y = yVelo;
            }
        }
    }
    L10_Inheritance.Moveable = Moveable;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Moveable.js.map
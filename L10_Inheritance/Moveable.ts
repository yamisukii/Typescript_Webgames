namespace L10_Inheritance {
    export class Moveable {
        position: Vektor;
        velocity: Vektor;

        constructor() {
            let x: number = 1000 * Math.random();
            let y: number = 700 * Math.random();

            this.position = new Vektor(x, y);

        }
        move(): void {
            // console.log("Move");
            this.position.add(this.velocity);

            if (this.position.x > crc2.canvas.width) {
                this.position.x -= crc2.canvas.width;

                this.position.y = crc2.canvas.height * Math.random();

            }
            if (this.position.y > crc2.canvas.height) {
                this.position.y -= crc2.canvas.height;

                this.position.x = crc2.canvas.width * Math.random();

            }
            let yWerte: number[] = [2, 1.5, 3];
            let n: number = Math.floor(Math.random() * 2.5);


            if (this.velocity.x > 2 && this.position.x > crc2.canvas.width / 1.5) {
                let s: number = Math.random() - 0.5;
                if (s < 0) {
                    s = -1;
                }
                if (s > 0) {
                    s = 1;
                }

                let yVelo: number = yWerte[n] * s;
                this.velocity.y = yVelo;
            }
        }

    }
}
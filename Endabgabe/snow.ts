namespace endabgabe {
    export class Snow extends Moveable {

        gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 5);
        radius: number = 20;


        constructor() {
            super();

            // let ySnow: number = (3 * Math.random()) + 4;
            let ySnow: Vector = new Vector(0, 0);
            ySnow.random(1, 4);
            this.velocity = ySnow;

        }

        draw(): void {

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = this.gradient;
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();

            crc2.restore();





        }

        snowball(): void {
            console.log();

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.posiX, this.posiY);
            crc2.fillStyle = this.gradient;
            crc2.arc(0, 0, this.radius, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            if (this.radius > 0.8) {
                this.radius -= 0.8;
                if (this.radius < 1.8) {
                    this.radius = 0;
                }
            }

            crc2.restore();




        }
    }
}
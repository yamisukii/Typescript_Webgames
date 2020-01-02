namespace L09_Klassen {
    export class Snow {
        position: Vektor;
        velocity: Vektor;
        size: number;
        gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 5);

        constructor() {
            // console.log("Snow Constructor");
            let x: number = 1000 * Math.random();
            let y: number = 700 * Math.random();

            this.position = new Vektor(x, y);

            let ySnow: number = (3 * Math.random()) + 1;
            this.velocity = new Vektor(0, ySnow);

        }
        move(): void {
            // console.log("Move");
            this.position.add(this.velocity);

            if (this.position.y > crc2.canvas.height) {
                this.position.y -= crc2.canvas.height;
                this.position.x = crc2.canvas.width * Math.random();

            }
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
    }
  

}
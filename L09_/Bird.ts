namespace L09_Klassen {
    export class Bird {
        position: Vektor;
        velocity: Vektor;
        size: number;


        constructor() {
            // console.log("Snow Constructor");
            let x: number = 1000 * Math.random();
            let y: number = 700 * Math.random();
            

            this.position = new Vektor(x, y);

            let xBird: number = (3 * Math.random()) + 1;

            this.velocity = new Vektor(xBird, 0);
            

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
            if (this.velocity.x > 2 && this.position.x > crc2.canvas.width / 2 ) {
                let yVelo: number = (2 * Math.random()) + 1;
                this.velocity.y = yVelo ;
            }
        }

        changeDirection(): void {
            this.position.add(this.velocity);
            let xVelo: number = (4 * Math.random()) + 1;
            this.velocity.x = -(xVelo);
        }
        draw(): void {

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.ellipse(0, 0, 10, 20, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(18, 2, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(20, 0, 2, 0, 2 * Math.PI);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.closePath();

            crc2.scale(7, 8);
            crc2.translate(-1, -1);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(2, -3);
            crc2.lineTo(2, 2);
            crc2.closePath();
            crc2.fillStyle = "red";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(4.5, 0.5);
            crc2.lineTo(6.5, 1.5);
            crc2.lineTo(4.5, 2);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();



            crc2.restore();






        }
    }


}
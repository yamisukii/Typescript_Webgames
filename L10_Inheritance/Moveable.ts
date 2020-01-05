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
            let n: number = (Math.random() * 4);
            if (this.velocity.x > 2 && this.position.x > crc2.canvas.width / n) {
                let yVelo: number = (Math.random() - 0.5) * 2 ;
                this.velocity.y = yVelo;
            }
        }

    }
}
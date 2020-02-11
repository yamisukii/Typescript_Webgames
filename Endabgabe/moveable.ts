namespace endabgabe {
    export class Moveable {
        position: Vector;
        velocity: Vector;
        posiX: number;
        posiY: number;

        constructor() {
            let x: number = crc2.canvas.width * Math.random();
            let y: number = crc2.canvas.height * Math.random();

            this.position = new Vector(x, y);


        }
        move(): void {

            this.position.add(this.velocity);
            if (this.position.x > crc2.canvas.width) {
                this.position.x -= crc2.canvas.width;
                this.position.y = crc2.canvas.height * Math.random() ;

            }
            if (this.position.y > crc2.canvas.height) {
                this.position.y -= crc2.canvas.height;
                this.position.x = crc2.canvas.width * Math.random();

            }

        }
        getClick(_positionX: number, _positionY: number): void {
            this.posiX = _positionX;
            this.posiY = _positionY;

        }

    }
}
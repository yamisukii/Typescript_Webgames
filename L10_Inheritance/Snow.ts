namespace L10_Inheritance {
    export class Snow extends Moveable {
       
        gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 5);

        constructor() {
            super();
           
            let ySnow: number = (3 * Math.random()) + 1;
            this.velocity = new Vektor(0, ySnow);

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
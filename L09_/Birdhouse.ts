namespace L09_Klassen {
    export function drawBirdhouse(_position: Vector, _size: Vector): void {


        crc2.save();
        crc2.translate(_position.x, _position.y);
        let x: number = (Math.random() - 0.5) * _size.x;
        let y: number = -(Math.random() * _size.y);
        crc2.translate(x, y);
        crc2.scale(8, 8);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(4, 0);
        crc2.lineTo(4, -10);
        crc2.lineTo(10, -10);
        crc2.lineTo(10, -20);
        crc2.lineTo(0, -25);
        crc2.lineTo(-10, -20);
        crc2.lineTo(-10, -10);
        crc2.lineTo(-4, -10);
        crc2.lineTo(-4, 0);
        crc2.closePath();
        crc2.fillStyle = "brown";
        crc2.fill();

        crc2.fillStyle = "yellow";
        crc2.beginPath();
        crc2.arc(0, -17, 2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.restore();

    }



}
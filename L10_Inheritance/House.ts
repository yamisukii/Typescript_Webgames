namespace L10_Inheritance {
    export function drawHouse(_position: Vector, _size: Vector): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        let x: number = (Math.random() - 0.5) * _size.x;
        let y: number = -(Math.random() * _size.y);
        crc2.translate(x, y);

        crc2.fillStyle = "HSLA(170, 100%, 50%)";
        crc2.fillRect(0, 0, 300, 150);

        crc2.beginPath();
        crc2.moveTo(-10, 0);
        crc2.lineTo(150, -50);
        crc2.lineTo(310, 0);
        crc2.closePath();
        crc2.fillStyle = "red";
        crc2.fill();

        crc2.fillStyle = "blue";
        crc2.fillRect(20, 20, 60, 60);

        crc2.fillStyle = "brown";
        crc2.fillRect(140, 50, 50, 100);

        crc2.beginPath();
        crc2.arc(155, 85, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "yellow";
        crc2.fill();

        crc2.restore();

    }


}
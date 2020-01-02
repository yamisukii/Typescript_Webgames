namespace L09_Klassen {
    export function drawMountain(_postion: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        // console.log("Mountains", _postion, _min, _max, _colorLow, -_colorHigh);
        let stepMin: number = 50;
        let stepMax: number = 100;
        let x: number = 0;

        crc2.save();
        crc2.translate(_postion.x, _postion.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();



    }
}
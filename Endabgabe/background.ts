namespace endabgabe {

    let gradient: CanvasGradient;
    let golden: number = 0.62;

    export function background(): void {

        gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(195, 100%, 50%)");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSLA(210, 100%, 50%, 0)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


        let horizon: number = golden * crc2.canvas.height;

        let sunPosition: Vector = new Vector(600, 100);
        let cloudPosition: Vector = new Vector(400, 100);
        let cloudSize: Vector = new Vector(300, 50);
        let mountainPosition: Vector = new Vector(0, horizon);


        drawSun(sunPosition);
        drawCloud(cloudPosition, cloudSize);
        drawMountainBack(mountainPosition, 100, 250);
        drawMountain(mountainPosition, 50, 120);



    }
    export function drawSun(_postion: Vector): void {
        // console.log("Sun", _postion);
        let r1: number = 30;
        let r2: number = 100;

        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_postion.x, _postion.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    export function drawCloud(_postion: Vector, _size: Vector): void {
        // console.log("Clouds", _postion, _size);

        let nParticles: number = 20;
        let radiusParticle: number = 100;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_postion.x, _postion.y);
        crc2.fillStyle = gradient;

        for (let i: number = 0; i < nParticles; i++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    export function drawMountainBack(_postion: Vector, _min: number, _max: number): void {
        // console.log("Mountains", _postion, _min, _max, _colorLow, -_colorHigh);
        let stepMin: number = 75;
        let stepMax: number = 200;
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
        gradient.addColorStop(0, "HSLA(0, 0%, 60%)");
        gradient.addColorStop(0.8, "white");

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();



    }

    export function drawMountain(_postion: Vector, _min: number, _max: number): void {
        // console.log("Mountains", _postion, _min, _max, _colorLow, -_colorHigh);
        let stepMin: number = 75;
        let stepMax: number = 200;
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
        gradient.addColorStop(0, "grey");
        gradient.addColorStop(0.7, "HSLA(0, 0%, 90%)");
        gradient.addColorStop(1, "HSLA(0, 0%, 100%)");

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();



    }
    export function createSnow(_nSnow: number): void {


        for (let i: number = 0; i < _nSnow; i++) {
            let snow: Snow = new Snow();
            moveables.push(snow);

        }
    }
    export function createBird(_nBirds: number): void {

        for (let i: number = 0; i < _nBirds; i++) {
            let bird: Bird = new Bird();
            moveables.push(bird);

        }
    }

}
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
        let birdhousePosition: Vector = new Vector(200, 400);
        let housePosition: Vector = new Vector(500, 300);
        let cloudPosition: Vector = new Vector(400, 100);
        let cloudSize: Vector = new Vector(300, 50);
        let houseSize: Vector = new Vector(200, 50);
        let mountainPosition: Vector = new Vector(0, horizon);


        drawSun(sunPosition);
        drawCloud(cloudPosition, cloudSize);
        drawMountainBack(mountainPosition, 100, 250);
        drawMountain(mountainPosition, 50, 120);
        drawBirdhouse(birdhousePosition, houseSize);
        drawHouse(housePosition, houseSize);



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
    export function drawBirdhouse(_position: Vector, _size: Vector): void {


        crc2.save();
        crc2.translate(_position.x, _position.y);
        let x: number = (Math.random() - 0.5) * _size.x;
        let y: number = -(Math.random() * _size.y);
        crc2.translate(x, y);
        crc2.scale(7, 8);
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
namespace L10_Inheritance {
    interface Vector {
        x: number;
        y: number;
    }
    console.log("Waiting on load");
    window.addEventListener("load", handleLoad);
    

    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;


    function handleLoad(_event: Event): void {
        console.log("Start now");

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        if (!crc2)
            console.log("Fehler!");

        let horizon: number = crc2.canvas.height * golden;

        drawBackground();
        drawSun({ x: 800, y: 105 });
        drawCloud({ x: 500, y: 125 }, { x: 500, y: 75 });
        drawMountain({ x: 0, y: horizon }, 75, 200, "grey", "white");
        drawBirdhouse({ x: 200, y: 600 }, { x: 200, y: 100 });
        drawSnowflakes();
    }

    function drawBackground(): void {
        console.log("Background");
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(195, 100%, 50%)");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "white");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_postion: Vector): void {
        console.log("Sun", _postion);
        let r1: number = 30;
        let r2: number = 150;

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
    function drawCloud(_postion: Vector, _size: Vector): void {
        console.log("Clouds", _postion, _size);

        let nParticles: number = 30;
        let radiusParticle: number = 50;
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

    function drawMountain(_postion: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains", _postion, _min, _max, _colorLow, -_colorHigh);
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

    function drawBirdhouse(_position: Vector, _size: Vector): void {


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

    function drawSnowflakes(): void {
        let nFlakes: number = 80;
        let radius: number = 5;
        let flakes: Path2D = new Path2D();


        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radius);

        flakes.arc(0, 0, radius, 0, 2 * Math.PI);
        gradient.addColorStop(0, "grey");
        gradient.addColorStop(1, "white");

      
        crc2.save();
        crc2.fillStyle = gradient;

        for (let i: number = 0; i < nFlakes; i++) {
            crc2.save();
            let x: number = Math.floor(Math.random() * (crc2.canvas.width - 1)) + 1;
            let y: number = Math.floor(Math.random() * (crc2.canvas.height - 1)) + 1;
            crc2.translate(x, y);
            crc2.fill(flakes);
            crc2.restore();
        }
        crc2.restore();

    }
    

}
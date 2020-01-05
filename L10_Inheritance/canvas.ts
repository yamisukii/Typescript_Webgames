namespace L10_Inheritance {
    export interface Vector {
        x: number;
        y: number;
    }
    console.log("Waiting on load");
    window.addEventListener("load", handleLoad);


    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");

    export let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    let moveables: Moveable[] = [];
    


    function handleLoad(_event: Event): void {
        console.log("Start now");

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        if (!crc2)
            console.log("Fehler!");

        let horizon: number = crc2.canvas.height * golden;


        drawBackground();
        drawSun({ x: 800, y: 105 });
        drawCloud({ x: 500, y: 125 }, { x: 500, y: 75 });
        drawMountain({ x: 0, y: horizon }, 75, 200, "grey", "white");
        drawHouse({x: 600, y: 400}, {x: 100, y: 100});
        drawBirdhouse({ x: 200, y: 600 }, { x: 200, y: 100 });
        drawBird();

        let background: ImageData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        window.setInterval(update, 10, background);
        drawSnowflakes();


    }

    function drawBackground(): void {
        // console.log("Background");
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(195, 100%, 50%)");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSLA(210, 100%, 50%, 0)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }





    function drawSnowflakes(): void {
        let nFlakes: number = 80;

        for (let i: number = 0; i < nFlakes; i++) {
            let snowflake: Snow = new Snow();
            moveables.push(snowflake);

        }
        console.log(moveables);

    }

    function drawBird(): void {
        let nBirds: number = 20;

        for (let i: number = 0; i < nBirds; i++) {
            let bird: Bird = new Bird();
            moveables.push(bird);

        }
    }

    function update(_backgroundData: ImageData): void {

        crc2.putImageData(_backgroundData, 0, 0);

        for (let moveable of moveables) {
            if (moveable instanceof Snow) {
                moveable.move();
                moveable.draw();
            }

        }
        for (let moveable of moveables) {
            if (moveable instanceof Bird) {
                moveable.move();
                moveable.draw();
            }

        }
    }

}
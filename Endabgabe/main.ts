namespace endabgabe {
    window.addEventListener("load", handleLoad);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    export let moveables: Moveable[] = [];
    export let snowball: Snow;
    export let food: Food;
    export let highscore: number = 500;
    export let timer: number = 30;
    export let div: HTMLDivElement;
    export let time: HTMLElement;
    export let highScorer: HTMLElement;
    export let interval: number;
    export let hungryBirds: Bird[] = [];
    export let buttonStart: HTMLButtonElement;
    export let buttonHs: HTMLButtonElement;
    export let form: HTMLFormElement;
    export let url: string = "https://milchstrasse.herokuapp.com/";


    function handleLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        if (!crc2) {
            alert("Fehler!");
        }

        background();
        createSnow(40);

        let backGround: ImageData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        window.setInterval(update, 20, backGround);

        buttonHs = <HTMLButtonElement>document.querySelector("button[id=hs]");
        buttonHs.addEventListener("click", showHighscore);
        buttonStart = <HTMLButtonElement>document.querySelector("button[id=start]");
        buttonStart.addEventListener("click", startGame);
    }

    function startGame(): void {
        console.log("startGame");
        buttonStart.remove();
        buttonHs.remove();


        time = <HTMLElement>document.createElement("p");
        highScorer = <HTMLElement>document.createElement("p");
        div = <HTMLDivElement>document.querySelector("div");
        time.innerHTML = "Time: " + timer.toString();
        highScorer.innerHTML = "Highscore: " + highscore.toString();
        div.appendChild(time);
        div.appendChild(highScorer);
        createBird(20);
        interval = window.setInterval(loadedTime, 1000);

        canvas.addEventListener("click", thrwoSnowball);
        canvas.addEventListener("contextmenu", getRightClick);
        // tslint:disable-next-line: typedef
        window.addEventListener(`contextmenu`, function (e) {
            e.preventDefault();
        });
    }

    function getRightClick(_event: MouseEvent): void {
        console.log("getRightClick");
        food = new Food();
        food.getClick(_event.offsetX, _event.offsetY);
        let hotspot: Vector = new Vector(_event.offsetX, _event.offsetY);
        if (hotspot) {
            throwFood(hotspot);
        }

    }

    function throwFood(_hotspot: Vector): void {
        for (let bird of moveables) {
            if (bird instanceof Bird) {
                bird.isFoodNear(_hotspot);
                if (bird.isFoodNear(_hotspot)) {
                    hungryBirds.push(bird);
                    let index: number = moveables.indexOf(bird);
                    moveables.splice(index, 1);
                    window.setTimeout(foodOver, 3000);
                }
            }
        }
        console.log(hungryBirds);
    }

    function foodOver(): void {
        for (let hungryBird of hungryBirds) {
            moveables.push(hungryBird);
        }
        hungryBirds = [];
    }

    function thrwoSnowball(_event: MouseEvent): void {
        console.log("throw snowball");
        snowball = new Snow();
        snowball.getClick(_event.offsetX, _event.offsetY);

        let hotspot: Vector = new Vector(_event.offsetX, _event.offsetY);
        console.log(hotspot);
        if (hotspot) {
            window.setTimeout(createSnowball, 350, hotspot);
        }
    }

    function createSnowball(_hotspot: Vector): void {

        let birdHit: Bird | null = getBirdHit(_hotspot);
        console.log(birdHit);
        if (birdHit) {
            highscore += 10;
            highScorer.innerHTML = "Highscore: " + highscore.toString();
            div.appendChild(highScorer);

            console.log(highscore);
            breakBird(birdHit);

        }
    }

    function getBirdHit(_hotspot: Vector): Bird | null {
        if (hungryBirds.length >= 1) {
            for (let bird of hungryBirds) {
                if (bird.isHit(_hotspot)) {
                    return bird;
                }
            }
        } else {
            for (let bird of moveables) {
                if (bird instanceof Bird) {
                    if (bird.isHit(_hotspot)) {
                        return bird;
                    }
                }
            }
        }
        return null;
    }

    function breakBird(_birdHit: Bird): void {
        let index: number = moveables.indexOf(_birdHit);
        let indexHungry: number = hungryBirds.indexOf(_birdHit);
        if (hungryBirds.length >= 1) {
            hungryBirds.splice(indexHungry, 1);
        } else {
            moveables.splice(index, 1);
        }
    }




    function update(_backgroundData: ImageData): void {
        crc2.putImageData(_backgroundData, 0, 0);
        if (hungryBirds) {
            for (let hungryBird of hungryBirds) {
                hungryBird.moveToFood();
                hungryBird.draw();
            }
            for (let moveable of moveables) {
                if (moveable instanceof Bird) {
                    moveable.move();
                    // moveable.moveToFood();
                    moveable.draw();
                }
                if (moveable instanceof Snow) {
                    moveable.move();
                    moveable.draw();
                }
            }
        } else {
            for (let moveable of moveables) {
                if (moveable instanceof Bird) {
                    moveable.move();
                    // moveable.moveToFood();
                    moveable.draw();
                }
                if (moveable instanceof Snow) {
                    moveable.move();
                    moveable.draw();
                }
            }
        }
        if (snowball) {
            snowball.snowball();
        }
        if (food) {
            food.draw();
        }
    }
}
namespace endabgabe {
    export function loadedTime(): void {
        // console.log(timer);
        if (timer == 0) {
            timer = 0;
            safeHighscore(highscore);
            clearInterval(interval);
        } else {
            timer--;
            time.innerHTML = "Time: " + timer.toString();
            div.appendChild(time);
            highscore -= 5;
            highScorer.innerHTML = "Highscore: " + highscore.toString();
            div.appendChild(highScorer);
            // console.log(highscore);

        }
    }
    export function showHighscore(): void {
        buttonHs.remove();
        buttonStart.remove();
    }
    
    function safeHighscore(_highscore: number): void {
        time.remove();

        moveables = [];
        form = <HTMLFormElement>document.createElement("form");
        div.appendChild(form);

        let input: HTMLInputElement = <HTMLInputElement>document.createElement("input");
        input.placeholder = "Name";
        input.setAttribute("class", "nes-input");
        form.appendChild(input);
        let buttonSend: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
        buttonSend.setAttribute("type", "button");
        buttonSend.setAttribute("class", "nes-btn is-primary");
        buttonSend.setAttribute("id", "save");
        buttonSend.innerHTML = "Save";
        form.appendChild(buttonSend);
        buttonSend.addEventListener("click", sendHs);


    }

    async function sendHs(_event: Event): Promise<void> {
        console.log("send Highscore");
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        alert(responseText);

    }






}
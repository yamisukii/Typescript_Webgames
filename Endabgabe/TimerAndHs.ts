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
    export async function showHighscore(): Promise<void> {
        buttonHs.remove();
        buttonStart.remove();
        console.log("Highscores ausgeben");
        let query: string = "command=retrieve";
        let response: Response = await fetch(url + "?" + query);
        let responseJson: string[] = await response.json();
        for (let index = 0; index < responseJson.length; index++) {
            delete responseJson[index]["_id"];
        }
        let sortedJson = responseJson.sort(({ score: aScore }: string, { score: bScore }: string) => bScore - aScore);
        let output = "";
        for (let index = 0; index < sortedJson.length; index++) {
            output += sortedJson[index].name + " - " + sortedJson[index].score + "\n";
        }
        
        div.innerText = output;
    }

    function safeHighscore(_highscore: number): void {
        time.remove();

        moveables = [];
        hungryBirds = [];

        console.log("end");
        let insertedname: any = prompt("Your Score: " + highscore + "\n Enter your name.");
        if (insertedname != null) {
            sendHs(insertedname, highscore);

        }


    }

    async function sendHs(_name: string, _highscore: number): Promise<void> {
        console.log("send Highscore");
        let query: string = "name=" + _name + "&score=" + _highscore;
        console.log(query);
        let response: Response = await fetch(url + "?" + query);
        console.log(response);
    }






}
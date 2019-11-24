namespace L05 {
    window.addEventListener("load", handleLoad);

    let form: HTMLFormElement;

    async function handleLoad(_event: Event): Promise<void> {
        let response: Response = await fetch("data.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);

        generateContent(data);
        

        form = <HTMLFormElement>document.querySelector("form");
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
        let reset: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=reset]");
        reset.addEventListener("click", resetOrder);
        submit.addEventListener("click", sendOrder);
        form.addEventListener("change", handleChange);



    }

    async function sendOrder(_event: Event): Promise<void> {
        // console.log(_event);
        console.log("send");
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("charakter.html?" + query.toString());
        alert("hallo");
    }

    function handleChange(_event: Event): void {
        displayOrder();
    }

    function displayOrder(): void {
        let gewicht: number = 0;
        let stärke: number = 0;
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form"));

        for (let entry of formData) {
            let selector: string = "[value='" + entry[1] + "']";
            console.log(selector);

            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            console.log(item);
            if (item) {
                let itemGewicht: number | null = Number(item.getAttribute("gewicht"));
                let itemStärke: number = Number(item.getAttribute("stärke"));

                // console.log(entry[0]);

                switch (entry[0]) {
                    case "name":
                        order.innerHTML += "Name: " + item.value;
                    case "geschlecht":
                        order.innerHTML += item.value + "</br>";
                        break;
                    case "Rasse":
                        order.innerHTML += item.value + " " + itemGewicht + " kg" + " / Stärke" + itemStärke + "</br>";
                        break;
                    case "Klasse":
                        order.innerHTML += item.value + "     " + "  Stärke" + itemStärke + "</br>";
                        break;
                    case "Waffen":
                        order.innerHTML += item.value + " " + itemGewicht + " kg" + " / Stärke" + itemStärke + "</br>";
                        break;

                    default:
                        order.innerHTML += item.innerHTML;
                        break;
                }


                // console.log(item);
                gewicht += itemGewicht;
                stärke += itemStärke;
            }
        }
        // console.groupEnd();

        order.innerHTML += "<p><strong>Total:  " + gewicht.toFixed(2) + " kg" + "</br>";
        order.innerHTML += "<p><strong>TotalStärke:  " + stärke.toFixed() + "</br>";
    }
    function resetOrder(_event: Event): void {
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "No Order";

    }





}
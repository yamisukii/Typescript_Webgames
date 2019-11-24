namespace L04 {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        generateContent(data);

        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");

        form.addEventListener("change", handleChange);



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
            
            let itemGewicht: number | null = Number(item.getAttribute("gewicht"));
            

            let itemStärke: number = Number(item.getAttribute("stärke"));
            console.log(itemGewicht);
            switch (entry[0]) {
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
        // console.groupEnd();

        order.innerHTML += "<p><strong>Total:  " + gewicht.toFixed(2) + " kg" + "</br>";
        order.innerHTML += "<p><strong>TotalStärke:  " + stärke.toFixed() + "</br>";
    }



}
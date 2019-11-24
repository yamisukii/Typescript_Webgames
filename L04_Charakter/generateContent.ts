namespace L04 {

    // tslint:disable-next-line: typedef
    export function generateContent(_data: Data) {

        for (let category in _data) {

            // let inputGeschlecht: HTMLInputElement = input.type(Audio);
            let itmes: Item[] = _data[category];

            let group: HTMLElement | null = null;
            switch (category) {
                case "Rasse":
                    group = createSelect(itmes, category);
                    break;
                case "Klasse":
                    group = createSelect(itmes, category);
                    break;
                case "Waffen":
                    group = createSelect(itmes, category);
                    break;
                case "Geschlecht":
                    group = createInput(itmes, category);
                default:
                    break;
            }
            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    function createSelect(_items: Item[], _category: string): HTMLElement {
        let group: HTMLDivElement = document.createElement("div");
        let select: HTMLSelectElement = <HTMLSelectElement>document.createElement("select");
        // let option: HTMLOptionElement = document.createElement("option"); 
        let emptyOption: HTMLOptionElement = document.createElement("option");
        emptyOption.selected = true;
        emptyOption.setAttribute("class", "holder");
        emptyOption.textContent = _category;


        for (let entry of _items) {
            let option: HTMLOptionElement = document.createElement("option");

            option.value = entry.name;
            option.setAttribute("gewicht", entry.gewicht.toFixed(2));
            option.setAttribute("stärke", entry.stärke.toFixed(2));
            select.name = _category;
            option.textContent = entry.name;


            group.appendChild(select);
            select.appendChild(emptyOption);
            select.appendChild(option);

        }

        return group;

    }
    function createInput(_items: Item[], _category: string): HTMLElement {
        let group: HTMLDivElement = document.createElement("div");
        
        for (let entry of _items) {
            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");


            console.log(entry.name);

            input.type = "radio";
            input.value = entry.name;
            input.id = entry.name;
            input.name = "geschlecht";
            label.setAttribute("for", entry.name);
            input.setAttribute("gewicht", entry.gewicht.toFixed(2));
            input.setAttribute("stärke", entry.stärke.toFixed(2));
            label.textContent = entry.name;
            

            group.appendChild(input);
            group.appendChild(label);

        }

       
        return group;

    }


}




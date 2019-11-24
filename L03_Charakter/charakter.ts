namespace L03 {
    window.addEventListener("load", init);
    // tslint:disable-next-line: class-name
    class rasse {
        name: string;
        gewicht: number;
        stärke: number;

        constructor(n: string, g: number, s: number) {
            this.name = n;
            this.gewicht = g;
            this.stärke = s;
        }
    }
    let zwerg: rasse = new rasse("Zwerg", 50, 4);
    let nachtelf: rasse = new rasse("Nachtelf", 20, 5);
    let vampir: rasse = new rasse("Vampir", 70, 6);
    let werwolf: rasse = new rasse("Werwolf", 90, 5);
    let rassen: rasse[] = [zwerg, nachtelf, vampir, werwolf];

    class klasse {
        name: string;
        stärke: number;

        constructor(n: string, s: number) {
            this.name = n;

            this.stärke = s;
        }
    }
    let krieger: klasse = new klasse("Krieger", 5);
    let könig: klasse = new klasse("König", 2);
    let zauberer: klasse = new klasse("Zauberer", 4);
    let dieb: klasse = new klasse("Dieb", 3);
    let klassen: klasse[] = [krieger, könig, zauberer, dieb];

    class waffen {
        name: string;
        gewicht: number;
        stärke: number;

        constructor(n: string, g: number, s: number) {
            this.name = n;
            this.gewicht = g;
            this.stärke = s;
        }
    }
    let schwert: waffen = new waffen("Schwert", 15, 5);
    let schild: waffen = new waffen("Schild", 30, 1);
    let keule: waffen = new waffen("Keule", 8, 2);
    let pfefferspray: waffen = new waffen("Pfefferspray", 1, 2);
    let waffe: waffen[] = [schwert, schild, keule, pfefferspray];

    // tslint:disable-next-line: no-any
    function createWeapon(array: any, id: string): void {
        let output: string = "";
        for (let i: number = 0; i < array.length; i++) {
            output += "<option value\"=" + this.name + "></option>";
        }
        document.getElementById(id).innerHTML = output;

    }
    createWeapon(rassen, "Rasse");



    function init(ev: Event): void {
        let x: NodeListOf<HTMLFieldSetElement> = document.querySelectorAll("fieldset");

        for (let i: number = 0; i < x.length; i++) {
            let fieldset: HTMLFieldSetElement = x[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("input", handleChange);

        }
    }
    function handleChange(ev: Event): void {
        let x: HTMLInputElement = <HTMLInputElement>ev.target;

        if (ev.type == "change")
            console.log(x.name + x.value);
        else
            console.log("Input: " + x.name + x.value);


    }


}
"use strict";
var L03;
(function (L03) {
    window.addEventListener("load", init);
    // tslint:disable-next-line: class-name
    class rasse {
        constructor(n, g, s) {
            this.name = n;
            this.gewicht = g;
            this.stärke = s;
        }
    }
    let zwerg = new rasse("Zwerg", 50, 4);
    let nachtelf = new rasse("Nachtelf", 20, 5);
    let vampir = new rasse("Vampir", 70, 6);
    let werwolf = new rasse("Werwolf", 90, 5);
    let rassen = [zwerg, nachtelf, vampir, werwolf];
    class klasse {
        constructor(n, s) {
            this.name = n;
            this.stärke = s;
        }
    }
    let krieger = new klasse("Krieger", 5);
    let könig = new klasse("König", 2);
    let zauberer = new klasse("Zauberer", 4);
    let dieb = new klasse("Dieb", 3);
    let klassen = [krieger, könig, zauberer, dieb];
    class waffen {
        constructor(n, g, s) {
            this.name = n;
            this.gewicht = g;
            this.stärke = s;
        }
    }
    let schwert = new waffen("Schwert", 15, 5);
    let schild = new waffen("Schild", 30, 1);
    let keule = new waffen("Keule", 8, 2);
    let pfefferspray = new waffen("Pfefferspray", 1, 2);
    let waffe = [schwert, schild, keule, pfefferspray];
    // tslint:disable-next-line: no-any
    function createWeapon(array, id) {
        let output = "";
        for (let i = 0; i < array.length; i++) {
            output += "<option value\"=" + this.name + "></option>";
        }
        document.getElementById(id).innerHTML = output;
    }
    createWeapon(rassen, "Rasse");
    function init(ev) {
        let x = document.querySelectorAll("fieldset");
        for (let i = 0; i < x.length; i++) {
            let fieldset = x[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("input", handleChange);
        }
    }
    function handleChange(ev) {
        let x = ev.target;
        if (ev.type == "change")
            console.log(x.name + x.value);
        else
            console.log("Input: " + x.name + x.value);
    }
})(L03 || (L03 = {}));
//# sourceMappingURL=charakter.js.map
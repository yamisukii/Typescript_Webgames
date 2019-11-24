"use strict";
var L04;
(function (L04) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        L04.generateContent(L04.data);
        let form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        let gewicht = 0;
        let stärke = 0;
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.querySelector("form"));
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']";
            console.log(selector);
            let item = document.querySelector(selector);
            let itemGewicht = Number(item.getAttribute("gewicht"));
            let itemStärke = Number(item.getAttribute("stärke"));
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
})(L04 || (L04 = {}));
//# sourceMappingURL=charakter.js.map
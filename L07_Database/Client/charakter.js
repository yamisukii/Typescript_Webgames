"use strict";
var L07_Mongo;
(function (L07_Mongo) {
    window.addEventListener("load", handleLoad);
    let form;
    let url = "http://localhost:5002";
    async function handleLoad(_event) {
        let response = await fetch("data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        L07_Mongo.generateContent(data);
        form = document.querySelector("form");
        let submit = document.querySelector("button[type=button]");
        let reset = document.querySelector("button[type=reset]");
        reset.addEventListener("click", resetOrder);
        submit.addEventListener("click", sendOrder);
        form.addEventListener("change", handleChange);
    }
    async function sendOrder(_event) {
        // console.log(_event);
        console.log("send");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
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
            console.log(item);
            if (item) {
                let itemGewicht = Number(item.getAttribute("gewicht"));
                let itemStärke = Number(item.getAttribute("stärke"));
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
    function resetOrder(_event) {
        let order = document.querySelector("div#order");
        order.innerHTML = "No Order";
    }
})(L07_Mongo || (L07_Mongo = {}));
//# sourceMappingURL=charakter.js.map
"use strict";
var Adventures;
(function (Adventures) {
    addEventListener("load", handleLoad);
    let input;
    let name;
    function handleLoad() {
        console.log("load");
        let button = document.getElementById("start");
        button.innerHTML = "start";
        button.addEventListener("click", startGame);
        input = document.querySelector("input");
        input.addEventListener("input", displayName);
    }
    function displayName() {
        name = input.value;
        console.log(name);
    }
    function startGame() {
        let div = document.getElementById("form");
        let paragraph = document.createElement("p");
        let button1 = document.createElement("button");
        let button2 = document.createElement("button");
        if (name) {
            div.innerHTML = "";
            button1.setAttribute("class", "nes-btn is-primary");
            button1.setAttribute("id", "decision");
            button2.setAttribute("class", "nes-btn is-success");
            paragraph.innerHTML = `Ein starkes Unwetter wütet draußen. </br>` + name +
                ` der Hexer versucht sich durch den Schlammgetränkten Untergrund und den starken Böen des Windes zu kämpfen. 
            Der nadelstichartige Regen lässt seine Augen keine Möglichkeit sich zu orientieren. 
            Mit geducktem Blick auf die braune Pampe die sich um seine schwarzen Stiefelen suppt, erreicht der 1,95m Mutant endlich das gesuchte Gasthaus.
            ` + name + ` sucht sich ein kleines ruhiges Plätzchen in der Ecke. </br>
            ` + name + `: „*Seufzt*. Endlich da“.</br>
            Grade als er einen erholsamen Schluck von seinem gebrauten Gerstensaft nehmen möchte.</br>
            Unbekannter: "Du Bastard! Das war mein Bier!"`;
            div.appendChild(paragraph);
            button1.innerHTML = "Ignorieren";
            button2.innerHTML = "Umdrehen";
            div.appendChild(button1);
            div.appendChild(button2);
            button1.addEventListener("click", ignorieren);
            button2.addEventListener("click", umdrehen);
        }
        else {
            alert("Bitte geb ein Namen ein");
            handleLoad();
        }
    }
    function ignorieren() {
        let div = document.getElementById("form");
        div.innerHTML = "";
        let paragraph = document.createElement("p");
        paragraph.innerHTML = name + ` rührt sich nicht. Er nimm ein Schluck von seinem Bier und versucht die Beleidigungen zu ignorieren.</br>
        *Klirk* Ein Stuhl prallt gegen den Hinterkopf des Hexers.</br>
        Unbekannter: “ Was hab ich dir gesagt! Das ist mein Bier!! Hexer.“</br>
        ` + name + ` dreht sich um. Ein kleiner wütender Zwerg steht vor dem Hexer.`;
        let button1 = document.createElement("button");
        button1.setAttribute("class", "nes-btn is-primary");
        button1.setAttribute("id", "decision");
        let button2 = document.createElement("button");
        button2.setAttribute("class", "nes-btn is-success");
        div.appendChild(paragraph);
        button1.innerHTML = "Zwerg schlagen ";
        button2.innerHTML = "Reden";
        div.appendChild(button1);
        div.appendChild(button2);
        button1.addEventListener("click", schlagen);
        button2.addEventListener("click", reden);
    }
    function schlagen() {
        let div = document.getElementById("form");
        div.innerHTML = "";
        let paragraph = document.createElement("p");
        paragraph.innerHTML = name + ` haut dem Zwerg voll in die Fresse, ohne auch einen Ton von sich zu geben.
        Der Zwerg fliegt mit Kopf voraus auf den Nachbartisch der Barbaren und zerstört alle Krüge. 
        Die Barbaren stehen schlagartig auf und schauen mit bösen Blicken den Hexer an.</br>
        Barbar: „Du Missgeburt! Hol uns neues Bier oder wir machen dich fertig.“`;
        let button1 = document.createElement("button");
        button1.setAttribute("class", "nes-btn is-primary");
        button1.setAttribute("id", "decision");
        let button2 = document.createElement("button");
        button2.setAttribute("class", "nes-btn is-success");
        div.appendChild(paragraph);
        button1.innerHTML = "Abhauen ";
        button2.innerHTML = "Barschägerei anfangen";
        div.appendChild(button1);
        div.appendChild(button2);
        button1.addEventListener("click", end);
        button2.addEventListener("click", end);
    }
    function reden() {
        let div = document.getElementById("form");
        div.innerHTML = "";
        let paragraph = document.createElement("p");
        paragraph.innerHTML = name + `: „Das ist mein Bier, Zwerg! Frag den Wirt“ </br>
        Zwerg: „Hmmm, nochmal Glück gehabt du Witzbold. Wo ist dann mein Bier?“</br>
        Barbar am Nebentisch: „Hahahah, schaut mal unsere zwei süßen Turteltäubchen schmußen mit einander.“</br>
        Zwerg: „Halt deine Fresse, ich und der Hexer schlagen euch im Dreieck rum.“</br>
        _Name: „Hmmm?!“
        `;
        let button1 = document.createElement("button");
        button1.setAttribute("class", "nes-btn is-primary");
        button1.setAttribute("id", "decision");
        let button2 = document.createElement("button");
        button2.setAttribute("class", "nes-btn is-success");
        div.appendChild(paragraph);
        button1.innerHTML = "Abhauen ";
        button2.innerHTML = "Barschägerei anfangen";
        div.appendChild(button1);
        div.appendChild(button2);
        button1.addEventListener("click", end);
        button2.addEventListener("click", end);
    }
    function umdrehen() {
        let div = document.getElementById("form");
        div.innerHTML = "";
        let paragraph = document.createElement("p");
        paragraph.innerHTML = `Der Hexer dreht sich um. Vor ihm steht ein kleiner Zwerg mit einem Stuhl in der Hand.</br>
        Zwerg: „Du Dieb, Warum klaust du mein Bier?!“</br>
        Hexer: „Lass mich in Ruhe“</br>
        *Swish*
        Der Zwerg wirft ein Stuhl auf ihn.
        ` + name + ` fängt ihm auf und zerbricht ihn mit seinem Knie.
        Eine ganze Zwergenbande kommt angerannt und stellen sich hinter den Zwerg.`;
        let button1 = document.createElement("button");
        button1.setAttribute("class", "nes-btn is-primary");
        button1.setAttribute("id", "decision");
        let button2 = document.createElement("button");
        button2.setAttribute("class", "nes-btn is-success");
        div.appendChild(paragraph);
        button1.innerHTML = "Holzbank werfen";
        button2.innerHTML = "Zwerge bleidigen";
        div.appendChild(button1);
        div.appendChild(button2);
        button1.addEventListener("click", holzbank);
        button2.addEventListener("click", beleidigen);
    }
    function holzbank() {
        let div = document.getElementById("form");
        div.innerHTML = "";
        let paragraph = document.createElement("p");
        paragraph.innerHTML = `Der Hexer nimmt schnell eine Holzbank und schleudert diese in die Zwergenmenge.
        Es eskaliert. Die Zwerge greifen den Hexer an.</br>
        *batsch*
        Der Hexer bekommt einen Krug gegen den Kopf und wird bewusstlos.</br></br>
        
        Game Over.
        `;
        let button1 = document.createElement("button");
        button1.setAttribute("class", "nes-btn is-primary");
        button1.setAttribute("id", "decision");
        let button2 = document.createElement("button");
        button2.setAttribute("class", "nes-btn is-success");
        div.appendChild(paragraph);
    }
    function beleidigen() {
        let div = document.getElementById("form");
        div.innerHTML = "";
        let paragraph = document.createElement("p");
        paragraph.innerHTML = name + `: „Warum haben so viele Männer einen Bierbauch?</br>
              Damit der Zwerg wenigstens ein Dach über dem Kopf hat.“</br>
Barbaren am Nebentisch lachen.</br>
Barbar: „Schaut mal an, der Hexer hat Mum.“</br>
Die Zwerge rasten aus und greifen den Hexer an. Die Barbaren kommen dazwischen und verdroschen die Zwerge.</br> 
Barbar: „Wer uns so unterhält, bekommt unsere Unterstützung. Was sagst du? Trink dein Bier mit uns“
`;
        let button1 = document.createElement("button");
        button1.setAttribute("class", "nes-btn is-primary");
        button1.setAttribute("id", "decision");
        let button2 = document.createElement("button");
        button2.setAttribute("class", "nes-btn is-success");
        div.appendChild(paragraph);
        button1.innerHTML = "Angebot annehmen";
        button2.innerHTML = "Ablehnen";
        div.appendChild(button1);
        div.appendChild(button2);
        button1.addEventListener("click", end);
        button2.addEventListener("click", end);
    }
    function end() {
        let div = document.getElementById("form");
        div.innerHTML = "";
        let paragraph = document.createElement("p");
        paragraph.innerHTML = "Hier gehts erstmal nicht mehr weiter";
        div.appendChild(paragraph);
    }
})(Adventures || (Adventures = {}));
//# sourceMappingURL=main.js.map
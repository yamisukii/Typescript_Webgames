"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTTP = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var endabgabe;
(function (endabgabe) {
    let highscores;
    let databaseURL = "mongodb+srv://merdi:<password>@cluster0-mklga.mongodb.net/test?retryWrites=true&w=majority";
    let dbName = "Game";
    let dbCollection = "Highscores";
    connectToDatabase(databaseURL);
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    startServer(port);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        highscores = mongoClient.db(dbName).collection(dbCollection);
        console.log("Database connection ", highscores != undefined);
    }
    function startServer(_port) {
        let server = HTTP.createServer();
        console.log(_port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    function handleRequest(_request, _response) {
        console.log("Was geht");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write("HalliHallo");
        _response.write(port);
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            // for (let key in url.query) {
            //     _response.write(key + ": " + url.query[key] + "<br/>");
            // }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            // storeHighscores(url.query);
        }
        _response.end();
    }
    async function retrieveOrders() {
        // console.log("Asking DB about Orders ", orders.find());
        let cursor = await highscores.find(); //cursor festlegen, mit dem auf ELemente gezeigt werden
        let answer = await cursor.toArray(); // Jeder Eintrag soll in einem Array gespeichert werden
        console.log("DB CursorToArray", answer);
        if (answer != null) {
            return answer;
        }
        else
            return "We encountered technical problems. Please try again later";
    }
})(endabgabe = exports.endabgabe || (exports.endabgabe = {}));
//# sourceMappingURL=server.js.map
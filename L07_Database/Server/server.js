"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTTP = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var L07_Mongo;
(function (L07_Mongo) {
    let orders;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5002;
    let databaseUrl = "mongodb://localhost:27017";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = HTTP.createServer();
        console.log(_port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Charakter").collection("Orders");
        console.log("Database connection", orders != undefined);
    }
    function handleRequest(_request, _response) {
        console.log("GAylord");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            // for (let key in url.query) {
            //     _response.write(key + ": " + url.query[key] + "<br/>");
            // }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            storeOrder(url.query);
        }
        _response.end();
    }
    function storeOrder(_order) {
        orders.insert(_order);
    }
})(L07_Mongo = exports.L07_Mongo || (exports.L07_Mongo = {}));
//# sourceMappingURL=server.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTTP = require("http");
const Url = require("url");
var endabgabe;
(function (endabgabe) {
    let server = HTTP.createServer();
    let port = process.env.PORT;
    if (port == undefined)
        port = 5002;
    console.log(port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("Was geht");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write("HalliHallo");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            // for (let key in url.query) {
            //     _response.write(key + ": " + url.query[key] + "<br/>");
            // }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.end();
    }
})(endabgabe = exports.endabgabe || (exports.endabgabe = {}));
//# sourceMappingURL=server.js.map
import * as HTTP from "http";
import * as Url from "url";

export namespace endabgabe {

    let server: HTTP.Server = HTTP.createServer();


    let port: string | number | undefined = process.env.PORT;
    if (port == undefined)
        port = 5002;
    console.log(port);

    server.listen(port);
    server.addListener("request", handleRequest);

    function handleRequest(_request: HTTP.IncomingMessage, _response: HTTP.ServerResponse): void {
        console.log("Was geht");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write("HalliHallo");
        

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            // for (let key in url.query) {
            //     _response.write(key + ": " + url.query[key] + "<br/>");

            // }
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
        }





        _response.end();
    }
}
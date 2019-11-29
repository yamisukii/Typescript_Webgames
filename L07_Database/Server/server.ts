import * as HTTP from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
export namespace L07_Mongo {
    interface Order {
        [type: string]: string | string[];
    }

    let orders: Mongo.Collection;

    let port: string | number | undefined = process.env.PORT;
    if (port == undefined)
        port = 5002;

    let databaseUrl: string = "mongodb://localhost:27017";

    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {
        let server: HTTP.Server = HTTP.createServer();
        console.log(_port);

        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Charakter").collection("Orders");
        console.log("Database connection", orders != undefined);
    }

    function handleRequest(_request: HTTP.IncomingMessage, _response: HTTP.ServerResponse): void {
        console.log("GAylord");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            // for (let key in url.query) {
            //     _response.write(key + ": " + url.query[key] + "<br/>");

            // }
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

            storeOrder(url.query);
        }





        _response.end();
    }

    function storeOrder(_order: Order): void {
        orders.insert(_order);
    }
}

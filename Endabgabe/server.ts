import * as HTTP from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace endabgabe {
    let highscores: Mongo.Collection;
    let databaseURL: string = "mongodb+srv://merdi:<password>@cluster0-mklga.mongodb.net/test?retryWrites=true&w=majority";

    let dbName: string = "Database";
    let dbCollection: string = "Highscores";

    let port: string | number | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;
    startServer(port);
    connectToDatabase(databaseURL);


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
        highscores = mongoClient.db(dbName).collection(dbCollection);
        console.log("Database connection ", highscores != undefined);
    }



    async function handleRequest(_request: HTTP.IncomingMessage, _response: HTTP.ServerResponse): Promise<void> {
        console.log("Was geht");


        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write("HalliHallo" + "</br>");
        _response.write("Port: " + port + "</br>");


        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            // for (let key in url.query) {
            //     _response.write(key + ": " + url.query[key] + "<br/>");

            // } 
            if (url.query["command"] == "retrieve") {
                let report: any[] | string = await retrieveOrders();
                if (report == "Please try again later")
                    _response.write(report);
                else
                    _response.write(JSON.stringify(report));
            }


            else {
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
                highscores.insert(url.query);
                

            }
        }

        _response.end();
    }



    async function retrieveOrders(): Promise<any[] | string> {
        // console.log("Asking DB about Orders ", orders.find());
        let cursor: Mongo.Cursor = await highscores.find(); //cursor festlegen, mit dem auf ELemente gezeigt werden
        let answer: Promise<any[]> = await cursor.toArray(); // Jeder Eintrag soll in einem Array gespeichert werden
        console.log("DB CursorToArray", answer);
        if (answer != null) {
            return answer;
        }
        else
            return "We encountered technical problems. Please try again later";
    }
}
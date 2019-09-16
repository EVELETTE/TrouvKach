/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import express from "express";
import path from "path";
// import mongodb from "mongodb";

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
const mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://dev:dev@mongo:27017/admin", (err, client) => {
    const db = client.db("trouvkash");
    const terminals = db.collection("terminals");
    const banks = db.collection("banks");

    terminals
        .find({address: "Stationsstraat 57, 9230 Wetteren"})
        .toArray((err1, item1) => {
            // eslint-disable-next-line no-console
            const thatBank = item1[0].bank;

            banks.find({_id: thatBank}).toArray((err2, item2) => {
                // eslint-disable-next-line no-console
                console.log(item2[0].name);
            });
        });

    terminals
        .find({latitude: 51.045} && {longitude: 4.72161})
        .toArray((err1, item1) => {
            // eslint-disable-next-line no-console
            if (err) {
                console.log(err);
            } else {
                const thatBank = item1[0].bank;
                app.get("/terminal", (req, res) => {
                    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
                    res.send(item1[0].address);
                });

                banks.find({_id: thatBank}).toArray((err2, item2) => {
                    // eslint-disable-next-line no-console
                    console.log(item2[0].name);
                    app.get("/banks", (req, res) => {
                        console.log(
                            `ℹ️  (${req.method.toUpperCase()}) ${req.url}`,
                        );
                        res.send(item2[0]);
                    });
                });
            }
        });
});

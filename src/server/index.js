/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import express from "express";
import path from "path";
import mongodb from "mongodb";

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
        .find({address: "Zeelaan 67, 8670 Koksijde"})
        .toArray((err, item1) => {
            // eslint-disable-next-line no-console
            const thatBank = item1[0].bank;

            banks.find({_id: thatBank}).toArray((err, item2) => {
                // eslint-disable-next-line no-console
                console.log(item2[0].name);
            });
        });
});

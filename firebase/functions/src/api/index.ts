import * as express from "express";

const app = express();

app.get("/", (req, res, next) => {
    res.send(`Hello ${req.params.name}`);
});

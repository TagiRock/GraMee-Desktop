import * as express from "express";
import { json } from "body-parser";
import * as helmet from "helmet";
//import school from "./school";

const app = express();
app.use(json);
app.use(helmet);
app.post("/", (req, res) => {
    res.status(200).send("hello");
});


export default app;

import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import classroom from "./classroom";
import account from "./account";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(classroom);
app.use(account);
app.use(helmet());

export default app;

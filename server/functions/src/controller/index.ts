import * as express from "express";
import { json } from "body-parser";
import * as helmet from "helmet";
import classroom from "./classroom";
const app = express();
app.use(json);
app.use(helmet);
app.use(classroom);

export default app;

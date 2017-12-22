import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { config } from "firebase-functions";
import auth from "./authorization";
import app from "./controller";
import * as express from "express";
import { json } from "body-parser";
import * as helmet from "helmet";
import classroom from "./controller/classroom";

const option = functions.config().firebase;
if (option) {
    admin.initializeApp(option);
}
export const firestore = admin.firestore();
//export { auth };

export const api = functions.https.onRequest(app);

const app2 = express();
app2.use(json);
app2.use(helmet);
app2.use(classroom);

export const api2 = functions.https.onRequest(app2);
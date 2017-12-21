import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { config } from "firebase-functions";
import auth from "./authorization";

const option = functions.config().firebase;
if (option) {
    admin.initializeApp(option);
}
export const firestore = admin.firestore();
export { auth };

//export const api = functions.https.onRequest(app);

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { config } from "firebase-functions";
import auth from "./authorization";
import app from "./api";
const option = functions.config().firebase;
if (option) {
    admin.initializeApp(option);
}
export const firestore = admin.firestore();

// functions
export const createuser = auth.createUser;

export const deleteUser = auth.deleteUser;

export const api = functions.https.onRequest(app);

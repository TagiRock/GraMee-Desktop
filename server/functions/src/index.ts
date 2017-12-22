import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { config } from "firebase-functions";
import { Pring } from "pring";
import app from "./controller";
import { UserRecord } from "./database/user";
const option = functions.config().firebase;
if (option) {
    admin.initializeApp(option);
    Pring.initialize(option);
}

export const createUser = functions.auth.user().onCreate(event => {
    const data = event.data;

    const user = new UserRecord();
    user.id = data.uid;
    user.name = data.displayName;
    user.email = data.email;
    return user.save();
});

export const deleteUser = functions.auth.user().onDelete(event => {
    return UserRecord.get(event.data.uid).then(user => user.delete());
});

export const api = functions.https.onRequest(app);

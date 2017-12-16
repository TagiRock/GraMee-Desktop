import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { config } from "firebase-functions";
import { User } from "./model/User";
import { user } from "./database/user";

const option = functions.config().firebase;
if (option) {
    admin.initializeApp(option);
}
export const firestore = admin.firestore();

export const createUser = functions.auth.user().onCreate(event => {
    const newUser: User = {
        id: event.data.uid,
        email: event.data.email,
        name: event.data.displayName,
        create_at: event.timestamp
    };
    console.log(event.data);
    console.log(newUser);
    return firestore.collection("users")
        .doc(event.data.uid).create({ hoge: 111 });
});

export const deleteUser = functions.auth.user().onDelete(event => {
    return user.deleteUser(event.data.uid);
});

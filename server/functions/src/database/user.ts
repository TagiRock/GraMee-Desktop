import * as admin from "firebase-admin";
import { UserRecord } from "../model/UserRecord";
import { firestore } from "../index";
function createUser(uid: string, user: UserRecord) {
    return firestore.collection("users").doc(uid).create(user);
}

function deleteUser(uid: string) {
    return firestore.collection("users").doc(uid).delete();
}

export const userDao = {
    createUser,
    deleteUser
};

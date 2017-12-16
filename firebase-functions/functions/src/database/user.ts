import * as admin from "firebase-admin";
import { User } from "../model/User";
import { firestore } from "../index";
function createUser(uid: string, newUser: User) {
    return firestore.collection("users").doc(uid).create(newUser);
}

function deleteUser(uid: string) {
    return firestore.collection("users").doc(uid).delete();
}

export const user = {
    createUser,
    deleteUser
};

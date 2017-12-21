import * as admin from "firebase-admin";
import { UserModel } from "./model/UserModel";
function createUser(uid: string, user: UserModel) {
    return admin.firestore().collection("users").doc(uid).create(user);
}

function deleteUser(uid: string) {
    return admin.firestore().collection("users").doc(uid).delete();
}

export default {
    createUser,
    deleteUser
};

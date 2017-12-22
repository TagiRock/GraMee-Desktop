import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import userDao from "./database/user";

const createUser = functions.auth.user().onCreate(event => {
    const user = {
        id: event.data.uid,
        email: event.data.email,
        name: event.data.displayName,
    };
    //return userDao.createUser(user.id, user);
});

const deleteUser = functions.auth.user().onDelete(event => {
    return userDao.deleteUser(event.data.uid);
});

export default {
    createUser,
    deleteUser
};

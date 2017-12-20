"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const user_1 = require("./database/user");
const api_1 = require("./api");
const option = functions.config().firebase;
if (option) {
    admin.initializeApp(option);
}
exports.firestore = admin.firestore();
exports.createUser = functions.auth.user().onCreate(event => {
    const user = {
        id: event.data.uid,
        email: event.data.email,
        name: event.data.displayName || "",
        create_at: event.timestamp
    };
    return user_1.userDao.createUser(user.id, user);
});
exports.deleteUser = functions.auth.user().onDelete(event => {
    return user_1.userDao.deleteUser(event.data.uid);
});
exports.httpRequest = functions.https.onRequest(api_1.default);
//# sourceMappingURL=index.js.map
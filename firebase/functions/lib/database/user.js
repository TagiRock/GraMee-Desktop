"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
function createUser(uid, user) {
    return index_1.firestore.collection("users").doc(uid).create(user);
}
function deleteUser(uid) {
    return index_1.firestore.collection("users").doc(uid).delete();
}
exports.userDao = {
    createUser,
    deleteUser
};
//# sourceMappingURL=user.js.map
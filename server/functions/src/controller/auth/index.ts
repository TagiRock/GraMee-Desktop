import { Request } from "express";
import * as admin from "firebase-admin";

export function authentication(req: Request) {
    const authorizationHeader = req.header("Authorization");
    if (authorizationHeader) {
        const token = authorizationHeader.split(" ");
        return admin.auth().verifyIdToken(token[1]);
    } else {
        return Promise.reject(new Error("Authorization Require"));
    }
}

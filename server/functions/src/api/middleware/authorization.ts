import * as admin from "firebase-admin";
import * as express from "express";

function authorization(req: express.Request, res: express.Response, next: express.NextFunction) {
    const authorizationHeader = req.header("Authorization");
    if (authorizationHeader) {
        const token = authorizationHeader.split(" ");
        admin.auth().verifyIdToken(token[1])
            .then(decodeedToken => {
                next();
            }).catch(error => {
                res.sendStatus(401);
            });
    } else {
        res.sendStatus(401);
    }
}

export default authorization;

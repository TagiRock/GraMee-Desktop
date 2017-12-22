import * as express from "express";
import { authentication } from "./auth";
import { UserRecord } from "../database/user";
import { AccountModel } from "../model/account";
const router = express.Router();

router.get("/account", async (req, res) => {
    try {
        const decodeToken = await authentication(req);
        const record = await UserRecord.get(decodeToken.uid) as UserRecord;
        const account: AccountModel = {
            id: record.id,
            name: record.name,
            discription: record.discription,
            rateing: record.rateing,
            profileImageUrl: record.profileImageUrl,
            possessionPoint: record.possessionPoint
        };
        res.status(200).send(account);
    } catch (error) {
        res.status(401).send("Authentication Require");
    }

});
/*router.patch("/account/edit", async (req, res) => {
    try {
        const decodeToken = await authentication(req);
        const user = await UserRecord.get(decodeToken.uid);
    } catch (error) {
        res.status(401).send("Authentication Require");
    }
});*/



export default router;

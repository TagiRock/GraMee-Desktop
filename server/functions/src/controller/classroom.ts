import * as express from "express";
import { validate } from "./validator/classroom";
import { read } from "fs";
const router = express.Router();

router.post("/classroom", (req, res, next) => {
    console.log(req.body);
    const valid = validate(req.body);
    if (valid) {
        //firestore.collection("classroom").add(req.body);
        res.status(204).send();
    } else {
        res.status(400).send("invalid parameter");
    }
});
export default router;

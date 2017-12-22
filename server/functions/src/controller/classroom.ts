import * as express from "express";
import { validate } from "./validator/classroom";
import { firestore } from "../index";
import { read } from "fs";
const router = express.Router();

router.post("/classroom", (req, res, next) => {
    const valid = validate(req.body);
    if (valid) {
        firestore.collection("classroom").add(req.body);
        res.status(204);
    } else {
        res.status(400).send("invalid json input");
    }
});
router.get("/", (req, res, next) => {
    res.status(200).send("aaaaaaa");
});

export default router;

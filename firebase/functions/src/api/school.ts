import * as express from "express";
import { firestore } from "../index";
// api/v1/schools?=genre=[genretype]&lavel=[levelType]
function schools(request: express.Request, response: express.Response, next: express.NextFunction) {
    //const genreType = String(request.params.genre || "");
    //const levelType = String()

    response.status(400).send("invalid prarms");
}

function createSchool(request: express.Request, response: express.Response, next: express.NextFunction) {

    response.status(400).send("invalid prarms");
}

function deleteSchool(request: express.Request, response: express.Response, next: express.NextFunction) {
    
    response.status(400).send("invalid prarms");
}


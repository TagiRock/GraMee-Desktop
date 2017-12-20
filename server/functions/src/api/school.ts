import * as express from "express";
import { firestore } from "../index";
// api/v1/schools?=genre=[genretype]&lavel=[levelType]
function classrooms(request: express.Request, response: express.Response, next: express.NextFunction) {
    //const genreType = String(request.params.genre || "");
    //const levelType = String()

    response.status(400).send("invalid prarms");
}

function createClassroom(request: express.Request, response: express.Response, next: express.NextFunction) {
    //db call

    response.status(200).send("{}");
}

function deleteClassroom(request: express.Request, response: express.Response, next: express.NextFunction) {

    response.status(400).send("invalid prarms");
}

export ClassroomApi = {
    classrooms,
    createClassroom,
    deleteClassroom
};

import * as express from "express";
import {ClassroomApi} from "./school"

const app = express();

app.get("/classroom", ClassroomApi.classrooms);
app.post("/classroom", ClassroomApi.createClassroom);
app.delete("/classroom", ClassroomApi.deleteClassroom);

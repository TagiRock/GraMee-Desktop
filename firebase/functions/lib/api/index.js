"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const school_1 = require("./school");
const app = express();
app.get("/classroom", school_1.ClassroomApi.classrooms);
app.post("/classroom", school_1.ClassroomApi.createClassroom);
app.delete("/classroom", school_1.ClassroomApi.deleteClassroom);
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function classrooms(request, response, next) {
    response.status(400).send("invalid prarms");
}
function createClassroom(request, response, next) {
    response.status(200).send("{}");
}
function deleteClassroom(request, response, next) {
    response.status(400).send("invalid prarms");
}
ClassroomApi = {
    classrooms,
    createClassroom,
    deleteClassroom
};
//# sourceMappingURL=school.js.map
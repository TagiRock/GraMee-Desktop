import * as admin from "firebase-admin";
import { ClassRoomModel } from "./model/ClassRoomModel";

function createClassRoom(classroom: ClassRoomModel) {
    return admin.firestore().doc("classroom").create(classroom);
}

export default {
    createClassRoom
};

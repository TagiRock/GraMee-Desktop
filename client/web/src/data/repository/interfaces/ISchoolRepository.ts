import { ClassroomModel } from "src/domain/model/ClassRoomModel";
import { Observable } from "rxjs/Observable";

export interface ISchoolRepository {
    createClassRoom(model: ClassroomModel): Observable<void>;
}

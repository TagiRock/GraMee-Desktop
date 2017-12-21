import { Classroom } from "src/domain/model/ClassRoom";
import { Observable } from "rxjs/Observable";
export interface ISchoolRepository {
    createClassRoom(model: Classroom): Observable<void>;
}

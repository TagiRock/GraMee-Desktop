import { ISchoolRepository } from "./interfaces/ISchoolRepository";
import { ClassroomModel } from "domain/model/ClassroomModel";
import { ClassroomRecord } from "../entity/ClassRoomRecord";
import { Observable, Observer } from "rxjs";
import { FirebaseFirestore } from "@firebase/firestore-types";
import { injectable, inject } from "inversify";
import { Identifer } from "src/config/identifer.config";
import firestore from "../firestore";
@injectable()
export class SchoolRepository implements ISchoolRepository {
    private readonly firestore: FirebaseFirestore = firestore();

    public createClassRoom(model: ClassroomModel): Observable<void> {
        const voidValue = (() => { /**/ })(); // generate void value
        const classroom: ClassroomRecord = {
            name: model.name,
            description: model.description,
            level: model.level,
            price: model.price,
            genre: model.genre
        };
        return Observable.fromPromise(this.firestore.collection("classroom").add(classroom))
            .map(value => voidValue);
    }
}

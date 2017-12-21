import { ISchoolRepository } from "./interfaces/ISchoolRepository";
import { Classroom } from "domain/model/Classroom";
import { ClassroomRecord } from "../entity/ClassRoomRecord";
import { Observable, Observer } from "rxjs";
import { FirebaseFirestore } from "@firebase/firestore-types";
export class SchoolRepository implements ISchoolRepository {
    private readonly firestore: FirebaseFirestore;
    constructor(firestore: FirebaseFirestore) {
        this.firestore = firestore;
    }

    public createClassRoom(model: Classroom): Observable<void> {
        const voidValue = (() => { /**/ })(); // generate void value
        const classroom: ClassroomRecord = {
            name: model.name,
            description: model.description,
            level: model.level,
            price: model.price,
            genre: model.genre
        };
        return Observable.create((emitter: Observer<void>) => {
            this.firestore.collection("classroom").add({})
                .then(ref => emitter.next(voidValue))
                .catch(error => emitter.error(error));
        });
    }
}

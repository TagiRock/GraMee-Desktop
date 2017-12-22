import { ClassroomRecord } from "./classroom";
import { Pring, property } from "pring";

export class UserRecord extends Pring.Base {
    @property public id: string;
    @property public email: string;
    @property public name?: string;
    @property public discription?: string;
    @property public profileImageUrl?: string;
    @property public rateing: number;
    @property public possessionPoint: number;
    @property public teacherHistory = new Pring.ReferenceCollection<ClassroomRecord>(this);
    @property public studentHistory = new Pring.ReferenceCollection<ClassroomRecord>(this);
}

import { Pring, property } from "pring";
export class ClassroomRecord extends Pring.Base {
    @property public name: string;
    @property public description: string;
    @property public language: string[];
    @property public price: number;
    @property public pictureUrl: string;
}

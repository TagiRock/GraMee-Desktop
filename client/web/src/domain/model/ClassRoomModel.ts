import {UserModel} from "./UserModel";
export class ClassroomModel {
    public user: UserModel;
    public id: number;
    public name: string;
    public description: string;
    public genre: string;
    public language: string;
    public level: string;
    public price: number;
    public pictureUrl: string;
    public rating: number;
}

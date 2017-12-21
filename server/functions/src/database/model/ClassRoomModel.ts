import { UserModel } from "./UserModel";

export interface ClassRoomModel {
    id: string;
    name: string;
    description: string;
    language: string;
    level: string;
    price: string;
    picture_url: string;
    user: UserModel;
}

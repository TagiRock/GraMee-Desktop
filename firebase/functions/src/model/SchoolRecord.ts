import { UserRecord } from "./UserRecord";

export interface SchoolRecord {
    UserRecord: object;
    id: string;
    name: string;
    about: string;
    language: string;
    level: string;
    price: string;
    picture_url: string;
    rating: string;
    create_at?: string;
}
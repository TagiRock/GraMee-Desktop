import { UserRecord } from "./UserRecord";

export interface ClassRecord {
    user: UserRecord;
    id: string;
    name: string;
    description: string;
    language: string;
    level: string;
    price: string;
    picture_url: string;
    rating: string;
    create_at?: string;
}

import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";
import { Genre } from "domain/model/Genre";
import { Classroom } from "domain/model/ClassRoom";

export interface SchoolState {
    level: LevelType;
    genre: GenreType;
    // classModel?: ClassRoom;
}
export interface GenreState {
    type: GenreType;
    level: LevelType;
    active: boolean;
}

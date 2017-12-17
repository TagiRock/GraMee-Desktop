import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";
import { Genre } from "domain/model/Genre";
import { ClassRoomModel } from "domain/model/ClassRoomModel";

export interface SchoolState {
    level: LevelType;
    genre: GenreType;
    // classModel?: ClassRoomModel;
}

export interface GenreState {
    type: GenreType;
    level: LevelType;
    classRoom: ClassRoomModel;
}

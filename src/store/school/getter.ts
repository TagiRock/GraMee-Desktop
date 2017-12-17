import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";
import { ClassRoomModel } from "domain/model/ClassRoomModel";
export interface SchoolGetters {
    level: LevelType;
    genre: GenreType;
    // classRoom: ClassRoomModel;
}

import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";
import { ClassroomModel } from "domain/model/ClassRoomModel";
export interface SchoolGetters {
    level: LevelType;
    genre: GenreType;
    // classRoom: ClassroomModel;
}

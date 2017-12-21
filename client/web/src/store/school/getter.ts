import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";
import { Classroom } from "domain/model/ClassRoom";
export interface SchoolGetters {
    level: LevelType;
    genre: GenreType;
    // classRoom: Classroom;
}

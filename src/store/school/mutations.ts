import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";
import { ClassroomModel } from "domain/model/ClassRoomModel";
export interface SchoolMutations {
    changeGenre: {
        genre: GenreType
    };
    changeLevel: {
        level: LevelType
    };
    // createClass: {
    // };
}

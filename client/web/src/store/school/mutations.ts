import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";
import { Classroom } from "domain/model/ClassRoom";
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

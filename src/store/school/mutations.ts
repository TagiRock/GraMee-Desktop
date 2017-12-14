import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";

export interface SchoolMutations {
    changeGenre: {
        genre: GenreType
    };
    changeLevel: {
        level: LevelType
    };
}

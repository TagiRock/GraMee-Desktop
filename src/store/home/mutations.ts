import LevelType from "domain/model/LevelType";
import GenreType from "domain/model/GenreType";

export interface HomeMutations {
    changeGenre: {
        genre: GenreType
    };
    changeLevel: {
        level: LevelType
    };
}

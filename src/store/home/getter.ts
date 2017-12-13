import LevelType from "domain/model/LevelType";
import GenreType from "domain/model/GenreType";

export interface HomeGetters {
    level: LevelType;
    genre: GenreType;
}

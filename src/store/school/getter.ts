import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";

export interface SchoolGetters {
    level: LevelType;
    genre: GenreType;
}

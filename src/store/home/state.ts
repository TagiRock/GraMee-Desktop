import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";
import { Genre } from "domain/model/Genre";

export interface HomeState {
    level: LevelType;
    genre: GenreType;
}

export interface GenreState {
    type: GenreType;
    active: boolean;
    genre: Genre;
}

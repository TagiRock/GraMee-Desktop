import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";
import { Genre } from "domain/model/Genre";

export interface SchoolState {
    level: LevelType;
    genre: GenreType;
}

export interface GenreState {
    type: GenreType;
    level: LevelType;
}

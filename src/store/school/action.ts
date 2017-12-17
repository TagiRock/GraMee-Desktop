import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";

export interface SchoolActions {
    changeGenre: {
        genre: GenreType
    };
    changeLevel: {
        level: LevelType
    };
    // createClassRoom: {
    //     name: string;
    //     description: string;
    //     genre: string;
    //     language: string;
    //     level: string;
    //     price: string;
    //     pictureUrl: string;
    // };
}

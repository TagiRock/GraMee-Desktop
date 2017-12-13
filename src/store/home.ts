import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";
import { HomeActions } from "./home/action";
import { HomeState } from "./home/state";
import { HomeMutations } from "./home/mutations";
import { HomeGetters } from "./home/getter";
import Vuex, { createNamespacedHelpers } from "vuex";
import { DefineGetters, DefineMutations, DefineActions } from "vuex-type-helper";

const state: HomeState = {
    genre: GenreType.Web,
    level: LevelType.Easy
};

/*tslint:disable　no-shadowed-variable　arrow-parens*/
const getters: DefineGetters<HomeGetters, HomeState> = {
    genre: state => state.genre,
    level: state => state.level
};


const mutations: DefineMutations<HomeMutations, HomeState> = {
    changeGenre(state, { genre }) {
        state.genre = genre;
    },
    changeLevel(state, { level }) {
        state.level = level;
    }
};

const actions: DefineActions<HomeActions, HomeState, HomeMutations, HomeGetters> = {
    changeGenre({ commit }, payload) {
        commit("changeGenre", payload);
    },
    changeLevel({ commit }, payload) {
        commit("changeLevel", payload);
    }
};

export const {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
} = createNamespacedHelpers<HomeState, HomeGetters, HomeMutations, HomeActions>("Home");

export const home = {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
};

export const Actions = {
    changeGenre: "home/changeGenre",
    changeLevel: "home/changeLevel"
};

export const Getters = {
   genre: "home/genre",
   level: "home/level"
};

import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";
import { SchoolActions } from "./school/action";
import { SchoolState } from "./school/state";
import { SchoolMutations } from "./school/mutations";
import { SchoolGetters } from "./school/getter";
import Vuex, { createNamespacedHelpers } from "vuex";
import { DefineGetters, DefineMutations, DefineActions } from "vuex-type-helper";

const state: SchoolState = {
    genre: GenreType.Web,
    level: LevelType.Easy
};

/*tslint:disable　no-shadowed-variable　arrow-parens*/
const getters: DefineGetters<SchoolGetters, SchoolState> = {
    genre: state => state.genre,
    level: state => state.level
};

const mutations: DefineMutations<SchoolMutations, SchoolState> = {
    changeGenre(state, { genre }) {
        state.genre = genre;
    },
    changeLevel(state, { level }) {
        state.level = level;
    }
};

const actions: DefineActions<SchoolActions, SchoolState, SchoolMutations, SchoolGetters> = {
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
} = createNamespacedHelpers<SchoolState, SchoolGetters, SchoolMutations, SchoolActions>("school");

export const school = {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
};

export const Actions = {
    changeGenre: "school/changeGenre",
    changeLevel: "school/changeLevel"
};

export const Getters = {
   genre: "school/genre",
   level: "school/level"
};

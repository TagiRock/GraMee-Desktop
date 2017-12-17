import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";
import { SchoolActions } from "./school/action";
import { SchoolState } from "./school/state";
import { SchoolMutations } from "./school/mutations";
import { SchoolGetters } from "./school/getter";
import Vuex, { createNamespacedHelpers } from "vuex";
import { DefineGetters, DefineMutations, DefineActions } from "vuex-type-helper";

const state: SchoolState = {
    genre: "web",
    level: "Easy"
};

/*tslint:disable　no-shadowed-variable　arrow-parens*/
const getters: DefineGetters<SchoolGetters, SchoolState> = {
    genre: state => state.genre,
    level: state => state.level,
    // classRoom: state => state.classRoom
};

const mutations: DefineMutations<SchoolMutations, SchoolState> = {
    changeGenre(state, { genre }) {
        state.genre = genre;
    },
    changeLevel(state, { level }) {
        state.level = level;
    },
    // createClassRoom() {
    //     //
    // }
};

const actions: DefineActions<SchoolActions, SchoolState, SchoolMutations, SchoolGetters> = {
    changeGenre({ commit }, payload) {
        commit("changeGenre", payload);
    },
    changeLevel({ commit }, payload) {
        commit("changeLevel", payload);
    }
    // createClassRoom({ commit }, payload) {
    //     commit("createClass", payload);
    // }
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
    changeLevel: "school/changeLevel",
    createClassRoom: "school/createClassRoom"
};

export const Getters = {
   genre: "school/genre",
   level: "school/level",
   classRoom: "school/classRoom"
};

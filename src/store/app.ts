import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";
import { SidebarItemType } from "domain/model/SidebarItemType";
import { AppActions } from "./app/action";
import { AppState, SidebarState } from "./app/state";
import { AppMutations } from "./app/mutations";
import { AppGetters } from "./app/getter";

import Vuex, { createNamespacedHelpers } from "vuex";
import { DefineGetters, DefineMutations, DefineActions } from "vuex-type-helper";
const state: AppState = {
    sidebars: [
        { type: SidebarItemType.School, iconName: "school", active: true },
        { type: SidebarItemType.Home, iconName: "home", active: false },
        { type: SidebarItemType.Message, iconName: "textsms", active: false },
        { type: SidebarItemType.Favorite, iconName: "favorite", active: false },
        { type: SidebarItemType.Setting, iconName: "settings", active: false }
    ]
};

/*tslint:disable　no-shadowed-variable　arrow-parens*/
const getters: DefineGetters<AppGetters, AppState> = {
    sidebars: state => state.sidebars
};

const mutations: DefineMutations<AppMutations, AppState> = {
    selectSidebarItem(state, { item }) {
        for (const item of state.sidebars) {
            item.active = false;
        }
        item.active = true;
    }
};

const actions: DefineActions<AppActions, AppState, AppMutations, AppGetters> = {
    selectSidebarItem({ commit }, payload) {
        commit("selectSidebarItem", payload);
    }
};

export const {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
} = createNamespacedHelpers<AppState, AppGetters, AppMutations, AppActions>("App");

export const app = {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
};

export const Getters = {
    sidebars: "app/sidebars"
};
export const Actions = {
    selectSidebarItem: "app/selectSidebarItem"
};

import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";
import { AppActions } from "./app/action";
import { AppState } from "./app/state";
import { AppMutations } from "./app/mutations";
import { AppGetters } from "./app/getter";
import { AuthUseCase } from "domain/usecase/AuthUseCase";
import Vuex, { createNamespacedHelpers } from "vuex";
import { DefineGetters, DefineMutations, DefineActions } from "vuex-type-helper";
const state: AppState = {
    
};

/*tslint:disable　no-shadowed-variable　arrow-parens*/
const getters: DefineGetters<AppGetters, AppState> = {
    account: state => state.account
};

const mutations: DefineMutations<AppMutations, AppState> = {
    signinEmail(state, { account }) {
        state.account = account;
    },
    loginEmail(state, { account }) {
        state.account = account;
    }
};

const actions: DefineActions<AppActions, AppState, AppMutations, AppGetters> = {
    signinEmail({ commit }, payload) {
        const usecase = new AuthUseCase();
        console.log(payload);
        usecase.signinEmail(payload.email, payload.password)
            .subscribe(
            (account) => {
                commit("signinEmail", { account });
            },
            (error) => {
                console.log(error);
            });
    },
    loginEmail({ commit }, payload) {
        const usecase = new AuthUseCase();
        console.log(payload);
        usecase.loginEmail(payload.email, payload.password)
            .subscribe(
            (account) => {
                commit("loginEmail", { account });
            },
            (error) => {
                console.log(error);
            });
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
    user: "app/account"
};
export const Actions = {
    signinEmail: "app/signinEmail",
    loginEmail: "app/loginEmail"
};

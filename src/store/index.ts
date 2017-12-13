import Vuex from "vuex";
import { home } from "./home";
import { app } from "./app";
import Vue from "vue";

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        home,
        app
    },
    strict: true
});

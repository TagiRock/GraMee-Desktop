import Vuex from "vuex";
import { school } from "./school";
import { app } from "./app";
import Vue from "vue";

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        school,
        app
    },
    strict: true
});

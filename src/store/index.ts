import Vuex from "vuex";
import {Home} from "./home";
import { debug } from "util";

export default new Vuex.Store({
    modules: {
       Home
    },
    strict: true
});

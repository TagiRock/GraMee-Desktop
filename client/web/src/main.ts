import firebase from "firebase";
import { firebaseConfig } from "./config/key"; // initialize first!!!
firebase.initializeApp(firebaseConfig);

import "./main.scss";
import "vue-material-design-icons-plugin";
import { container } from "./config/inversify.config";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import Vuex from "vuex";
import vSelect from "vue-select";
import App from "components/App.vue";
import store from "./store";
import router from "./router";
import { FirebaseFirestore } from "@firebase/firestore-types";

Vue.component("v-select", vSelect);
/* tslint:disable:no-unused-expression*/
new Vue({
  el: "#app",
  template: "<App/>",
  store,
  router,
  components: { App }
});

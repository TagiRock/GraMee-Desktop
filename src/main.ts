import "./main.scss";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import Vuex from "vuex";
import App from "components/App.vue";
import "vue-material-design-icons-plugin";
import store from "./store";
import router from "./router";

/* tslint:disable:no-unused-expression*/
new Vue({
  el: "#app",
  template: "<App/>",
  store,
  router,
  components: { App }
});

import "./main.scss";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import Vuex from "vuex";
import App from "components/App.vue";
import Element from "element-ui";
import "vue-material-design-icons-plugin";
import locale from "element-ui/lib/locale/lang/ja";
import store from "./store";
import router from "./router";
// import testVuex from "./testVuex.js";
Vue.use(Element, { locale });

/* tslint:disable:no-unused-expression*/
new Vue({
  el: "#app",
  template: "<App/>",
  // testVuex,
  store,
  router,
  components: {App}
});

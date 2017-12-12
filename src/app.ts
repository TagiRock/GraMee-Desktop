import "./app.scss";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import Vuex from "vuex";
import App from "./ui/App.vue";
// import components
import Favorite from "./ui/favorite/Favorite.vue";
import Message from "./ui/message/Message.vue";
import School from "./ui/school/School.vue";
import Setting from "./ui/setting/Setting.vue";
import Home from "./ui/home/Home.vue";

const routes = [
  { path: "school", component: School },
  { path: "message", component: Message },
  { path: "favorite", component: Favorite },
  { path: "home", component: Home },
  { path: "setting", component: Setting }
];
const router = new VueRouter({
  base: __dirname,
  routes: routes
});
Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VueRouter);
/* tslint:disable:no-unused-expression*/
new Vue({
  router: router,
  el: "#app",
  template: "<App/>",
  components: { App }
});

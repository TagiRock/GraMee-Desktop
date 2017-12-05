import "./app.scss";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
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
Vue.use(VueRouter);
Vue.use(Vuetify, {
  theme: {
    primary: "#3f51b5",
    secondary: "#b0bec5",
    accent: "#8c9eff",
    error: "#b71c1c"
  }
});
/* tslint:disable:no-unused-expression*/
new Vue({
  router: router,
  el: "#app",
  template: "<App/>",
  components: { App }
});

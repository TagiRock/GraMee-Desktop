import Vue from "vue";
import VueRouter from "vue-router";
import Message from "components/message/Message.vue";
import School from "components/school/School.vue";
import Setting from "components/setting/Setting.vue";
import Home from "components/home/Home.vue";
import Login from "components/login/Login.vue";
import store from "../store";
import { Getters as AppGetters } from "../store/app";
Vue.use(VueRouter);

const routes = [
  { path: "/", name: "school", component: School },
  { path: "/message", name: "message", component: Message },
  { path: "/home", name: "home", component: Home },
  { path: "/setting", name: "setting", component: Setting },
  { path: "/login", name: "login", component: Login }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const account = store.getters[AppGetters.user];
    next({ path: "/login", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});
export default router;

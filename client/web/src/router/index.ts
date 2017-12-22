import Vue from "vue";
import VueRouter from "vue-router";
import Message from "components/message/Message.vue";
import School from "components/school/School.vue";
import Setting from "components/setting/Setting.vue";
import Home from "components/home/Home.vue";
import Login from "components/login/Login.vue";
import Signup from "components/signup/Signup.vue";
import Main from "components/main/Main.vue";
import store from "../store/index";
import { Getters as AppGetters } from "../store/app";
import { RouteConfig } from "vue-router/types/router";
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/", component: Main, children: [
      { path: "", component: School },
      { path: "message", component: Message, },
      { path: "home", component: Home },
      { path: "setting", component: Setting },
    ]
  },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

router.beforeEach((to, from, next) => {
  const account = store.getters[AppGetters.user];
  if (to.matched.some(record => record.meta.requiresAuth) && !account) {
    next({ path: "/login", query: {} });
  } else if ((to.path === "/login" || to.path === "/signin") && account) {
    if (account) {
      next({ path: "/", query: {} });
    }
  } else {
    next();
  }
});
export default router;

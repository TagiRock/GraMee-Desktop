import Vue from "vue";
import VueRouter from "vue-router";
import Message from "components/message/Message.vue";
import School from "components/school/School.vue";
import Setting from "components/setting/Setting.vue";
import Home from "components/home/Home.vue";
import Login from "components/login/Login.vue";

Vue.use(VueRouter);
const routes = [
  { path: "/", component: School },
  { path: "message", component: Message },
  { path: "home", component: Home },
  { path: "setting", component: Setting },
  { path: "login", component: Login }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

router.beforeEach((to, from, next) => {
  /*if(to.matched.some(record => record.meta.requiresAuth)) {

  }*/
});
export default router;

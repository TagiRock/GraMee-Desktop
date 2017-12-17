import "./main.scss";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import Vuex from "vuex";
//import App from "components/App.vue";
import "vue-material-design-icons-plugin";
import store from "./store";
import router from "./router";
import vSelect from "vue-select";
import firebase from "firebase";
Vue.component("v-select", vSelect);

const config = {
  apiKey: "AIzaSyC8ZvlolrXFQMT6erOenz5w5o1en7JzW_8",
  authDomain: "gramee-80657.firebaseapp.com",
  databaseURL: "https://gramee-80657.firebaseio.com",
  projectId: "gramee-80657",
  storageBucket: "gramee-80657.appspot.com",
  messagingSenderId: "1039831704009"
};
firebase.initializeApp(config);

/* tslint:disable:no-unused-expression*/
/*new Vue({
  el: "#app",
  template: "<App/>",
  store,
  router,
  components: { App }
});*/

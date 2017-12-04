import "./app.scss";
import Vue from 'vue';
import App from './ui/App.vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify, {
    theme: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
    }
});
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App: App }
});
//# sourceMappingURL=app.js.map
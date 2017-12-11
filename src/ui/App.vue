<template lang="pug">
v-app
  v-layout(fill-height)
    vue-sidebar
    div#contents-main
      vue-header
      v-content
        vue-home
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueHeader from "./common/Header.vue";
import VueSidebar from "./common/Sidebar.vue";
import VueHome from "./home/Home.vue";
import Peer from "skyway-js";

@Component({
  components: {
    VueHeader,
    VueSidebar,
    VueHome
  }
})
export default class App extends Vue {}
</script>

<style lang="css" scoped>
#contents-main{
  width: 100%;
}
</style>

<template lang="pug">
el-container.content
  el-aside(width="100px")
    vue-sidebar
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

<style lang="css">
html{
  height:100%;
}
body{
  height:100%;
  margin: 0;
}
section {
  height: 100%;
}
</style>

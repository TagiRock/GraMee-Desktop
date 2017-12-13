<template lang="pug">
el-container.content
  el-aside(width="110px")
    vue-sidebar
  el-container
    el-header
      vue-header  
    el-main
      router-view
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
section {
  min-width: 500px;
  height: 100%;
}
.el-header {
  padding: 0;
}
.el-main {
  padding: 0;
}
</style>

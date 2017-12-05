<template lang="html">
  <div id="content">
    <vue-sidebar></vue-sidebar>
  </div>

  <!--<vue-header></vue-header>-->
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueHeader from "./common/Header.vue";
import VueSidebar from "./common/Sidebar.vue";
@Component({
  components: {
    VueHeader,
    VueSidebar
  }
})
export default class App extends Vue {}
</script>

<style lang="css" scoped>
#content {
  display: flex;
  height: 100%;
}
</style>

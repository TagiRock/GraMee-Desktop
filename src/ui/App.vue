<template lang="pug">
div.container
  vue-header  
  //vue-sidebar
  router-view
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
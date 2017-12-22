<template lang="pug">
div#content
  v-sidebar
  div#content-right
    v-header
    router-view
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VHeader from "./Header.vue";
import VSidebar from "./Sidebar.vue";

@Component({
  components: {
    VHeader,
    VSidebar
  }
})
export default class App extends Vue {}
</script>

<style lang="css" scoped>
#content {
  height: 100%;
  display: flex;
}

#content-right {
  overflow: scroll;
  width: 100%;
  height: 100%;
}
</style>

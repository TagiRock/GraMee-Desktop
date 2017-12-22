<template lang="pug">
div#app
  router-view
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VMain from "./main/Main.vue";

@Component({
  components: {
    VMain
  }
})
export default class App extends Vue {}
</script>

<style lang="css" scoped>


body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
}
</style>

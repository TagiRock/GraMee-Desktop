<template lang="pug">
div#header
  img#logo(src="assets/images/logo.png")
  md-icon#search(medium) search       
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Header extends Vue {
  public badgeCount = 0;
  public badgeVisibility = this.badgeCount !== 0;
}
</script>

<style lang="scss" scoped>
#header {
  background: #f1f1f1;
  padding: 10px 30px;
  position: relative;
  text-align: center;
  vertical-align: middle;
}
#logo {
  width: 150px;
}
#search {
  position: absolute;
  right: 5%;
  top: 25%;
}
</style>

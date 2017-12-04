<template lang="pug">
aside
  nav
    ul.collection
      li
       router-link(to="/" exact) School
      li
        router-link(to="/home") Home
      li
        router-link(to="/message") Meassage
      li
        router-link(to="/favorite") Favorite  
      li
        router-link(to="/setting") Setting   
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Header extends Vue {
  public badgeCount = 0;
}
</script>

<style lang="scss" scoped>

</style>


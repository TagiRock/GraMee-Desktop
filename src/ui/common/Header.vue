<template lang="html">
  <header>
        <img src="img/logo.svg" alt="" class="logo">
        <ul id="header_links" class="right hide-on-med-and-down">
          <li id="alart"><a href=""><i class="material-icons"><i class="material-icons">notifications</i></i><span class="new badge">1</span></a></li>
          <li id="search"><a href=""><i class="material-icons"><i class="material-icons">search</i></i></a></li>
        </ul>
  </header>
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
header {
  background: #F1F1F1;
  padding: 10px 30px;
  position: relative;
  text-align: center;
}
ul{
  margin: 0;
  display: flex;
  justify-content: space-between;
  list-style:none;
  position: fixed;
}
ul > ui {
  margin-right: 10px;
   padding-left: 10px;
}
</style>

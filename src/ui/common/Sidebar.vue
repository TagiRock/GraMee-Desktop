<template lang="pug">
aside
  nav
    ul.collection
      li
       router-link.collection-item(to="" exact) School
      li
        router-link.collection-item(to="home") Home
      li
        router-link.collection-item(to="message") Meassage
      li
        router-link.collection-item(to="favorite") Favorite  
      li
        router-link.collection-item(to="setting") Setting   
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
aside {
  height: 100%;
  background: #272C32;
  padding: 20px 0 0;
}
nav {
  background: #272C32;
  box-shadow:  none;
  height: auto;
}
nav ul li {
  float: none;
}
.collection {
  border: none;
  margin: 0;
}
.collection .prof {
  margin: 0 0 20px;
}
.collection .collection-item {
  background: none;
  border: none;
}
.collection a.collection-item {
  color: #575A61;
  font-size: 13px;
  padding: 10px 12px;
  text-align: center;
}
.collection a.collection-item i {
  font-size: 25px;
  margin-bottom: -15px;
}
/* 選択中 */
.collection a.collection-item.active {
  background: none;
  color: #fff;
  position: relative;
}
.collection a.collection-item.active i {
  color: #F7745D;
}
.collection a.collection-item.active::before{
  background: #F7745D;
  border-radius: 20px;
  content: "";
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 2px;
}
.collection a.collection-item:not(.active):hover {
  background: none;
}
</style>


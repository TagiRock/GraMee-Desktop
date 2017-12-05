<template lang="html">
  <aside>
    <nav>
      <ul class="collection">
        <li><img src="img/account/account01.png" alt=""></li>
        <li><v-icon>school</v-icon>Schoole</li>
        <li><v-icon>home</v-icon>Home</li>
        <li><v-icon>textsms</v-icon>Message</li>
        <li><v-icon>favorite</v-icon>Favorite</li>
        <li><v-icon>settings</v-icon>Setting</li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Header extends Vue {
  public badgeCount = 0;
}
</script>

<style lang="css" scoped>
/* サイドナビ */

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
ul {
  list-style: none;
}
.collection {
  border: none;
  margin: 0;
}
.collection .prof {
  margin: 0 0 20px;
}
.collection .prof img {
  width: 80%;
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
/* -- 選択中 -- */
/* -- サイドナビ -- */
</style>

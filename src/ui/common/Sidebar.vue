<template lang="html">
  <aside>
    <nav>
      <ul class="collection">
        <li class="prof"><img src="img/account/account01.png" alt="プロフィール画像"></li>
        <li class="active"><v-icon>school</v-icon>Schoole</li>
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
.collection {
  border: none;
  margin: 0;
}
.collection li {
  color: #575A61;
  font-size: 13px;
  padding: 15px 12px;
  text-align: center;
}
.collection .prof {
  margin: 0 0 20px;
}
.collection li img {
  width: 80%;
}
.collection li i {
  display: block;
}
/* 選択中 */
.collection .active {
  background: none;
  color: #fff;
  position: relative;
}
.collection .active i {
  color: #F7745D;
}
.collection .active::before{
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
/* -- 選択中 -- */
/* -- サイドナビ -- */
</style>

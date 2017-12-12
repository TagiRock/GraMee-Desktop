<template lang="pug">
div#genre-nav
  ul
    li.active(v-for="genre in genres") {{genre}}
  el-dropdown(size="medium")
    el-button Level選択
      md-icon(small) keyboard_arrow_down
    el-dropdown-menu(slot="dropdown")
      el-dropdown-item(v-for="level in levels") {{level}}
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import LevelType from "./domain/LevelType";
import GenreType from "./domain/GenreType";
@Component
export default class GenreNavigation extends Vue {
  public levels = LevelType;
  public genres = GenreType;
}
</script>

<style lang="scss" scoped>
#genre-nav {
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

ul{
  display: flex;
  margin-right: 30px;
  margin-top: 10px;
}

ul li {
  color: #575a61;
  display: block;
  margin: 0 10px;
  font-size: 14px;
  padding: 5px 16px;
}
ul .active {
  background: #f7745d;
  border-radius: 6px;
  color: #fff;
}
</style>

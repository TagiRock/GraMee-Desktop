<template lang="pug">
div#genre-nav
  ul
    li.active(v-for="genre in genres") {{genre}}
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { GenreType } from "domain/model/GenreType";
import { LevelType } from "domain/model/LevelType";
@Component
export default class GenreNavigation extends Vue {}
</script>

<style lang="scss" scoped>
#genre-nav {
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

ul {
  display: flex;
  margin-right: 30px;
  margin-top: 10px;
}

ul li {
  color: #575a61;
  display: block;
  margin: 0 30px;
  font-size: 14px;
  padding: 5px 16px;
}
ul .active {
  background: #f7745d;
  border-radius: 6px;
  color: #fff;
}
</style>

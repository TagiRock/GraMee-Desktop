<template lang="pug">
div
  vue-genre-navigation
  //vue-genre(:genre="genreType")
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueGenre from "./Genre.vue";

import VueGenreNavigation from "./GenreNavigation.vue";
import { GenreType } from "domain/model/GenreType";
import { LevelType } from "domain/model/LevelType";
import { Getter } from "vuex-class";

@Component({
  components: {
    VueGenre,
    VueGenreNavigation
  }
})
export default class Home extends Vue {
  @Getter("home/genre") public genre: string;
  @Getter("home/level") public level: LevelType;

  public created() {
    console.log(this.genre);
    console.log(this.level);
  }
}
</script>

<style lang="scss" scoped>

</style>


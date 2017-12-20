<template lang="pug">
div
  vue-genre-navigation
  vue-genre
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueGenre from "./Genre.vue";
import VueGenreNavigation from "./GenreNavigation.vue";
import { Getter } from "vuex-class";

import { GenreType } from "domain/model/GenreType";
import { LevelType } from "domain/model/LevelType";

@Component({
  components: {
    VueGenre,
    VueGenreNavigation
  }
})
export default class School extends Vue {
 //
}
</script>

<style lang="scss" scoped>

</style>


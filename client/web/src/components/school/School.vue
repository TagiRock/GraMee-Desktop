<template lang="pug">
div
  vue-genre
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueGenre from "./Genre.vue";
import VueGenreNavigation from "./GenreNavigation.vue";
import { Getter } from "vuex-class";

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


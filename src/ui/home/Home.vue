<template lang="pug">
vue-genre(:genre="genreType")
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueGenre from "./Genre.vue";
import VueScreenShare from "./ScreenShare.vue";
import GenreType from "./domain/GenreType";
import LevelType from "./domain/LevelType";
@Component({
  components: {
    VueGenre,
    VueScreenShare
  }
})
export default class Home extends Vue {
  public genreType: GenreType = GenreType.Web;
  public levelType: LevelType = LevelType.Easy;
}
</script>

<style lang="scss" scoped>

</style>


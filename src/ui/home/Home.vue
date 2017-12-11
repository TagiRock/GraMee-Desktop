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
  public genreType = "web";
  public levelType = LevelType.Easy;

  constructor(){
    super()
    console.log(this);
    console.log(typeof this.genreType);
  }
}
</script>

<style lang="scss" scoped>

</style>


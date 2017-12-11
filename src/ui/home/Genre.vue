<template lang="pug">
div 
  img#first-view-image(v-bind:src="imageUrl") 
  div#genre-box
    vue-section-header
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueCard from "../common/Card.vue";
import VueSectionHeader from "./SectionHeader.vue";
import LevelType from "./domain/LevelType";
import GenreType from "./domain/GenreType";
@Component({
  components: {
    VueCard,
    VueSectionHeader
  },
  props: {
    genre: {
      type: String,
      required: true,
      default: "web"
    }
  }
})
export default class Genre extends Vue {
  private genre: string;
  private level: string;
  public imageUrl = "asset/images/mainv/mainv01.jpg";
}
</script>

<style lang="scss" scoped>
#first-view-image {
  width: 100%;
}
#genre-box {
  padding: 40px 5%;
}
</style>


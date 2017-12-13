<template lang="pug">
div 
  img#first_view_image(v-bind:src="imageUrl") 
  div#genre_box
    vue-section-header
    vue-card
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueCard from "../common/Card.vue";
import VueSectionHeader from "./SectionHeader.vue";
import { Getter } from "vuex-class";
import { Getters } from "store/home";

import { LevelType } from "domain/model/LevelType";
import { GenreType } from "domain/model/GenreType";

@Component({
  components: {
    VueCard,
    VueSectionHeader
  }
})
export default class Genre extends Vue {
  @Getter(Getters.genre) public genre: string;
  @Getter(Getters.level) public level: LevelType;
  public imageUrl = "assets/images/mainv/mainv01.jpg";
}
</script>

<style lang="scss" scoped>
#first_view_image {
  width: 100%;
}
#genre_box {
  padding: 40px 5%;
}
</style>


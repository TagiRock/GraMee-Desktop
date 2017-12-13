<template lang="pug">
div 
  img#first-view-image(v-bind:src="imageUrl") 
  div#genre-box
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


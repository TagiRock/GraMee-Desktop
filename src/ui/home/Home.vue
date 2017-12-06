<template lang="html">
  <div>
    <vue-card></vue-card>
    <vue-section-header></vue-section-header>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueCard from "../common/Card.vue";
import VueSectionHeader from "./SectionHeader.vue";
@Component({
  components: {
    VueCard,
    VueSectionHeader
  }
})
export default class Home extends Vue {
  public badgeCount = 0;
}
</script>

<style lang="scss" scoped>

</style>


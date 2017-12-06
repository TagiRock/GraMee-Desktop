<template lang="html">
  <div>this is card</div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Card extends Vue {
  public badgeCount = 0;
}
</script>

<style lang="css" scoped>

</style>

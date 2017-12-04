<template lang="html">
  <div>home</div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Home extends Vue {
  public badgeCount = 0;
}
</script>

<style lang="scss" scoped>
header {
    background: #F1F1F1;
}
</style>


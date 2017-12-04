<template lang="pug">
div school
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Header extends Vue {
  public badgeCount = 0;
}
</script>

<style lang="scss" scoped>
header {
    background: #F1F1F1;
}
</style>


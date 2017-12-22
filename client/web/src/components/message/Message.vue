<template lang="pug">
div message
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Message extends Vue {
  public badgeCount = 0;
}
</script>

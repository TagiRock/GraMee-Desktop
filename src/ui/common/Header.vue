<template lang="pug">
header
  ul
    li
      v-badge(overlap color="red" v-model="badgeVisibility")
       v-icon(large) notifications
       span(slot="badge") {{badgeCount}}
    li
      v-icon(large) search
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Header extends Vue {
  public badgeCount = 1;
  public badgeVisibility = this.badgeCount !== 0;
}
</script>

<style lang="scss" scoped>
header {
  background: #F1F1F1;
  padding: 10px 30px;
  position: relative;
  text-align: center;
}
ul{
  margin: 0;
  display: flex;
  justify-content: space-between;
  list-style:none;
  position: fixed;
}
ul > ui {
  margin-right: 10px;
   padding-left: 10px;
}
</style>


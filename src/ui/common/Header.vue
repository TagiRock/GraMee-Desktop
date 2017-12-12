<template lang="pug">
div#header
  img(src="asset/images/logo.svg")
  ul
    li
      el-badge(:value="6")
        md-icon(medium) notifications
    li
      md-icon(medium) search       
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Header extends Vue {
  public badgeCount = 0;
  public badgeVisibility = this.badgeCount !== 0;
}
</script>

<style lang="scss" scoped>
#header{
  background: #f1f1f1;
  padding: 10px 30px;
  position: relative;
  text-align: center;
}
img {
  width: 100px;
}
ul {
  display: flex;
  justify-content: space-between;
  position: absolute;
  margin: 0;
  right: 30px;
  top: 10px;
  width: 100px;
}
ul li {
  color: #272c32;
  display: block;
  bottom: 0;
  position: relative;
}
</style>

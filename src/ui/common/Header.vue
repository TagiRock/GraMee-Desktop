<template lang="pug">
header
    img#logo(src="asset/images/logo.svg")
    ul#header_links
      li#alart
        v-icon notifications
        v-badge(left overlap color="red")
          span(slot="badge") 6
      li#search
        v-icon search
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
header {
  background: #f1f1f1;
  padding: 10px 30px;
  position: relative;
  text-align: center;
}

#logo {
  width: 100px;
}
#header_links {
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 30px;
  top: 10px;
  width: 100px;
}
.alart {
  position: relative;
  width: 40px;
}
#header_links li {
  color: #272c32;
  display: block;
}
#alart i {
  font-size: 30px;
}
#search i {
  font-size: 33px;
}
</style>

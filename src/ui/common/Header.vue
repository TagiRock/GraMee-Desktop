<template lang="html">
  <header>
        <h1><img src="img/logo.svg" alt="GraMee" class="logo"></h1>
        <ul id="header_links">
          <li id="alart"><v-icon>notifications</v-icon>
            <v-badge overlap left color="red">
              <span slot="badge">6</span>
            </v-badge>
          </li>
          <li id="search"><v-icon>search</v-icon></li>
        </ul>
  </header>
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
  background: #F1F1F1;
  padding: 10px 30px;
  position: relative;
  text-align: center;
}

.logo {
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
#alart {
  position: relative;
  width: 40px;
}
#header_links li {
  color: #272C32;
  display: block;
}
#alart i {
  font-size: 30px;
}
#search i {
  font-size: 33px;
}






</style>

<template lang="pug">
aside
  nav
    ul
      li
        img(src='assets/images/create_profile/account02.png', alt='プロフィール画像' class="account")
      router-link(tag="li" to="/" exact)
        a
          md-icon(medium) school
          | School
      router-link(tag="li" to="/home")
        a
          md-icon(medium) home
          | Home
      router-link(tag="li" to="/message")
        a
          md-icon(medium) textsms
          | Message
      router-link(tag="li" to="/setting")
        a
          md-icon(medium) settings
          | Setting
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
@Component
export default class Sidebar extends Vue {}
</script>

<style lang="scss" scoped>
aside {
  height: 100%;
  background: #272c32;
  padding: 20px 0 0;
  width: 90px;
}

nav {
  background: #272c32;
  height: auto;
  box-shadow:none;
}

ul {
  padding: 0;
  border: none;
  margin-top: 30%;
}

ul > li {
  padding: 15px 12px;
  text-align: center;
  display: block;
  margin-bottom: 30px;
}

ul > li > a {
  display: block;
  text-decoration: none;
  color: #575a61;
  transition: all 500ms ease-in-out;
  font-size: 13px;
}

ul > li > a > .md-icon{
  display: block;
}

.router-link-active > a,
ul > li > a:hover {
  background: none;
  color: #fff;
  position: relative;
}
.router-link-active > a > .md-icon,
ul > li > a:hover > .md-icon  {
  color: #f7745d;
}

ul .active::before {
  background: #f7745d;
  border-radius: 20px;
  content: "";
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 2px;
}
.account {
  height: 60px;
  width: 60px;
}
</style>

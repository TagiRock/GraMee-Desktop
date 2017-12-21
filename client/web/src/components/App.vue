<template lang="pug">
div#content
  vue-sidebar
  div#content_right
    vue-header
    vue-home
    //- v-select(v-model='class.genre', :options="['web','app','game']")
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueHeader from "./Header.vue";
import VueSidebar from "./Sidebar.vue";
import VueHome from "./home/Home.vue";
import Peer from "skyway-js";

@Component({
  components: {
    VueHeader,
    VueSidebar,
    VueHome
  }
})
export default class App extends Vue {}
</script>

<style lang="css">
html {
  line-height: normal;
}
html,body,
#content,#content_right,
main {
  height: 100%;
}
body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
}
#content {
  display: flex;
}
#content_right {
  width: 100%;
}
ul {
  margin: 0;
  list-style: none;
  padding: 0;
}
.cf:before,
.cf:after {
  content: " ";
  display: table;
}
a {
  text-decoration: none;
}
a:hover {
  transition: color 0.35s ease;
  -webkit-transition: color 0.35s ease;
  -moz-transition: color 0.35s ease;
}
p {
  margin: 0;
}
h2,h3 {
  font-size: 25px;
  font-weight: 600;
  margin: 0;
}
textarea {
  resize: none;
}
button,input,textarea {
  outline: none;
}
button {
  border: none;
}
button:focus {
  background: none;
}
.cf:after {
  clear: both;
}
.cf {
  zoom: 1;
}
.en {
  font-family: 'Montserrat', sans-serif;
}
.ja,.class_name {
  font-family: 游ゴシック体, 'Yu Gothic', YuGothic, 'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
}



section {
  min-width: 500px;
  height: 100%;
}
.el-header {
  padding: 0;
}
.el-main {
  padding: 0;
}
</style>

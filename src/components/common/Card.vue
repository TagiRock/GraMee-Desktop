<template lang="html">
  <ul>
    <li>
      <a href="class/detail.html"><img src="assets/images/card/class01.jpg"></a>
      <h3 class="class_name">EnterClassTitle. EnterClassTitle.</h3>
      <p class="ja">sample name</p>
    </li>
  </ul>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Card extends Vue {
 
}
</script>

<style lang="css" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
ul li {
  margin: 0;
  margin-bottom: 30px;
  width: 23%;
}
ul li a:hover {
  opacity: .5;
  transition: opacity 0.3s ease-out;
}
ul li h3 {
  color: #272C32;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
}
ul li p {
  color: #8A8C91;
}
</style>

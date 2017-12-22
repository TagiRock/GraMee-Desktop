<template lang="html">
  <article>
    <section>
      <a href="class/detail.html"><img src="assets/images/card/class01.jpg"></a>
      <h3 class="class_name">JavaScriptを基礎から学ぶ教室</h3>
      <p class="ja">田木 一郎</p>
    </section>
  </article>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Card extends Vue {

}
</script>

<style lang="css" scoped>
article {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
article section {
  margin: 0;
  margin-bottom: 30px;
}
article section a:hover {
  opacity: .5;
  transition: opacity 0.3s ease-out;
}
article section h3 {
  color: #272C32;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
}
article section p {
  color: #8A8C91;
}
</style>

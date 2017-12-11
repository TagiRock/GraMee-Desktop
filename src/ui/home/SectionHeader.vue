<template lang="pug">
  h2 {}
    span.view
      a(href='#') ALL VIEW
        v-icon keyboard_arrow_right

</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
@Component
export default class SectionHeader extends Vue {
  //
}
</script>

<style lang="scss" scoped>
h2 {
 border-bottom: 1px solid #DBDBDB;
 color: #575A61;
 margin: 0 0 15px;
 padding: 0 0 10px;
}
.view a {
  color: #575A61;
  float: right;
  font-size: 16px;
  margin: 8px 0 0;
}
.view a:hover {
  color: #F7745D;
  transition: 0.3s ease-out;
}
.view a i {
  font-size: 27px;
  float: right;
}
</style>

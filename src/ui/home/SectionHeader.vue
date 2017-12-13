<template lang="pug">
  h2 {{name}}
    span.view
      a(href='#') ALL VIEW
        md-icon keyboard_arrow_right

</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
@Component({
  props: {
    name: {
      type: String,
      required: true
    }
  }
})
export default class SectionHeader extends Vue {
  public name = "Recommend";
}
</script>

<style lang="scss" scoped>
h2 {
  border-bottom: 1px solid #dbdbdb;
  color: #575a61;
  margin: 0 0 15px;
  padding: 0 0 10px;
}
.view a {
  color: #575a61;
  float: right;
  font-size: 16px;
  margin: 8px 0 0;
}
.view a:hover {
  color: #f7745d;
  transition: 0.3s ease-out;
}
.view a i {
  font-size: 27px;
  float: right;
}
</style>

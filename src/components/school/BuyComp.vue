<template lang="pug">
html
  head
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width, initial-scale=1.0')
    title GraMee
    link(href='https://fonts.googleapis.com/icon?family=Material+Icons', rel='stylesheet')
    link(href='https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800', rel='stylesheet')
    link(rel='stylesheet', href='style.css')
  body
    .cartbox
      h2.comp_ttl
        | 受講が確定しました！
        span.comp_txt 開講者からのMessageをお待ちください。
      img(src='assets/images/buy_comp/step.svg', alt='')
      .btnbox.cf
        button.back(type='button', name='button') Schoolに戻る
        button.message(type='button', name='button') Message

</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class BuyComp extends Vue {
}
</script>

<style lang="css" scoped>
.cartbox {
  background: #fff;
  border-radius: 6px;
  margin: 0 auto;
  padding: 60px 60px 20px;
  width: 80%;
}
.comp_ttl {
  text-align: center;
}
.comp_txt {
  font-size: 18px;
  margin: 0 0 40px;
  display: block;
}
.btnbox {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}
button {
  border-radius: 50px;
  color: #fff;
  font-size: 21px;
  font-weight: bold;
  margin: 0 10px;
  outline: none;
  padding: 5px;
  width: 200px;
}
.back {
  background: #575A61;
}
.message {
  background: #F7745D;
}

</style>


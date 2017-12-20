<template lang="pug">
.cartbox
    form(action='index.html', method='post')
    .typebox
        label(for='') E-mail Address
        input(type='text', name='', value='')
    .typebox
        label(for='') Password
        input(type='text', name='', value='')
    .class
        img(src='assets/images/buy/class/class01.jpg', alt='')
        h2.class_name EnterClassTitle. EnterClassTitle.
        #tag
        span.en
            v-icon local_offer
            | WEB
        span.en
            v-icon local_offer
            | HTML
        span.en
            v-icon local_offer
            | Easy
        span#price
        span.tax.ja 税込
        | ￥1,600
    .btnbox.cf
        button.cancel(type='button', name='button') キャンセル
        button.buy(type='button', name='button') 受講を確定
    .help
    p お支払いは授業後に確定されます
    v-icon help_outline

</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Buy extends Vue {
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
.typebox {
  margin: 0 0 20px;
}
label {
  color: #575A61;
  display: inline-block;
  font-size: 16px;
  width: 135px;
}
input {
  border: 1px solid #CECECE;
  border-radius: 50px;
  font-size: 15px;
  outline: none;
  padding: 11px 20px;
  width: 66%;
}
input:focus {
  border: 1px solid #F7745D;
  box-shadow: none;
}
.class {
  margin: 40px 0 0;
}
.class img {
  float: left;
  margin: 0 20px 0 0;
  width: 120px;
}
.class h2 {
  font-size: 18px;
  height: 40px;
}
#price {
  color: #272C32;
  display: block;
  font-size: 40px;
  font-weight: bold;
  margin: 0 0 20px;
  text-align: right;
  width: 100%;
}
#price span {
  font-size: 18px;
}

#tag {
  color: #575A61;
  margin: 20px 0;
}
#tag span {
  margin: 0 20px 0 0;
}
#tag span i {
  vertical-align: middle;
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
.cancel {
  background: #575A61;
}
.buy {
  background: #F7745D;
}
.help {
  color: #575A61;
  font-size: 13px;
  position: relative;
  text-align: right;
}
.help i {
  font-size: 30px;
  position: absolute;
  right: -35px;
  top: -6px;
}

</style>


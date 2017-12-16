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
    .open_classbox
      form(method='post')
        a.upload_img(href='#')
          img(src='assets/images/open_class/upload.svg', alt='')
        #open_class_form
          .class_name
            label(for='') 教室名を入力
            input(type='text', name='', value='')
          .class_txt
            label(for='') 教室の説明文
            textarea(name='name', rows='8', cols='80')
          .genre_select
            label(for='') ジャンルを選ぶ
            a.dropdown-button.btn.ja(href='#', data-activates='dropdown1')
              i.material-icons keyboard_arrow_down
          .language_select
            label(for='') 言語を選ぶ
            a.dropdown-button.btn.ja(href='#', data-activates='dropdown1')
              i.material-icons keyboard_arrow_down
          .level_select
            label(for='') レベルを選ぶ
            a.dropdown-button.btn.ja(href='#', data-activates='dropdown1')
              i.material-icons keyboard_arrow_down
          .price
            label(for='') 価格
            input(type='text', name='', value='')
          ul.all_price
            li
              | 授業料手数料
              span ¥-
            li.profits
              | 授業料利益
              span ¥-
      .btnbox.cf
        button.cancel(type='button', name='button') キャンセル
        button.open(type='button', name='button') 開講する

</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class OpenClass extends Vue {
}
</script>

<style lang="css" scoped>
.open_classbox {
  background: #fff;
  border-radius: 6px;
  margin: 0 auto;
  padding: 40px 0;
  width: 80%;
}
.open_classbox form {
  display: flex;
  justify-content: center;
}
label {
  color: #575A61;
  display: inline-block;
  font-size: 15px;
  width: 135px;
}
input {
  border: 1px solid #CECECE;
  border-radius: 50px;
  font-size: 15px;
  outline: none;
  padding: 10px 20px;
  width: 418px;
}
input:focus {
  border: 1px solid #F7745D;
  box-shadow: none;
}
.class_name,.class_txt,
.genre_select,.language_select,.level_select,
.price {
  margin: 0 0 20px;
}
.class_txt textarea {
  border: 1px solid #CECECE;
  border-radius: 15px;
  vertical-align: top;
  width: 454px;
}
.genre_select a,.language_select a,.level_select a {
  border: 1px solid #CECECE;
  border-radius: 50px;
  display: inline-block;
  padding: 7px 20px;
  vertical-align: middle;
  width: 418px;
}
.genre_select i,.language_select i,.level_select i {
  color: #575A61;
  float: right;
}
.all_price {
  margin: 30px 0 0;
  width: 595px;
}
.all_price li {
  color: #575A61;
  font-size: 14px;
  margin: 0 0 20px;
  text-align: right;
}
.all_price li span {
  margin: 0 0 0 200px;
}
.all_price .profits {
  color: #272C32;
  font-size: 20px;
  font-weight: bold;
}
.upload_img {
  height: 230px;
  margin: 0 40px 0 0;
  width: 230px;
}
.btnbox {
  display: flex;
  justify-content: center;
  margin: 20px 0 0;
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
.open {
  background: #F7745D;
}
</style>
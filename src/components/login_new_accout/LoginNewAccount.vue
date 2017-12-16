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
    #login_box
      ul
        li
          img(src='assets/images/login/login_mainv01.jpg', alt='')
      h1
        span GraMee
        | WELL COME
      #login
        h2 新規アカウント作成
        form.login(method='post')
          input(type='text', name='', value='', placeholder='アカウント名')
          input(type='text', name='', value='', placeholder='E-mail Address')
          input(type='text', name='', value='', placeholder='Password')
          input(type='text', name='', value='', placeholder='Password再確認')
          button.login_btn(type='button', name='button') アカウント作成
          a(href='#') アカウントをお持ちの方はこちら

</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class LoginNewAccount extends Vue {
}
</script>

<style lang="css" scoped>
#login_box {
  height: 100%;
  position: relative;
}
#login_box img {
  width: 100%;
}
#login_box h1 {
  color: #fff;
  font-size: 105px;
  left: 5%;
  position: absolute;
  top: 25%;
}
#login_box h1 span {
  font-size: 60px;
  display: block;
}
#login {
  background: #272C32;
  height: 100%;
  padding: 160px 40px;
  position: absolute;
  right: 0;
  top: 0;
  width: 23%;
}
#login h2 {
  color: #fff;
  font-size: 30px;
  margin: 0 0 40px;
  text-align: center;
}
#login input {
  border: none;
  border-radius: 50px;
  display: block;
  font-size: 16px;
  height: 50px;
  margin: 0 0 20px;
  padding: 0 20px;
  width: 88%;
}
#login input::placeholder {
  color: #C6C6C6;
}
.login {
  text-align: center;
}
.sns {
  display: flex;
  justify-content: center;
  margin: 60px 0;
}
.sns li {
  border-radius: 50%;
  height: 60px;
  margin: 0 10px;
  width: 60px;
}
.sns li a {
  display: block;
  height: 60px;
}
.login button {
  background: #F7745D;
  border-radius: 50px;
  color: #fff;
  font-size: 21px;
  font-weight: bold;
  height: 50px;
  margin: 0 auto;
  width: 260px;
}
.login > a {
  color: #fff;
  font-size: 14px;
  display: block;
  margin: 25px 0 -10px;
}
.login > a:hover {
  color: #838383;
}
</style>
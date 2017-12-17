<template lang="pug">
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
      input(type='text', placeholder='E-mail Address', v-model="email")
      input(type='text', value='', placeholder='Password', v-model="password")
      button.login_btn(type='button', @click="clickSigninBtn(email,password)") アカウント作成
      a(href='#') アカウントをお持ちの方はこちら

</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Actions } from "store/app";
import { Action } from "vuex-class";

@Component
export default class NewAccount extends Vue {
  @Action(Actions.signinEmail)
  private signinAction: (payload: { email: string, password: string }) => void;
  public clickSigninBtn(email: string, password: string) {
      this.signinAction({email , password});
  }
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
  background: #272c32;
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
  color: #c6c6c6;
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
  background: #f7745d;
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
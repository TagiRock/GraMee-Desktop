<template lang="pug">
#login_box
  ul
    li
      img(src='assets/images/login/login_mainv01.jpg', alt='')
  h1
    span GraMee
    | WELL COME
  #login
    h2 LOGIN
    form.login(method='post')
      input(type='text', name='', value='', placeholder='E-mail Address', v-model="email")
      input(type='password', name='', value='', placeholder='Password', v-model="password")
      button.login_btn(type='button', name='button', @click="clickLoginBtn(email,password)") ログイン
      router-link(to="/signup") 新規アカウントを作成
      a(href='#') パスワードをお忘れですか？
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Actions } from "store/app";
import { Action } from "vuex-class";
@Component
export default class Login extends Vue {
  @Action(Actions.loginEmail)
  private loginAction: (payload: { email: string, password: string }) => void;
  public clickLoginBtn(email: string, password: string) {
      this.loginAction({email , password});
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


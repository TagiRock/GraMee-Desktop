<template lang="pug">
#create_account_box
      ul
        li
          img(src='assets/images/login/login_mainv01.jpg', alt='')
      h1
        span GraMee
        | WELL COME
      #create_account
        h2 プロフィール作成
        form.create_account(method='post')
          img(src='assets/images/create_profile/account.svg', alt='')
          input(v-model="name",type='text', name='', value='', placeholder='アカウント名')
          textarea(v-model="description",name='name', rows='8', cols='80', placeholder='プロフィール文章')
          button.start_btn(type='button', name='button', @click="clickStart()") はじめる

</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class CreateProfile extends Vue {
  public name: string = ""; //ユーザモデルの属性に要変更
  public description: string = "";  //ユーザモデルの属性に要変更
  public clickStart() {
    console.log(this.name);
    console.log(this.description);
  }
}
</script>

<style lang="css" scoped>
#create_account_box {
  height: 100%;
  position: relative;
}
#create_account_box img {
  width: 100%;
}
#create_account_box h1 {
  color: #fff;
  font-size: 105px;
  left: 5%;
  position: absolute;
  top: 25%;
}
#create_account_box h1 span {
  font-size: 60px;
  display: block;
}
#create_account {
  background: #272c32;
  height: 100%;
  padding: 100px 40px;
  position: absolute;
  right: 0;
  top: 0;
  width: 23%;
}
#create_account h2 {
  color: #fff;
  font-size: 30px;
  margin: 0 0 40px;
  text-align: center;
}
#create_account input {
  border: none;
  border-radius: 50px;
  display: block;
  font-size: 16px;
  height: 50px;
  margin: 0 0 20px;
  padding: 0 20px;
  width: 88%;
}
#create_account input::placeholder,
.create_account textarea::placeholder {
  color: #c6c6c6;
}
.create_account {
  text-align: center;
}
.create_account img {
  height: 80px;
  margin: 0 0 20px;
  width: 80px !important;
}
.create_account textarea {
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  margin: 0 0 20px;
  padding: 10px;
  width: 100%;
}
.start_btn {
  background: #f7745d;
  border-radius: 50px;
  color: #fff;
  font-size: 21px;
  font-weight: bold;
  height: 50px;
  margin: 0 auto;
  width: 260px;
}
</style>
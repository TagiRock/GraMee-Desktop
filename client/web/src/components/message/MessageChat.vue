<template lang="pug">
main
  #message
    #chat_box
      #account
        img(src='assets/images/message_chat/account01.png', alt='')
        h3.account_name 田木一郎
        p.online ログイン
        .call
          v-icon phone
      #chat
        form.sent_message(action='index.html', method='post')
          textarea(name='name', rows='8', cols='80', placeholder='ここにメッセージを入力')

</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class MessageChat extends Vue {
}
</script>

<style lang="css" scoped>
#message {
  display: flex;
  height: 100%;
}
#chat_box {
  width: 100%;
}
#account {
  border-bottom: 1px solid #DBDBDB;
  padding: 20px 30px 20px 20px;
  position: relative;
}
#account img {
  float: left;
  margin: 0 10px 0 0;
}
#account .account_name {
  color: #272C32;
  font-size: 20px;
}
.call {
  background: #3074FF;
  border-radius: 50%;
  height: 60px;
  position: absolute;
  right: 30px;
  top: 20px;
  width: 60px;
}
.call v-icon {
  color: #fff;
  font-size: 39px;
  margin: 10px 0 0 10px;
}
#chat {
  height: 100%;
  margin: 0 auto;
  position: relative;
  width: 80%;
}
.sent_message textarea {
  border: none;
  border-top: 1px solid #E5E5E5;
  bottom: 95px;
  font-size: 16px;
  height: 100px;
  padding: 20px 0;
  position: absolute;
  width: 100%;
}
.sent_message textarea::placeholder {
  color: #A5A2A2;
}
</style>
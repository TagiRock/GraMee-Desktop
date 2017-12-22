<template lang="pug">
#message
  #chat_box
    #chat
      form.sent_message
        textarea(v-model="textMessage",v-on:keyup.enter="submit()",name='name', rows='1', cols='10', placeholder='ここにメッセージを入力')

</template>
 
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class MessageChat extends Vue {
  public textMessage: string = "";
  public submit() {
    //メッセージ送信
    console.log(this.textMessage);
    this.textMessage = "";
  }
}
</script>

<style lang="css" scoped>
#message {
  display: flex;
  position: absolute;
  background-color: #fff;
  z-index: 900;
  height: 100%;
  right: 0;
  width: 28%;
}
#chat_box {
  width: 100%;
}
#account {
  border-bottom: 1px solid #dbdbdb;
  padding: 20px 30px 20px 20px;
  position: relative;
}
#account img {
  float: left;
  margin: 0 10px 0 0;
}
#account .account_name {
  color: #272c32;
  font-size: 20px;
}
.call {
  background: #3074ff;
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
  border-top: 1px solid #e5e5e5;
  top: 450px;
  font-size: 16px;
  height: 80px;
  padding: 20px 0;
  position: absolute;
  width: 100%;
}
.sent_message textarea::placeholder {
  color: #a5a2a2;
}
</style>
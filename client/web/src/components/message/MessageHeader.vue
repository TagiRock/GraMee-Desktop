<template lang="pug">
#chat_box
    #account
        img(src='assets/images/message_chat/account01.png', alt='')
        h3.account_name 田木一郎
        p.online ログイン
        .class_end(@click="$emit('finish')")
            md-icon(large) check
        .call(@click="$emit('close')")
            md-icon(large)  phone
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  components: {}
})
export default class MessageHeader extends Vue {
  public test() {
    console.log("FInishして");
    this.$emit("finishClassroom");
  }
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
  cursor: pointer;
  height: 60px;
  position: absolute;
  right: 30px;
  top: 20px;
  width: 60px;
}
.call v-icon,
.class_end v-icon {
  color: #fff;
  font-size: 39px;
  margin: 10px 0 0 10px;
}
.class_end {
  background: #f75d5d;
  border-radius: 50%;
  cursor: pointer;
  height: 60px;
  position: absolute;
  right: 110px;
  top: 20px;
  width: 60px;
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
  bottom: 95px;
  font-size: 16px;
  height: 100px;
  padding: 20px 0;
  position: absolute;
  width: 100%;
}
.sent_message textarea::placeholder {
  color: #a5a2a2;
}
#chat_box #account i.material-icons.md-icon {
  color: #fff;
  position: absolute;
  top: 13px;
  right: 11px;
}
</style>

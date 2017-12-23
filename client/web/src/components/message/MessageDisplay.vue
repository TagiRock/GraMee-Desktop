<template lang="pug">
#display_box
  #display_head.cf
    img(src='assets/images/message_display/account01.png', alt='')
    h3.account_name 西澤 佳裕
    p.time 00:37
    .message_box
      i.material-icons(type='button', @click="changeShowChat()") textsms
  #display
    video
  #call_icons
    .call_end(@click="$emit('close')")
      md-icon(large) call_end
  vue-message-chat(v-if='showChat',v-bind:style="{width: 28+'%' ,position: 'absolute'}")

</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueMessageChat from "./MessageChat";
import { Usecase } from "./Usecase";

@Component({
  components: {
    VueMessageChat
  }
})
export default class MessageDisplay extends Vue {
  public showChat: boolean = false;
  public usecase = new Usecase();
  public remoteStream: MediaStream;
  public playerEnable = false;
  public changeShowChat() {
    this.showChat = !this.showChat;
  }
  public created() {
    this.usecase.init();
    this.usecase.callback = (stream: MediaStream) => {
      const video = this.$el.querySelector("video");
      if (video) {
        video.srcObject = stream;
        video.play();
      }
    };
  }
}
</script>

<style lang="css">
#display_box {
  background: #363d45;
  height: 100%;
  position: relative;
}
#display_head {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px 30px;
  position: relative;
}
#display_head img {
  float: left;
  margin: 0 10px 0 0;
  width: 40px;
}
#display_head h3 {
  font-size: 15px;
}
.time {
  font-weight: 100;
}
.message_box {
  cursor: pointer;
  position: absolute;
  right: 30px;
  top: 20px;
}
#display {
  height: 440px;
  margin: 0 auto;
  padding: 20px 0 0;
  position: absolute;
  text-align: center;
  width: 100%;
}
#display video {
  background: #eee;
  height: 440px;
  width: 80%;
}
#call_icons {
  bottom: 100px;
  position: absolute;
  text-align: center;
  width: 100%;
}
.call_end {
  background: #f75d5d;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
  height: 60px;
  margin: 0 auto;
  width: 60px;
}
.call_end i.material-icons.md-icon {
  font-size: 40px;
  margin: 10px 0 0;
}
</style>

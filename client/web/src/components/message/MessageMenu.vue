<template lang="pug">
#message
    vue-modal-finish-classroom(v-if='showFinishModal',@cancel="showFinishModal = false",@closeClassroom="closeClassroom()")
    vue-message-account-list
    .message_headbox
        vue-message-header(@close="$emit('close')", @finish='showFinishModal = true')
        vue-message-chat(v-bind:style="{width: 100 +'%' , }")
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueMessageAccountList from "./MessageAccountList";
import VueMessageHeader from "./MessageHeader";
import VueMessageChat from "./MessageChat";
import VueModalFinishClassroom from "../modal/ModalFinishClassroom";

@Component({
  components: {
    VueMessageAccountList,
    VueMessageHeader,
    VueMessageChat,
    VueModalFinishClassroom
  }
})
export default class MessageMenu extends Vue {
  public showFinishModal: boolean = false;
  public closeClassroom() {
    //講座終了
  }
}
</script>

<style lang="css">
#message {
  display: flex;
  height: 100%;
}
.message_headbox {
  width: 100%;
}
</style>
<template lang="pug">
article
  //- vue-message-account-list
  //- vue-message-chat(v-if='showChat', @close='showChat = false')
  vue-message-display(v-if='showDisplay')
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueMessageAccountList from "./MessageAccountList";
import VueMessageDisplay from "./MessageDisplay";
import VueMessageChat from "./MessageChat";
@Component({
  components: {
    VueMessageAccountList,
    VueMessageChat,
    VueMessageDisplay
  }
})
export default class Message extends Vue {
  public showDisplay: boolean = true;
}
</script>

<style lang="css" scoped>
article {
  height: 100%;
}
</style>

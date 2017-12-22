<template lang="pug">
  //- vue-message-account-list
  //- vue-message-chat
  vue-message-display
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueMessageAccountList from "./MessageAccountList";
import VueMessageChat from "./MessageChat";
import VueMessageDisplay from "./MessageDisplay";

@Component({
  components: {
    VueMessageAccountList,
    VueMessageChat,
    VueMessageDisplay
  }
})

export default class Message extends Vue {
  public badgeCount = 0;
}
</script>

<template lang="pug">
article
  vue-message-display(v-if='showDisplay', @close='showDisplay = false, showMenu = true')
  vue-message-menu(v-if='showMenu', @close='showMenu = false, showDisplay = true')
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueMessageAccountList from "./MessageAccountList";
import VueMessageDisplay from "./MessageDisplay";
import VueMessageChat from "./MessageChat";
import VueMessageMenu from "./MessageMenu";

@Component({
  components: {
    VueMessageDisplay,
    VueMessageMenu
  }
})
export default class Message extends Vue {
  public showDisplay: boolean = false;
  public showMenu: boolean = true;
}
</script>

<style lang="css" scoped>
article {
  height: 100%;
}
</style>

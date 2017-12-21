<template lang="pug">
ariticle
  //- vue-message-account-list
  vue-message-chat
  //- vue-message-display
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueBuy from "../school/Buy";
import VueBuyComp from "../school/BuyComp";
import VueSchool from "../school/School";
import VueMessageAccountList from "../message/MessageAccountList";
import VueMessageChat from "../message/MessageChat";
import VueMessageDisplay from "../message/MessageDisplay";
import VueCreateClassroom from "../school/CreateClassroom";
@Component({
  components: {
    VueBuy,
    VueBuyComp,
    VueSchool,
    VueMessageAccountList,
    VueMessageChat,
    VueMessageDisplay,
    VueCreateClassroom
  }
})
export default class Home extends Vue {
  public badgeCount = 0;
}
</script>


<style lang="scss" scoped>
header {
  background: #f1f1f1;
}
</style>


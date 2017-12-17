<template lang="pug">
  //- vue-login
  //- vue-buy
  //- vue-buy-comp
  //- vue-genre-level-select-nav
  //- vue-class-detail
  //- vue-message-account-list
  //- vue-message-chat
  //- vue-message-display
  vue-open-class
  //- vue-test-modal
  //- vue-test-user-auth
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueLogin from "../login/Login.vue";
import VueBuy from "../buy/Buy.vue";
import VueBuyComp from "../buy_comp/BuyComp.vue";
import VueGenreLevelSelectNav from "../genre_level_select_nav/GenreLevelSelectNav.vue";
import VueClassDetail from "../class_detail/ClassDetail.vue";
import VueMessageAccountList from "../message_account_list/MessageAccountList.vue";
import VueMessageChat from "../message_chat/MessageChat.vue";
import VueMessageDisplay from "../message_display/MessageDisplay.vue";
import VueOpenClass from "../open_class/OpenClass.vue";
import VueTestModal from "../test/TestModal.vue";
import VueTestUserAuth from "../test/TestUserAuth.vue";

@Component({
  components: {
    VueLogin,
    VueBuy,
    VueBuyComp,
    VueGenreLevelSelectNav,
    VueClassDetail,
    VueMessageAccountList,
    VueMessageChat,
    VueMessageDisplay,
    VueOpenClass,
    VueTestModal,
    VueTestUserAuth
  }
})
export default class Home extends Vue {
  public badgeCount = 0;
}
</script>


<style lang="scss" scoped>
header {
    background: #F1F1F1;
}
</style>


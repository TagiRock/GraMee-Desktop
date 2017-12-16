<template lang="pug">
  //- vue-login
  //- vue-buy
  vue-buy-comp
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueLogin from "../login/Login.vue";
import VueBuy from "../buy/Buy.vue";
import VueBuyComp from "../buy_comp/BuyComp.vue";
@Component({
  components: {
    VueLogin,
    VueBuy,
    VueBuyComp
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


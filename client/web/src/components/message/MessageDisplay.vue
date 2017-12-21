<template lang="pug">
#display_box
  #display_head.cf
    img(src='assets/images/message_display/account01.png', alt='')
    h3.account_name 田木一郎
    p.time 00:37
    .message_box
      i.material-icons textsms
  #display
  #call_icons
    .call_end
      v-icon call_end

</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class MessageDisplay extends Vue {
}
</script>

<style lang="css">
#display_box {
  background: #363D45;
  height: 100%;
  position: relative;
}
#display_head {
  background-color: rgba(0,0,0,0.5);
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
  position: absolute;
  right: 30px;
  top: 20px;
}
#display {
  margin: 0 auto;
  width: 80%;
}
#call_icons {
  bottom: 100px;
  position: absolute;
  text-align: center;
  width: 100%;
}
.call_end {
  background: #F75D5D;
  border-radius: 50%;
  color: #fff;
  height: 60px;
  margin: 0 auto;
  width: 60px;
}
.call_end v-icon {
  font-size: 40px;
  margin: 10px 0 0;
}
</style>
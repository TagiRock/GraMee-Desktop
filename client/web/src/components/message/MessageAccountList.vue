<template lang="pug">
#accounts
  .account_search
    md-icon search
    input(type='text', name='', value='', placeholder='Search')
  ul.account_list
    li.cf.active
      img(src='assets/images/message_account_list/account01.png', alt='')
      h3 西澤 佳裕

</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class MessageAccountList extends Vue {}
</script>

<style lang="css" scoped>
.message_box {
  height: 100%;
}

#message {
  display: flex;
  height: 100%;
}
#accounts {
  background: #363d45;
  color: #fff;
  padding: 80px 0 30px;
  width: 230px;
}
.account_search {
  color: #272c32;
  margin: 0 10px 40px;
  position: relative;
}
.account_search i {
  margin: 0 0 0 10px;
  vertical-align: middle;
}
.account_search input {
  background: none;
  border: none;
  border-bottom: 2px solid #272c32;
  bottom: -3px;
  color: #fff;
  font-size: 16px;
  left: 0;
  padding: 5px 20px 5px 40px;
  position: absolute;
  width: 150px;
}
.account_search input::placeholder {
  color: #272c32;
}

.account_list li {
  margin: 0 0 20px;
  padding: 5px 20px;
  width: 190px;
}
.active {
  background: #272c32;
}
.account_list li h3 {
  font-size: 16px;
  font-weight: 100;
  margin: 10px 0 0;
}
.account_list li img {
  float: left;
  margin: 0 10px 0 0;
  width: 40px;
}
</style>

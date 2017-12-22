<template lang="pug">
.modal-mask
    .modal-wrapper
        .modal-container
            .cartbox
            h2.comp_ttl
                | 受講が確定しました！
                span.comp_txt 開講者からのMessageをお待ちください。
            img(src='assets/images/buy_comp/step.svg', alt='')
            .btnbox.cf
                button.back(type='button', name='button',@click="$emit('close')") Schoolに戻る
                button.message(type='button', name='button', @click="clickMessageButton()") Message


</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Modal extends Vue {
  public clickMessageButton() {
    //メッセージ画面へのルーティング
  }
}
</script>

<style lang="css" scoped>
.cartbox {
  background: #fff;
  border-radius: 6px;
  margin: 0 auto;
  padding: 60px 60px 20px;
  width: 80%;
}
.comp_ttl {
  text-align: center;
}
.comp_txt {
  font-size: 18px;
  margin: 0 0 40px;
  display: block;
}
.btnbox {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}
button {
  border-radius: 50px;
  color: #fff;
  font-size: 21px;
  font-weight: bold;
  margin: 0 10px;
  outline: none;
  padding: 5px;
  width: 200px;
}
.back {
  background: #575a61;
}
.message {
  background: #f7745d;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 750px;
  margin: 0px auto;
  padding: 20px 70px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>


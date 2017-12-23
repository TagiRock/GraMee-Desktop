<template lang="pug">
.modal-mask
    .modal-wrapper
        .modal-container
            .comp_box
              h2.comp_ttl 授業を終了しますか？
              .btnbox.cf
                button.back(type='button', name='button',@click="$emit('cancel')") キャンセル
                button.end(type='button', name='button',@click="$emit('closeClassroom')") 終了する

</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class ModalFinishClassroom extends Vue {

}
</script>

<style lang="css" scoped>

.modal-container {
  background: #fff;
  border-radius: 6px;
  margin: 0 auto;
  padding: 60px;
  width: 80%;
  animation:move 0.5s ease 0s normal;
  -webkit-animation:move 0.5s ease 0s normal;
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
  background: #575A61;
}
.end {
  background: #F7745D;
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
  width: 650px;
  margin: 0px auto;
  padding: 60px 20px;
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

@keyframes move {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
@-webkit-keyframes move {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}
</style>

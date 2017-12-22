<template lang="pug">
div aslkfdlsakf;lksal;fkas;l
  ul
    li(v-for='task in tasks')
      | {{ task.id }}: {{ task.name }} 
      button(@click='open()', @keyup.esc='showModal = false') more
  vue-modal(v-if='showModal', @close='showModal = false')


</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueModal from "./Modal";

@Component({
  components: {
    VueModal
  }
})
export default class ModalTest extends Vue {
  public active: boolean = false;
  public Hub = new Vue();
  public showModal: boolean = true;
  public tasks: {
    id: "1";
    name: "adasfa";
    detail: "sadfasfasfa";
  };

  public open() {
    console.log(this.tasks.name);
    this.active = true;
    this.tasks = this.tasks;
  }
  public close() {
    this.active = false;
  }
}
</script>

<style lang="css" scoped>
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
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
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


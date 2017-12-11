<template lang="pug">
 v-container
  v-layout
    v-text-field(label="input room name" v-model="roomName")
    v-btn(color="primary" v-on:click="joinRoom(roomName)") Join or Create Room
  v-layout
    video  
</template>

<script lang="ts">
/* tslint:disable:no-console*/
import Component from "vue-class-component";
import Vue from "vue";
import { ScreenShareingUseCase } from "./domain/ScreenShareingUseCase";
@Component
export default class ScreenShare extends Vue {
  private useCase = new ScreenShareingUseCase();
  public joinRoom(roomName: string) {
    //
  }
}
</script>

<style lang="scss" scoped>

</style>

<template lang="pug">
    div.container
        h1 {{message}}
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  name:'app'
})
export default class App extends Vue {
  message = "hello vue";
}
</script>
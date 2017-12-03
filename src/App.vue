<template>
    <div class="container">
         <p>prop: {{propMessage}}</p>
        <h1>{{message}}</h1>
    </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  props: {
    propMessage: String
  },
  name:'app'
})
export default class App extends Vue {
  message = "hello vue";
  constructor() {
    super();
  }
}
</script>
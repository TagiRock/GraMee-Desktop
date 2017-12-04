<template lang="pug">
    <div class="container">
        <vue-header></vue-header>
    </div>
</template>

<script lang="ts">
    import Component from "vue-class-component";
    import Vue from "vue";
    import VueHeader from "./components/Header.vue"

    @Component({
        components: {
            VueHeader
        }
    })
    export default class App extends Vue {
        message = "hello vue";
    }
</script>
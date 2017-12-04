<template lang="pug">
    <div class="container">
        <vue-sidebar></vue-sidebar>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import Component from "vue-class-component";
    import Vue from "vue";
    import VueHeader from "./common/Header.vue";
    import VueSidebar from "./common/Sidebar.vue";

    @Component({
        components: {
            VueHeader,
            VueSidebar
        }
    })
    export default class App extends Vue {
    }
</script>
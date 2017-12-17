<template lang="pug">
div
  select-list(:setSelectItems='selectItems')
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

// @Component
// export default class TestModal extends Vue {
// }
import SelectList from "./SelectList.vue";
// export default class TestModal extends Vue {

@Component({
    components: {
        SelectList
    }
})
export default class TestModal extends Vue{
    data() {
        return {
            selectItems: [
            ]
        }
    }
}

</script>
<style lang="css" scoped>
</style>


<template lang="pug">
ul
    li
        vue-card(v-for='list in lists', :className ="list.name",:userName= "list.user.name", :url = "list.pictureUrl")
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { ClassroomModel } from "domain/model/ClassroomModel";
import { UserModel } from "domain/model/UserModel";
import VueCard from "../common/Card.vue";
import { SectionModel } from "domain/model/SectionModel";
@Component({
  props: {
    section: SectionModel
  }
})
export default class Section extends Vue {
  public section: SectionModel;
  public lists: ClassroomModel[] = this.section.classrooms;
  public created() {
    console.log(this.section.name);
  }
}
</script>

<style lang="css" scoped>
/* ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
ul li {
  margin: 0;
  margin-bottom: 30px;
  width: 23%;
}
ul li a:hover {
  opacity: 0.5;
  transition: opacity 0.3s ease-out;
}
ul li h3 {
  color: #272c32;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
}
ul li p {
  color: #8a8c91;
} */
</style>

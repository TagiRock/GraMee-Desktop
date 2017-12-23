<template lang="pug">
ul
  li
    a(href='class/detail.html')
      img(v-bind:src="model.pictureUrl")
    h3.class_name {{model.name}}
    p.ja {{model.user.name}}
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { ClassroomModel } from "domain/model/ClassroomModel";
import { UserModel } from "domain/model/UserModel";

function createModel(name: string): ClassroomModel {
  const model = new ClassroomModel();
  model.user = {
    id: "1",
    name: "UserName",
    email: "asdfa",
    createAt: "sfdjalkjdfa"
  };
  model.name = name;
  model.description = "説明だよ説明だよ説明だよ説明だよ説明だよ";
  model.genre = "Web";
  model.language = "javascript";
  model.level = "easy";
  model.pictureUrl = "assets/images/card/class01.jpg";
  model.price = "500";
  return model;
}
@Component({
  props: {
    // userName: string
  }
})
export default class Card extends Vue {
  public model: ClassroomModel;
  // public model = createModel(this.name);
}
</script>

<style lang="css" scoped>
article {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
article section {
  margin: 0;
  margin-bottom: 30px;
}
article section a:hover {
  opacity: .5;
  transition: opacity 0.3s ease-out;
}
article section h3 {
  color: #272C32;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
}
article section p {
  color: #8A8C91;
}
</style>

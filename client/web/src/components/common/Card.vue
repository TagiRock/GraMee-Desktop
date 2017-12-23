<<<<<<< HEAD
<template lang="pug">
ul
  li
    a(href='class/detail.html')
      img(v-bind:src="model.pictureUrl")
    h3.class_name {{model.name}}
    p.ja {{model.user.name}}
=======
<template lang="html">
  <article>
    <section>
      <a href="class/detail.html"><img src="assets/images/card/class01.jpg"></a>
      <h3 class="class_name">JavaScriptを基礎から学ぶ教室</h3>
      <p class="ja">田木 一郎</p>
    </section>
  </article>
>>>>>>> 070eda72c20c855e3d80437315fb2f8cedebf344
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
<<<<<<< HEAD
  public model: ClassroomModel;
  // public model = createModel(this.name);
=======

>>>>>>> 070eda72c20c855e3d80437315fb2f8cedebf344
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
<<<<<<< HEAD
ul li a:hover {
  opacity: 0.5;
  transition: opacity 0.3s ease-out;
}
ul li h3 {
  color: #272c32;
=======
article section a:hover {
  opacity: .5;
  transition: opacity 0.3s ease-out;
}
article section h3 {
  color: #272C32;
>>>>>>> 070eda72c20c855e3d80437315fb2f8cedebf344
  font-size: 15px;
  font-weight: 500;
  margin: 0;
}
<<<<<<< HEAD
ul li p {
  color: #8a8c91;
=======
article section p {
  color: #8A8C91;
>>>>>>> 070eda72c20c855e3d80437315fb2f8cedebf344
}
</style>

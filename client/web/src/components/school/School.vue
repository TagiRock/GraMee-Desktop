<template lang="pug">
div.class_listbox
  a(href='/create')
    img.open_classbtn(src='assets/images/open_classbtn.svg',tag="button" to="/create" type='button',)
  img#first_view_image(v-bind:src="imageUrl") 
  div#genre_box
    vue-section-header
    vue-card

</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import VueCard from "../common/Card.vue";
import VueSection from "./Section.vue";
import VueSectionHeader from "./SectionHeader.vue";
import { ClassroomModel } from "domain/model/ClassroomModel";
import { UserModel } from "domain/model/UserModel";
import { Getter } from "vuex-class";
import { Getters } from "store/school";
import { SectionModel } from "domain/model/SectionModel";
function createUserModel(name: string): UserModel {
  const model = new UserModel();
  model.id = "1";
  model.name = name;
  model.email = "tesetmailadress";
  model.createAt = "asdkfja";
  return model;
}
@Component({
  components: {
    VueCard,
    VueSection,
    VueSectionHeader
  }
})
export default class School extends Vue {
  // @Getter(Getters.genre) public genre: string;
  // @Getter(Getters.level) public level: LevelType;
  public imageUrl = "assets/images/mainv/mainv01.jpg";
  public tmpUser1 = createUserModel("ユーザー1");
  public tmpUser2 = createUserModel("ユーザー2");
  public tmpUser3 = createUserModel("ユーザー3");
  public lists: SectionModel[] = [
    {
      name: "javascript",
      classrooms: [
        {
          user: this.tmpUser1,
          id: 1,
          name: "JavaScriptを学ぼう",
          description: "説明だよ",
          pictureUrl: "assets/images/mainv/mainv01.jpg",
          genre: "Web",
          language: "javascript",
          level: "easy",
          price: "500",
          rating: 5
        },
        {
          user: this.tmpUser2,
          id: 2,
          name: "PHPを学ぼう",
          description: "説明だよ",
          pictureUrl: "assets/images/mainv/mainv01.jpg",
          genre: "Web",
          language: "javascript",
          level: "easy",
          price: "500",
          rating: 5
        },
        {
          user: this.tmpUser3,
          id: 3,
          name: "CSSを学ぼう",
          description: "説明だよ",
          pictureUrl: "assets/images/mainv/mainv01.jpg",
          genre: "Web",
          language: "javascript",
          level: "easy",
          price: "500",
          rating: 5
        }
      ]
    },
    {
      name: "php",
      classrooms: [
        {
          user: this.tmpUser1,
          id: 4,
          name: "JavaScriptを学ぼう",
          description: "説明だよ",
          pictureUrl: "assets/images/mainv/mainv01.jpg",
          genre: "Web",
          language: "javascript",
          level: "easy",
          price: "500",
          rating: 5
        },
        {
          user: this.tmpUser2,
          id: 5,
          name: "PHPを学ぼう",
          description: "説明だよ",
          pictureUrl: "assets/images/mainv/mainv01.jpg",
          genre: "Web",
          language: "javascript",
          level: "easy",
          price: "500",
          rating: 5
        },
        {
          user: this.tmpUser3,
          id: 6,
          name: "CSSを学ぼう",
          description: "説明だよ",
          pictureUrl: "assets/images/mainv/mainv01.jpg",
          genre: "Web",
          language: "javascript",
          level: "easy",
          price: "500",
          rating: 5
        }
      ]
    }
  ];
}
</script>

<style lang="scss" scoped>
#first_view_image {
  width: 100%;
}
#genre_box {
  padding: 40px 5%;
}
.class_listbox {
  overflow: scroll;
  height: 100%;
}
.open_classbtn {
  position: absolute;
  right: 20px;
  width: 160px;
  bottom: 10px;
}
</style>

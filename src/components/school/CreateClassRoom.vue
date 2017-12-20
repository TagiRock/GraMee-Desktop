<template lang="pug">
.open_classbox
  form
    a.upload_img(href='#')
      img(src='assets/images/open_class/upload.svg', alt='')
    #open_class_form
      .class_name
        label(for='') 教室名を入力
        input(v-model="model.name", type='text', required, placeholder="Javascript入門")
      .class_txt
        label(for='') 教室の説明文
        textarea(v-model="model.description", rows='8', cols='80', placeholder="初めての方でも安心！Web上で動く簡単なプログラムを書いてみましょう")
      .genre_select
        label(for='') ジャンルを選ぶ
        v-select(v-model='model.genre', :options="['web']")
      .language_select
        label(for='') 言語を選ぶ
        v-select(v-model='model.language', :options="['html','css','javascript','php']")
      .level_select
        label(for='') レベルを選ぶ
        v-select(v-model="model.level", :options="['easy','normal','hard']")
      .price
        label(for='') 価格
        input(v-model="model.price", type="number", min='500', max='50000', @change="calculateMoney()")
      ul.all_price
        li
          | 授業料手数料
          span ¥{{fee}}
        li.profits
          | 授業料利益
          span ¥{{sum}}
  .btnbox.cf
    button.cancel(type='button', name='button', @click="clickCancel()") キャンセル
    button.open_btn(type='submit', name='button', @click="clickTransmit()") 開講する

</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { ClassroomModel } from "domain/model/ClassroomModel";
import { ClassroomUseCase } from "domain/usecase/ClassroomUseCase";

@Component
export default class CreateClassroom extends Vue {
  public model = new ClassroomModel();
  public useCase = new ClassroomUseCase();
  public fee = 0;
  public sum = 0;
  public rate = 10;


  
  public clickCancel() {
    // console.log("cancel");
  }

  public calculateMoney() {
    this.fee =  Math.floor(Number(this.model.price) / 100 * this.rate);
    this.sum = Number(this.model.price) - this.fee;
  }
  public clickTransmit() {
    // console.log("transmit");
    console.log(this.model.name);
    console.log(this.model.description);
    console.log(this.model.genre);
    console.log(this.model.language);
    console.log(this.model.level);
  }

  /*
    clik usecese valudate →　post
  */
}
</script>

<style lang="css" scoped>
.open_classbox {
  background: #fff;
  border-radius: 6px;
  margin: 0 auto;
  padding: 40px 0;
  width: 80%;
}
.open_classbox form {
  display: flex;
  justify-content: center;
}
label {
  color: #575a61;
  display: inline-block;
  font-size: 15px;
  width: 135px;
}
input {
  border: 1px solid #cecece;
  border-radius: 50px;
  font-size: 15px;
  outline: none;
  padding: 10px 20px;
  width: 418px;
}
input:focus {
  border: 1px solid #f7745d;
  box-shadow: none;
}
.class_name,
.class_txt,
.genre_select,
.language_select,
.level_select,
.price {
  margin: 0 0 20px;
}
.class_txt textarea {
  border: 1px solid #cecece;
  border-radius: 15px;
  vertical-align: top;
  width: 454px;
}
.genre_select a,
.language_select a,
.level_select a {
  border: 1px solid #cecece;
  border-radius: 50px;
  display: inline-block;
  padding: 7px 20px;
  vertical-align: middle;
  width: 418px;
}
.genre_select i,
.language_select i,
.level_select i {
  color: #575a61;
  float: right;
}
.all_price {
  margin: 30px 0 0;
  width: 595px;
}
.all_price li {
  color: #575a61;
  font-size: 14px;
  margin: 0 0 20px;
  text-align: right;
}
.all_price li span {
  margin: 0 0 0 200px;
}
.all_price .profits {
  color: #272c32;
  font-size: 20px;
  font-weight: bold;
}
.upload_img {
  height: 230px;
  margin: 0 40px 0 0;
  width: 230px;
}
.btnbox {
  display: flex;
  justify-content: center;
  margin: 20px 0 0;
}
button {
  border-radius: 50px;
  color: #fff;
  font-size: 21px;
  font-weight: bold;
  margin: 0 10px;
  outline: none;
  padding: 5px;
  width: 200px;
}
.cancel {
  background: #575a61;
}
.open_btn {
  background: #f7745d;
}

.v-select {
  border-radius: 50px;
}

/* .dropdown */
</style>

<template lang="pug">
#details
  // 商品詳細
  #class_detail
    #panav
      .col.s12
        a.breadcrumb(href='#') WEB
        a.breadcrumb(href='#') Easy
        a.breadcrumb(href='#') HTML
        a.breadcrumb {{model.name}}
    #class_detail_box
      #class_detail_left
        img(src='img/class/class01.jpg', alt='')
        #star_rating
          #star_rating_front(style='width: 90%') ★★★★★
          #star_rating_back ★★★★★
          span (4.3)
        p.date.ja 2017 11.29 開講
      #class_detail_right
        h2.class_name {{model.name}}
        #price_box
          button(type='button', name='favorite')
            v-icon favorite_border
          span#price
            span.tax.ja (税込)
            | ￥{{model.price}}
        ul#class_detail_txt
          li
            a.active.ja(href='#') 教室説明
          li
            a(href='#') Review
          li
            a(href='#') Comment
        #txt_box
          #detail_txt.ja  {{model.description}}
            #tag
              span.en
                v-icon local_offer
                | {{model.genre}}
              span.en
                v-icon local_offer
                | {{model.language}}
              span.en
                v-icon local_offer
                | {{model.level}}
          //
            <ul id="review">
            <li></li>
            </ul>
            <ul id="comment">
            <li></li>
            </ul>
        #buy
          a.cancel_btn.ja(href='#', @click="clickCancel()") キャンセル
          a.buy_btn.ja(href='#', @click="clickTakeClassroom()") 受講する

</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

import { ClassroomModel } from "domain/model/ClassroomModel";
import { ClassroomUseCase } from "domain/usecase/ClassroomUseCase";

function createModel(): ClassroomModel {
  const model = new ClassroomModel();
  model.name = "Jquery入門";
  model.description = "説明だよ説明だよ説明だよ説明だよ説明だよ";
  model.genre = "Web";
  model.language = "javascript";
  model.level = "easy";
  model.price = "500";
  //開設日も欲しい
  return model;
}

@Component
export default class Classroom extends Vue {
  public model = createModel(); //テスト用のモデルを作成し初期化
 
  public clickCancel() {
    //前のページに戻る処理
    console.log("clickCancel!");
  }

  public clickTakeClassroom() {
    //受講するメソッド
    console.log("clickTakeClassroom!");
  }
}
</script>

<style lang="css" scoped>
#panav {
  margin: 0 0 20px;
}
#panav a {
  color: #808798;
  font-size: 16px;
  font-weight: 100;
}
#panav a:last-child {
  color: #272c32;
}
.breadcrumb:before {
  color: #808798;
  vertical-align: middle;
}
/* -- パンくずリスト -- */

/* 教室詳細ページ */
#details {
  display: flex;
  height: 100%;
  width: 100%;
}
#class_detail {
  padding: 25px 60px;
  width: 80%;
}
#account_detail {
  background: #272c32;
  height: 100%;
  padding: 40px 25px;
  position: relative;
  width: 310px;
}
#account_detail::after {
  background: -moz-linear-gradient(
    top,
    rgba(30, 87, 153, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(30, 87, 153, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(30, 87, 153, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  bottom: 0;
  content: "";
  height: 260px;
  left: 0;
  position: absolute;
  width: 310px;
}
#class_detail_box {
  display: flex;
}
#class_detail_left {
  margin: 0 30px 0 0;
}
#class_detail_right h2 {
  margin: 0 0 60px;
}
#price_box {
  margin: 0 0 30px;
  text-align: right;
}
#price_box i {
  font-size: 40px;
  vertical-align: bottom;
}
#price {
  font-size: 40px;
  font-weight: 600;
}
#price .tax {
  font-size: 14px;
  font-weight: normal;
}
#class_detail_txt {
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  margin-bottom: 20px;
}
#class_detail_txt li {
  margin-bottom: 5px;
  width: 100px;
}
#class_detail_txt li a {
  color: #808798;
}
#class_detail_txt li .active {
  color: #272c32;
  font-weight: bold;
}
#txt_box {
  margin: 0 0 60px;
}
#detail_txt {
  font-size: 16px;
}
#tag {
  color: #575a61;
  margin: 20px 0;
}
#tag span {
  margin: 0 20px 0 0;
}
#tag span i {
  vertical-align: middle;
}

/* 受講ボタン・キャンセルボタン */
#buy {
  text-align: right;
}
.buy_btn {
  background: #f7745d;
  border-radius: 50px;
  color: #fff;
  display: inline-block;
  font-size: 21px;
  padding: 5px 0;
  text-align: center;
  width: 200px;
}
.cancel_btn {
  background: #575a61;
  border-radius: 50px;
  color: #fff;
  display: inline-block;
  font-size: 21px;
  margin: 0 20px 0 0;
  padding: 5px 0;
  text-align: center;
  width: 200px;
}
/* -- 受講ボタン・キャンセルボタン -- */

/* レーティング */
#star_rating {
  display: -webkit-inline-box;
  font-size: 20px;
  letter-spacing: 5px;
  position: relative;
  width: 120px;
}
#star_rating span {
  font-size: 14px;
  font-weight: 100;
  letter-spacing: normal;
  margin: 0 0 0 5px;
}
#star_rating_front {
  color: #ffcc33;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
}
#star_rating_back {
  color: #eee;
}
/* -- レーティング -- */

/* 開講日 */
#class_detail_left .date {
  color: #808798;
  font-size: 13px;
}
/* -- 開講日 --  */

/* 開講者アカウント */
#account img {
  float: left;
  margin: 0 20px 0 0;
}
#account_top {
  margin: 0 0 40px;
  padding: 10px 0 0;
}
#account_top .account_name {
  color: #c7c7c7;
  display: block;
  font-size: 18px;
  margin-bottom: 7px;
}
#assessment {
  color: #575a61;
  display: flex;
}
#assessment p {
  font-size: 17px;
  margin: 0 15px 0 0;
  padding: 4px 0 0;
}
#assessment p i {
  font-size: 17px;
  margin: 0 5px 0 0;
  vertical-align: text-top;
}
#assessment .add_account {
  color: #c7c7c7;
  margin: 0 0 0 5px;
}
#prof_txt {
  color: #646a71;
  font-size: 13px;
  font-weight: 100;
  margin: 0 0 40px;
}
#prof_class_box {
  height: 340px;
  overflow: scroll;
}
.img_x2 {
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px;
}
.prof_class {
  height: 100%;
  width: 46%;
}
.prof_class img {
  width: 100%;
}
.prof_class p,
.img_x1 p {
  color: #646a71;
  font-size: 13px;
  font-weight: 100;
}
.img_x1 {
  margin: 0 0 20px;
}
.img_x1 img {
  width: 100%;
}
</style>

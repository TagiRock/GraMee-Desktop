<template lang="pug">
doctype html
html
  head
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width, initial-scale=1.0')
    title GraMee
    link(href='https://fonts.googleapis.com/icon?family=Material+Icons', rel='stylesheet')
    link(href='https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800', rel='stylesheet')
    link(type='text/css', rel='stylesheet', href='css/materialize.min.css', media='screen,projection')
    link(rel='stylesheet', href='style.css')
  body
    #content
      #content_right
        main
          // ここからコピペ
          #genre_box
            #select_nav
              ul#genre_active
                li
                  a.active(href='#') WEB
                li
                  a(href='#') APP
                li
                  a(href='#') GAME
              #level_active
                a.dropdown-button.btn.ja(href='#', data-activates='dropdown1')
                  | Level選択
                  v-icon keyboard_arrow_down
                ul#dropdown1.dropdown-content
                  li
                    a(href='#!') Easy
                  li
                    a(href='#!') Midle
                  li
                    a(href='#!') Hard
          // ここまでコピペ

</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class GenreLevelSelectNav extends Vue {
}
</script>

<style lang="css" scoped>
#select_nav {
  border-bottom: 1px solid #DBDBDB;
  display: flex;
  justify-content: center;
}
#genre_active,#level_active {
  display: flex;
  justify-content: space-between;
  padding: 13px 0;
}
#genre_active {
  margin-right: 20px;
}
#genre_active li {
  margin: 0 10px;
}
#genre_active li a {
  color: #575A61;
  display: block;
  font-size: 14px;
  padding: 5px 16px;
}
#genre_active li .active {
  background: #F7745D;
  border-radius: 6px;
  color: #fff;
}
#level_active .dropdown-button {
  background: none;
  border: 1px solid #DBDBDB;
  border-radius: 6px;
  box-shadow: none;
  color: #575A61;
  font-size: 14px;
  height: auto;
  line-height: normal;
  padding: 5px 16px;
}
#level_active .dropdown-button i {
  float: right;
  font-size: 21px;
  margin-left: 8px;
}
#dropdown1 {
  border-radius: 2px;
}
.dropdown-content li>a, .dropdown-content li>span {
  color: #575A61;
}
.dropdown-content li:hover, .dropdown-content li.active, .dropdown-content li.selected {
  background: #F1F1F1;
}
</style>
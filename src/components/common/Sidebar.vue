<template lang="pug">
nav
  ul
    li
      img(alt='プロフィール画像')
    li(v-for="item in items" @click="clickSidebarItem(item)" :class='{active:item.active}' )
      md-icon(medium) {{item.iconName}}
      | {{ item.type}}
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { SidebarItemType } from "domain/model/SidebarItemType";
import { SidebarState } from "store/app/state";
import { Actions, Getters } from "store/app";
import { Dispatcher } from "vuex-type-helper";
import { Getter, Action } from "vuex-class";
@Component
export default class Sidebar extends Vue {
  @Getter(Getters.sidebars) public items: SidebarState[];
  @Action(Actions.selectSidebarItem)
  public action: (payload: { item: SidebarState }) => void;
  public clickSidebarItem(item: SidebarState) {
    this.action({ item: item });
  }
}
</script>

<style lang="scss" scoped>
nav {
  background: #272c32;
  padding: 20px 0 0;
  height: 100%;
}

ul {
  padding: 0;
  border: none;
  margin-top: 30%;
}

li {
  color: #575a61;
  font-size: 13px;
  padding: 15px 12px;
  text-align: center;
  display: block;
  margin-bottom: 30px;
}

.md-icon {
  display: block;
}

ul .active {
  background: none;
  color: #fff;
  position: relative;
}
ul .active .md-icon {
  color: #f7745d;
}

ul .active::before {
  background: #f7745d;
  border-radius: 20px;
  content: "";
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 2px;
}
</style>

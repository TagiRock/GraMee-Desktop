<template lang="pug">
nav
  ul
    li
      img(alt='プロフィール画像')
    li(v-for="item in items" @click="clickSidebarItem(item)" :class='{active:item.isActive}' )
      md-icon {{item.iconNeme}}
      | {{ item.type}}
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Sidebar extends Vue {
  public items: [ISidebarItem] = [
    {
      type: SidebarItemType.School,
      iconNeme: "school",
      isActive: true
    },
    {
      type: SidebarItemType.Home,
      iconNeme: "home",
      isActive: false
    },
    {
      type: SidebarItemType.Message,
      iconNeme: "textsms",
      isActive: false
    },
    {
      type: SidebarItemType.Favorite,
      iconNeme: "favorite",
      isActive: false
    },
    {
      type: SidebarItemType.Setting,
      iconNeme: "settings",
      isActive: false
    }
  ];

  public clickSidebarItem(selected: ISidebarItem) {
    for (const item of this.items) {
      item.isActive = false;
    }
    selected.isActive = true;
  }
}
interface ISidebarItem {
  type: SidebarItemType;
  iconNeme: string;
  isActive: boolean;
}
enum SidebarItemType {
  School = "School",
  Home = "Home",
  Message = "Message",
  Favorite = "Favorite",
  Setting = "Setting"
}
</script>

<style lang="scss" scoped>
nav {
  background: #272c32;
  padding: 20px 0 0;
  height: 100%;
  width: 100%;
}
ul {
  padding: 0;
  border: none;
  margin: 0;
}

li {
  color: #575a61;
  font-size: 13px;
  padding: 15px 12px;
  text-align: center;
  display: block;
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

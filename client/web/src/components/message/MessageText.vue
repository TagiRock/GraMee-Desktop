<template lang="pug">
div
  ul
    li(v-for='list in lists') {{list}}
    button(type='button', @click="add()") add

</template>
 
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

export class MessageTextModel {
  public userId: number;
  public text: string;
}
function createModel(id: number, txt: string): MessageTextModel {
  const model = new MessageTextModel();
  model.userId = id;
  model.text = txt;
  return model;
}

@Component
export default class MessageText extends Vue {
  public sampleText: string = "SAMPLE";
  public pushText: string = "";
  public sampleLists: MessageTextModel[] = [
    {
      userId: 1, 
      text: "りんご"
    },
    {
      userId: 2,
      text: "バナナ"
    },
    {
      userId: 1,
      text: "パイナップル"
    },
    {
      userId: 1,
      text: "みかん"
    },
    {
      userId: 2,
      text: "終わり"
    }
  ];
  public lists: string[] = ["りんご", "バナナ", "パイナップル", "スイカ", "いちご"];
  public user1 = createModel(1, "ユーザー1だよ");
  public user2 = createModel(2, "ユーザー2だよ");
  public message = new MessageTextModel();
  public count: number = 0;
  public add() {
    if (this.sampleLists[this.count].userId === 1) {
      this.pushText = this.sampleLists[this.count].text;
    } else {
      this.pushText = "Use2だよ";
    }
    this.count++;
    this.lists.push(this.pushText);
  }
}
</script>

<style lang="css" scoped>
.message_text {
  border-radius: 10px 10px 0 10px;
  padding: 10px;
  background: #ed725b;
  color: #fff;
}
li.teacher {
}
</style>
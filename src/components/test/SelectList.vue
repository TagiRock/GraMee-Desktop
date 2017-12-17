<!--<template lang="pug">
div
  div
    ul.item-list.is-border
      li(v-for='item in selectItems')
        | {{ item.name }}
        a.delete-btn(@click='onDeleteItem(item)') X
    button.btn(@click='isModal = true') アイテム選択
  transition(name='modal', v-if='isModal')
    .overlay(@click='isModal = false')
      .panel(@click.stop='')
        h3 アイテムを選択してください
        .scroll-box
          ul.item-list
            li(v-for='item in filteredItems', @click='onSlectItem(item)')
              | {{ item.name }}
        button.btn(@click='isModal = false') 閉じる

</template>-->
<template lang="pug">
div
  div
    ul.item-list.is-border
      li(v-for='item in selectItems')
        | {{ item.name }}
        a.delete-btn(@click='onDeleteItem(item)') X
    button.btn(@click='isModal = true') アイテム選択
  transition(name='modal', v-if='isModal')
    .overlay(@click='isModal = false')
      .panel(@click.stop='')
        h3 アイテムを選択してください
        .scroll-box
          ul.item-list
            li(v-for='item in filteredItems', @click='onSlectItem(item)')
              | {{ item.name }}
        button.btn(@click='isModal = false') 閉じる
//- body
//-     .cartbox
//-         form(action='index.html', method='post')
//-         .typebox
//-             label(for='') E-mail Address
//-             input(type='text', name='', value='')
//-         .typebox
//-             label(for='') Password
//-             input(type='text', name='', value='')
//-         .class
//-             img(src='assets/images/buy/class/class01.jpg', alt='')
//-             h2.class_name EnterClassTitle. EnterClassTitle.
//-             #tag
//-             span.en
//-                 v-icon local_offer
//-                 | WEB
//-             span.en
//-                 v-icon local_offer
//-                 | HTML
//-             span.en
//-                 v-icon local_offer
//-                 | Easy
//-             span#price
//-             span.tax.ja 税込
//-             | ￥1,600
//-         .btnbox.cf
//-             button.cancel(type='button', name='button') キャンセル
//-             button.buy(type='button', name='button') 受講を確定
//-         .help
//-         p お支払いは授業後に確定されます
//-         v-icon help_outline

</template>

<script>

    export default {
        props: ['setSelectItems'],
        mounted() {
            for (var i=1; i<=100; i++) {
                this.items.push({
                    id: i,
                    name: 'item' + i
                });
            }
        },
        data() {
            return {
                isModal: false,     // Modal表示フラグ
                items: [],          // すべてのアイテム
                selectItems: this.setSelectItems    // 選択したアイテム
            }
        },
        methods: {
            // アイテムを選択
            onSlectItem(item) {
                this.selectItems.push({
                    'id': parseInt(item.id),
                    'name': item.name
                });
                this.isModal = false;
            },
            // アイテムを削除
            onDeleteItem(item) {
                let index = this.selectItems.indexOf(item);
                this.selectItems.splice(index, 1);
            }
        },
        computed: {
            // 選択されているオプションは非表示
            filteredItems() {
                let data = this.items;
                let selects = this.selectItems;
     
                data = data.filter(function (row) {
                    for (var i=0; i<selects.length; i++) {
                        if (selects[i].id == row['id']) {
                            return false;
                            break;
                        }
                    }
                    return true;
                });
                return data;
            }
        }
    }

</script>

<style lang="scss">
.overlay {
    background: rgba(0, 0, 0, .8);
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 900;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
 
}
 
.panel {
    width: 600px;
    height: 400px;
    background: #fff;
    padding: 20px;
 
    h3 {
        margin-bottom: 10px;
    }
}
 
.scroll-box {
    height: 300px;
    overflow-y: auto;
    margin-bottom: 20px;
    border: solid 1px #bbb;
}
.item-list {
    list-style: none;
    padding: 0;
 
    &.is-border {
        border: solid 1px #bbb;
        margin-bottom: 20px;
    }
 
    li {
        border-top: solid 1px #bbb;
        margin-top: -1px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
 
        &:first-child {
            border-top: none;
        }
    }
}
.btn {
    width: 100%;
    padding: 15px;
    border: none;
    background: #eee;
}
</style>

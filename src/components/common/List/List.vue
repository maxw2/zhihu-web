<template>
  <div class="common-list" ref="list">
    <list-title :listData="listData" v-if="type !== 1"></list-title>
    <list-author :listData="listData" :collapse="type === 1 ? false :collapse"></list-author>
    <list-col-content v-if="type !== 1" :listData="listData" :collapse="collapse" v-on:collapse="setCollapse"></list-col-content>
    <list-rich-content v-else :listData="listData" :collapse="collapse" v-on:collapse="setCollapse"></list-rich-content>
    <list-action
      ref="action"
      :listData="listData"
      :collapse="collapse"
      v-on:collapse="setCollapse"
      v-on:comment="setComment"
    ></list-action>
    <list-action
      v-if="actionFixed"
      ref="actionFixed"
      :actionFixed="actionFixed"
      :listData="listData"
      :collapse="collapse"
      v-on:collapse="setCollapse"
      v-on:comment="setComment"
    ></list-action>
    <comment v-if="comment" :replyId="listData.replyId"></comment>
  </div>
</template>
<script>
import ListTitle from "./ListTitle";
import ListAuthor from "./ListAuthor";
import ListColContent from "./ListColContent";
import ListRichContent from "./ListRichConten";
import ListAction from "./ListAction";
import Comment from "./Comment/Comment";

export default {
  components: {
    ListTitle,
    ListAuthor,
    ListColContent,
    ListRichContent,
    ListAction,
    Comment
  },
  props: {
    listData: Object,
    type: Number,
    open:Boolean
  },
  data() {
    return {
      collapse: true,
      comment: false,
      throttleScroll: null,
      actionFixed: false
    };
  },
  mounted() {
    if(this.open) {
      this.collapse = false
    }else{
      this.collapse = true
    }
  },

  updated() {
    if (!this.collapse && !this.throttleScroll) {
      this.throttleScroll = this.throttle(this.scroll, 50);
      window.addEventListener("scroll", this.throttleScroll);
    } else if (this.collapse && this.throttleScroll) {
      window.removeEventListener("scroll", this.throttleScroll);
      this.actionFixed = false;
      this.throttleScroll = null;
    }
  },
  methods: {
    setCollapse() {
      this.collapse = !this.collapse;
    },
    setComment() {
      this.comment = !this.comment;
    },
    throttle(fn, time) {
      let previous = 0;
      return function() {
        let now = Date.now();
        if (now - previous > time) {
          previous = now;
          fn();
        }
      };
    },
    scroll() {
      let listEl = this.$refs.list;
      let actionEl = this.$refs.action.$el;
      let actionRect = actionEl.getBoundingClientRect();
      let listRect = listEl.getBoundingClientRect();
      // 大于上边距
      if (listRect.y > 0) {
        // console.log("top");
        this.actionFixed = false;
      }
      // // 大于下边距
      else if (actionRect.y - document.documentElement.clientHeight < 0) {
        // console.log("bottom");
        this.actionFixed = false;
      } else {
        // console.log("inside");
        if (!this.actionFixed) {
          this.actionFixed = true;
          return;
        }
        let actionEl = this.$refs.action.$el;
        let fixedEl = this.$refs.actionFixed.$el;
        fixedEl.style.position = "fixed";
        fixedEl.style.bottom = "0px";
        fixedEl.style.width = actionEl.clientWidth + "px";
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.common-list {
  background: #fff;
  user-select: none;
  position: relative;
  padding: 16px 20px;
  text-align: left;
  border-bottom: 1px solid #f0f2f7;
}
</style>
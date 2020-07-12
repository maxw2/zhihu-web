<template>
  <div class="comment-content">
    <div class="title">
      <span>{{`评论 (${contentList.length})`}}</span>
    </div>
    <ul class="content">
      <li class="list" v-for="(val,index) in contentList" :key="index">
        <comment-list :listData="val"></comment-list>
      </li>
    </ul>
  </div>
</template>
<script>
import CommentList from "./CommentList";

export default {
  components: {
    CommentList
  },
  props: {
    contentList: Array
  }
};
</script>
<style lang="scss" scoped>
.comment-content {
  .title {
    font-size: 14px;
    font-weight: 600;
    color: grey;
    background: #f6f6f6;
    padding: 10px 20px;
  }
  .content {
    margin: 0px;
    padding: 0px;
    list-style: none;
  }
}
</style>
<template>
  <div class="comment-hot" v-if="hotList">
    <div class="title">
      <span>{{`精选评论 (${hotList.length})`}}</span>
    </div>
    <ul class="content">
      <li class="list" v-for="(val,index) in hotList" :key="index">
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
    hotList: Array
  }
};
</script>
<style lang="scss" scoped>
.comment-hot {
  .title {
    font-size: 14px;
    font-weight: 600;
    color: grey;
    background: #f6f6f6;
    padding: 10px 20px;
  }
  .content{
      margin: 0px;
      padding: 0px;
      list-style: none;
  }
}
</style>
<template>
  <div class="list-comment-title">
      <span class="left">{{`${commentList.len}条评论`}}</span>
      <span class="right">切换为时间排序</span>
  </div>
</template>
<script>
export default {
  props: {
    commentList: Object
  }
};
</script>
<style lang="scss" scoped>
.list-comment-title{
  height: 50px;
  background: #fff;
  padding: 0 20px;
  .left{
    line-height: 50px;
    font-size: 15px;
    font-weight: 600;
    color: #1a1a1a;
  }
  .right{
    float: right;
    line-height: 50px;
  }
}
</style>
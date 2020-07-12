<template>
  <div class="list-author" v-if="!collapse">
    <span class="authorImg">
      <img :src="listData.authorImg" />
    </span>
    <div class="authorContent">
      <div class="authorName">
        <span class="name">{{listData.authorName}}</span>
        <span v-if="listData.authorBadge">
          <badge></badge>
        </span>
      </div>
      <p class="authorInfo">{{listData.authorInfo}}</p>
    </div>
    <p class="list-like">{{`${listData.like}人赞同了该答案`}}</p>
  </div>
</template>
<script>
import Badge from "../Badge/Badge";

export default {
  components: {
    Badge
  },
  props: {
    listData: Object,
    collapse:Boolean,
  },
};
</script>
<style lang="scss" scoped>
// 作者
.list-author {
  margin-top: 10px;
  .authorImg {
    float: left;
    display: inline-block;
    width: 38px;
    height: 38px;
    overflow: hidden;
    border-radius: 2px;
    background: #f6f6f6;
    img {
      width: 100%;
    }
  }
  .authorContent {
    margin-left: calc(14px + 38px);
    p {
      margin: 0px;
    }
    .authorName {
      .name {
        vertical-align: text-bottom;
        margin-right: 5px;
        font-size: 15px;
        font-weight: 600;
      }
    }
    .authorInfo {
      margin-top: -5px;
      font-size: 14px;
    }
  }
}
// 赞同
.list-like {
  font-size: 14px;
  margin-top: 10px;
  color: #8590a6;
}
</style>
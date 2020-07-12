<template>
  <div class="comment-list">
    <div class="title">
      <div class="user">
        <div class="user-img">
          <img :src="listData.userImg" />
        </div>
        <div class="user-name">{{listData.userName}}</div>
      </div>
      <div class="date">
        <span>{{listData.date}}</span>
      </div>
    </div>
    <div class="content">{{listData.content}}</div>
    <div class="icon">
      <span class="like">
        <span>
          <like />
        </span>
        <span>{{listData.like}}</span>
      </span>
      <span class="comment">
        <span>
          <comment />
        </span>
        <span>查看回复</span>
      </span>
      <span class="reply hover-icon">
        <span>
          <reply />
        </span>
        <span>回复</span>
      </span>
      <span class="nolike hover-icon">
        <span>
          <like />
        </span>
        <span>踩</span>
      </span>
      <span class="report hover-icon">
        <span>
          <report />
        </span>
        <span>举报</span>
      </span>
    </div>
  </div>
</template>
<script>
import like from "./image/like";
import comment from "./image/comment";
import reply from "./image/reply";
import report from "./image/report";

export default {
  components: {
    like,
    comment,
    reply,
    report
  },
  props: {
    listData: Object
  }
};
</script>
<style lang="scss" scoped>
.comment-list {
  padding: 12px 20px 10px;
  font-size: 15px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    .user {
      display: flex;
      align-items: center;
      .user-img {
        width: 24px;
        height: 24px;
        background: #e2e2e2;
        margin-right: 8px;
        img {
          height: 100%;
        }
      }
    }
    .date {
      font-size: 14px;
      color: #8590a6;
    }
  }
  .content {
    padding-left: 33px;
    margin-bottom: 8px;
  }
  .icon {
    padding-left: 33px;
    font-size: 14px;
    color: #8590a6;
    > span {
      margin-right: 20px;
      span {
        vertical-align: top;
      }
    }
    .hover-icon{
      display: none;
    }
  }
  
}
.comment-list:hover .hover-icon{
    display: inline-block;
  }
</style>
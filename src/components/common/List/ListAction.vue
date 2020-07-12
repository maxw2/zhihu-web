<template>
  <div class="list-action" >
    <div class="like">
      <div class="up">
        <span class="glyphicon glyphicon-triangle-top"></span>
        <span>{{`赞同 ${listData.like}`}}</span>
      </div>
      <div class="down">
        <span class="glyphicon glyphicon-triangle-bottom"></span>
      </div>
    </div>
    <div class="comment" v-on:click="$emit('comment')">
      <span class="glyphicon glyphicon-comment"></span>
      <span>30 条评论</span>
    </div>
    <div class="share">
      <span class="glyphicon glyphicon-send"></span>
      <span>分享</span>
    </div>
    <div class="star">
      <span class="glyphicon glyphicon-star"></span>
      <span>收藏</span>
    </div>
    <div class="agree">
      <span class="glyphicon glyphicon-heart"></span>
      <span>喜欢</span>
    </div>
    <list-action-more></list-action-more>
    <div class="button" v-if="!collapse" v-on:click="$emit('collapse')">
      收起
      <span class="glyphicon glyphicon-menu-up"></span>
    </div>
  </div>
</template>
<script>
import ListActionMore from "./ListActionMore";

export default {
  components: {
    ListActionMore
  },
  props: {
    listData: Object,
    collapse: Boolean,
    actionFixed: Boolean
  }
};
</script>
<style lang="scss" scoped>
.list-action {
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  background: #fff;
  // 赞同
  .like {
    display: flex;
    .glyphicon {
      font-size: 11px;
      padding: 0 10px;
    }
    .up {
      cursor: pointer;
      padding-right: 10px;
      height: 34px;
      border-radius: 3px;
      line-height: 34px;
      color: #0084ff;
      background: rgba(0, 132, 255, 0.1);
    }
    .down {
      cursor: pointer;
      margin-left: 4px;
      border-radius: 3px;
      height: 34px;
      line-height: 34px;
      color: #0084ff;
      background: rgba(0, 132, 255, 0.1);
    }
  }
  //
  .comment,
  .share,
  .star,
  .agree,
  .more,
  .button {
    cursor: pointer;
    margin-left: 24px;
    line-height: 34px;
    color: #8590a6;
    .glyphicon {
      vertical-align: text-top;
    }
    span:nth-child(2) {
      margin-left: 6px;
    }
  }
  .button {
    position: absolute;
    right: 0px;
    span {
      font-size: 12px;
    }
  }
  .like {
    .up:hover {
      background: rgba(0, 132, 255, 0.15);
    }
    .down:hover {
      background: rgba(0, 132, 255, 0.15);
    }
  }
  .comment:hover {
    color: #76839b;
  }
  .share:hover {
    color: #76839b;
  }
  .star:hover {
    color: #76839b;
  }
  .agree:hover {
    color: #76839b;
  }
  .more:hover {
    color: #76839b;
  }
  .button:hover {
    color: #76839b;
  }
}
</style>
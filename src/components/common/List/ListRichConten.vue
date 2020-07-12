<template>
  <div class="list-rich-content">
    <div class="collapsed" v-if="collapse" v-on:click="$emit('collapse')">
      <div class="rich-content" v-html="listData.richContent"></div>
      <span class="button">
        展开阅读全文
        <span class="glyphicon glyphicon-menu-down"></span>
      </span>
    </div>
    <div v-else>
      <span v-html="listData.richContent"></span>
      <p class="date">{{`发布于 ${listData.date}`}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    listData: Object,
    collapse: Boolean
  }
};
</script>
<style lang="scss" scoped>
.list-rich-content {
  margin-top: 10px;
  font-size: 15px;
  line-height: 1.67;
  color: #1a1a1a;

  .collapsed {
    position: relative;
    max-height: 400px;
    overflow: hidden;
    cursor: pointer;

    .rich-content {
      max-height: 400px;
      -webkit-mask-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#1a1a1a),
        to(transparent)
      );
    }
    .button {
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 50px;
      z-index: 1;
      display: inline-block;
      margin-left: 4px;
      color: #175199;
      font-size: 15px;
      cursor: pointer;
      text-align: center;
      span {
        font-size: 12px;
      }
    }
    .button:hover {
      color: #646464;
    }
  }
  .date {
    margin: 10px 0 0 0;
    font-size: 14px;
    color: #8590a6;
  }
  .collapsed:hover {
    color: #646464;
  }
}
</style>
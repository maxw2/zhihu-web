<template>
  <div class="list-col-content">
    <div class="collapsed" v-if="collapse" v-on:click="$emit('collapse')">
      <span v-html="listData.colContent"></span>
      <span class="button">
        全文显示
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
    collapse:Boolean
  }
};
</script>
<style lang="scss" scoped>
// 内容
.list-col-content {
  margin-top: 10px;
  font-size: 15px;
  line-height: 1.67;
  color: #1a1a1a;
  .date{
    margin:10px 0 0 0;
    font-size: 14px;
    color: #8590a6;
  }
  .collapsed {
    max-height: 100px;
    overflow: hidden;
    cursor: pointer;
    .button {
      display: inline-block;
      margin-left: 4px;
      color: #175199;
      font-size: 14px;
      cursor: pointer;
      span {
        font-size: 12px;
      }
    }
    .button:hover {
      color: #646464;
    }
  }
  .collapsed:hover {
    color: #646464;
  }
}
</style>
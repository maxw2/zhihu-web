<template>
  <router-link :to="`/question/${listData.questionId}`">
    <span class="list-question">{{listData.question}}</span>
  </router-link>
</template>
<script>
export default {
  props: {
    listData: Object,
    type:Number
  }
};
</script>
<style lang="scss" scoped>
// 标题
span {
  margin: 0px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}
span:hover {
  color: #175199;
}
</style>
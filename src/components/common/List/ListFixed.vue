<template>
  <div class="list-fixed">
      <list-action :listData="listData" :collapsed="collapsed"></list-action>
  </div>
</template>
<script>
import ListAction from "./ListAction";

export default {
  components: {
    ListAction
  },
  props: {
    listData: Object,
    collapsed: Boolean
  }
};
</script>
<style lang="scss" scoped>
</style>
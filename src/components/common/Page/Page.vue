<template>
  <div class="common-page">
    <div class="prev" v-on:click="onClickPrev">上一页</div>
    <page-content :pageCount="getPageCount" :pageNow="pageNow" v-on:page-chang="changePage"></page-content>
    <div class="next" v-on:click="onClickNext">下一页</div>
  </div>
</template>
<script>
import PageContent from "./PageContent";

export default {
  components: {
    PageContent
  },
  props: {
    pageSize: Number, // 每页显示条数
    total: Number // 总条目数
  },
  data() {
    return {
      pageNow: 1 // 当前页数
    };
  },
  methods: {
    onClickPrev() {
      if (this.pageNow <= 1) return;
      this.pageNow--;
    },
    onClickNext() {
      if (this.pageNow >= this.total / this.pageSize) return;
      this.pageNow++;
    },
    changePage(ev){
        this.pageNow = ev
    }
  },
  computed: {
    getPageCount() {
      return this.total / this.pageSize;
    }
  },
  watch: {
    pageNow() {
      this.$emit("current-change", this.pageNow);
    }
  }
};
</script>
<style lang="scss" scoped>
.common-page {
  display: flex;
  font-size: 13px;
  user-select: none;
  cursor: pointer;
  .prev,
  .next {
    padding: 10px;
  }
  .content {
    flex: 1;
  }
}
</style>
<template>
  <ul class="content">
    <li v-for="val in getPageArr" :key="val" :class="{'action':pageNow === val}" v-on:click="$emit('page-chang',val)">{{val}}</li>
  </ul>
</template>
<script>
export default {
  props: {
    pageNow: Number,
    pageCount: Number
  },
  data() {
    return {
      pageArr: [null, null, null, null, null]
    };
  },
  computed: {
    getPageArr() {
      let frist = 1;

      if (this.pageNow > 3) {
        frist = this.pageNow - 2;
      }
      if (this.pageNow >= this.pageCount - 2) {
        frist = this.pageCount - 4;
      }

      let arr = this.pageArr.map(() => {
        let data = frist;
        frist++;
        return data;
      });

      return arr;
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  padding: 0px;
  margin: 0px;
  list-style: none;
  justify-content: center;
  li {
    padding: 10px;
  }
  .action {
    color: #409eff;
  }
}
</style>
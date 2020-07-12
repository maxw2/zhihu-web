<template>
  <div class="index-main-index">
    <ul>
      <li v-for="(val,index) in listArr" :key="index" :class="`index-main-index-${index}`">
        <list :listData="val" :type="0"></list>
      </li>
      <li v-if="loadList">
        <Loader></Loader>
      </li>
    </ul>
  </div>
</template>

<script>
import { axiosIndex, indexData } from "@/axios/axiosIndex";
import Loader from '@/components/common/Loader/Loader'
import List from "../../../common/List/List";

export default {
  components: {
    List,
    Loader
  },
  data() {
    return {
      listArr: null,
      loadList: false,
      throttleScrollAddList: null
    };
  },
  mounted() {
    this.throttleScrollAddList = this.throttle(this.scrollAddList, 100);
    window.addEventListener("scroll", this.throttleScrollAddList);
    //
    this.loadList = true;
    axiosIndex()
      .then(res => {
        this.listArr = res;
        this.loadList = false;
      })
      .catch(() => {
        this.listArr = indexData.data;
        this.loadList = false;
      });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.throttleScrollAddList);
  },
  methods: {
    throttle(fn, time) {
      let previous = 0;
      return function() {
        let now = Date.now();
        if (now - previous > time) {
          previous = now;
          fn();
        }
      };
    },
    scrollAddList() {
      let el = document.documentElement;
      if (this.loadList) return;
      if (
        el.offsetHeight - document.documentElement.clientHeight - el.scrollTop <
        150
      ) {
        this.loadList = true;
        axiosIndex()
          .then(res => {
            this.listArr = this.listArr.concat(res);
            this.loadList = false;
          })
          .catch(() => {
            this.listArr = this.listArr.concat(indexData.data);
            this.loadList = false;
          });
      }
    }
  }
};
</script>

<style lang='scss' scoped>
ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
  
}
</style>
<template>
  <div class="index-card-side-bar boxShadow">
    <div class="banner">
      <img src="https://pic2.zhimg.com/80/v2-7b9963126f1f75572fdd4670b35f48d0_r.png" />
    </div>
    <ul class="side-bar">
      <li v-for="(val,index) in listArr" :key="index">
        <div class="icon" :style="`color:${val.color}`">
          <component :is="val.component"></component>
        </div>
        <span>{{val.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import live from "./svg/live";
import book from "./svg/book";
import ori from "./svg/org";
import write from "./svg/write";
import infinity from "./svg/infinity";
import know from "./svg/know";

export default {
  data() {
    return {
      listArr: [
        {
          name: "Live",
          color: "rgb(255, 207, 0)",
          component: live
        },
        {
          name: "书店",
          color: "rgb(67, 212, 128)",
          component: book
        },
        {
          name: "圆桌",
          color: "rgb(0, 132, 255)",
          component: ori
        },
        {
          name: "专栏",
          color: "rgb(15, 136, 235);",
          component: write
        },
        {
          name: "付费咨询",
          color: "rgb(84, 120, 240)",
          component: infinity
        },
        {
          name: "百科",
          color: "rgb(88, 104, 209)",
          component: know
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.index-card-side-bar {
  background: #fff;
  overflow: hidden;
  margin-bottom: 10px;
  .banner {
    width: calc(100% - 20px);
    height: 44px;
    background: #e2e2e2;
    margin: 10px 10px 0 10px;
    img {
      width: 100%;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0px;
    padding: 0px;
    margin-top: 20px;
    li {
      cursor: pointer;
      width: 33%;
      font-size: 15px;
      color: #8590a6;
      margin-bottom: 25px;
    }
  }
}
</style>
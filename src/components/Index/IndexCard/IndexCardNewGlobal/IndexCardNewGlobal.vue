<template>
  <div class="index-card-new-global boxShadow">
    <ul class="new-global-icon">
      <li v-for="val in listArr" :key="val.id">
        <div class="icon">
          <component :is="val.component"></component>
        </div>
        <span>{{val.name}}</span>
      </li>
    </ul>
    <div class="new-global-bottom">
      <div>稍后答</div>
      <div>草稿箱</div>
    </div>
  </div>
</template>
<script>
import answer from "./svg/answer";
import video from "./svg/video";
import write from "./svg/write";
import idea from "./svg/idea";

export default {
  data() {
    return {
      listArr: [
        {
          id: 0,
          name: "回答问题",
          component: answer
        },
        {
          id: 1,
          name: "发视频",
          component: video
        },
        {
          id: 2,
          name: "写文章",
          component: write
        },
        {
          id: 3,
          name: "写想法",
          component: idea
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.index-card-new-global {
  background: #fff;
  margin-bottom: 10px;
  .new-global-icon {
    display: flex;
    list-style: none;
    margin: 0px;
    padding: 20px 15px;
    border-bottom: 1px solid #f6f6f6;
    li {
      flex: 1;
      .icon {
        margin-bottom: 12px;
      }
      span {
        font-size: 12px;
        line-height: 1;
        color: #444;
      }
    }
  }
  .new-global-bottom {
    display: flex;
    div {
      flex: 1;
      padding: 15px 0;
      font-size: 14px;
      color: #8590a6;
    }
  }
  .new-global-bottom div:nth-child(1){
    border-right: 1px solid #f6f6f6;
  }
}
</style>
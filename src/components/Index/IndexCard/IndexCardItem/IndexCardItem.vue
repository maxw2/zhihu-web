<template>
  <div class="index-card-item">
    <ul>
      <li v-for="(val,index) in listArr" :key="index">
        <span :class="val.icon + ' icon'"></span>
        <span>{{val.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listArr: [
        {
          name: "我的收藏",
          icon: "glyphicon glyphicon-heart"
        },
        {
          name: "我关注的问题",
          icon: "glyphicon glyphicon-comment"
        },
        {
          name: "我的邀请",
          icon: "glyphicon glyphicon-user"
        },
        {
          name: "我的余额",
          icon: "glyphicon glyphicon-folder-close"
        },
        {
          name: "站务中心",
          icon: "glyphicon glyphicon-comment"
        },
        {
          name: "帮助中心",
          icon: "glyphicon glyphicon-headphones"
        },
        {
          name: "版权服务中心",
          icon: "glyphicon glyphicon-exclamation-sign"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.index-card-item {
  background: #fff;
  overflow: hidden;
  ul {
    list-style: none;
    margin: 10px 0;
    padding: 0px;
    li {
        cursor: pointer;
      padding:0 20px;
      line-height: 40px;
      height: 40px;
      text-align: left;
      font-size: 14px;
      color: #8590a6;
      span:nth-child(2) {
        margin: 0 20px;
      }
    }
    li:hover {
      background: #f6f6f6;
    }
  }
}
</style>
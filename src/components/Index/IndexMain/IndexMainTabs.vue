<template>
  <div class="index-main-tabs">
    <nav>
      <router-link v-for="(val,index) in tabsList" :key="index" :to="val.path" exact>{{val.name}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabsList: [
        {
          name: "推荐",
          path: "/"
        },
        {
          name: "关注",
          path: "/follow"
        },
        {
          name: "热榜",
          path: "/hot"
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
nav {
  height: 58px;
  display: flex;
  margin: 0px;
  padding: 0px;
  list-style: none;
  border-bottom: 1px solid #f0f2f7;
  a {
    display: flex;
    padding: 0 22px;
    font-size: 16px;
    align-items: center;
    color: #1a1a1a;
  }
  .router-link-active{
      color: #0084ff;
  }
  
}
</style>
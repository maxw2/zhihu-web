<template>
  <div class="title-tabs">
    <ul>
      <li v-for="(val,index) in tabsList" :key="index">
        <router-link :to="val.path" exact>{{val.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TitleTabs",
  props:{
    tabsList:Array
  }
};
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  list-style: none;
  padding: 0px;
  margin: 0px;
  font-size: 15px;
  li {
    padding: 0 12px;
    a {
      display: inline-block;
      padding: 19px 0;
      text-decoration: none;
      color: #8590a6;
    }
    a:hover{
      text-decoration: none;
    }

    // active
    .router-link-active {
      position: relative;
      padding: 19px 0;
      font-weight: 600;
      color: #444;
    }
    .router-link-active::after {
      content: "";
      position: absolute;
      bottom: 3px;
      left: 0px;
      display: inline-block;
      width: 100%;
      height: 2px;
      background: #0084ff;
    }
  }
}
</style>
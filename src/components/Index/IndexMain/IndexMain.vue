<template>
  <div class='index-main boxShadow'>
      <index-main-tabs></index-main-tabs>
      <router-view></router-view>
  </div>
</template>

<script>
import IndexMainTabs from './IndexMainTabs'

export default {
  components:{
    IndexMainTabs
  }
}
</script>

<style>
  .index-main{
    background: #fff;
  }
</style>
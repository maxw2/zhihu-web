<template>
  <div class="index-card visible-lg-block">
      <IndexCardNewGlobal></IndexCardNewGlobal>
      <IndexCardCreate></IndexCardCreate>
      <IndexCardSideBar></IndexCardSideBar>
      <IndexCardItem></IndexCardItem>
  </div>
</template>

<script>
import IndexCardNewGlobal from './IndexCardNewGlobal/IndexCardNewGlobal'
import IndexCardCreate from './IndexCardCreate/IndexCardCreate'
import IndexCardSideBar from './IndexCardSideBar/IndexCardSideBar'
import IndexCardItem from './IndexCardItem/IndexCardItem'

export default {
  components:{
    IndexCardNewGlobal,
    IndexCardCreate,
    IndexCardSideBar,
    IndexCardItem
  }
}
</script>

<style>

</style>
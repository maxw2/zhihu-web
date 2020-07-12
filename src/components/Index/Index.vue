<template>
  <div class="index">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-lg-offset-1">
          <index-main></index-main>
        </div>
        <div class="col-lg-3" style="padding:0px">
          <index-card></index-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IndexMain from "./IndexMain/IndexMain";
import IndexCard from "./IndexCard/IndexCard";

export default {
  components: {
    IndexMain,
    IndexCard
  }
};
</script>

<style lang='scss' scoped>
.index {
  .row {
    margin: 10px 0;
    display: flex;
  }
}
</style>
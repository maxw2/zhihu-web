<template>
  <div class="index-card-create boxShadow">
    <div class="user">
      <span class="glyphicon glyphicon-user"></span>
      <span>创作中心</span>
    </div>
    <div class="arrow">
        <span>去开通</span>
        <span class="glyphicon glyphicon-menu-right"></span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.index-card-create{
    height: 52px;
    display: flex;
    justify-content:space-between;
    font-size: 14px;
    color: #8590a6;
    padding: 0 17px;
    background: #fff;
    line-height: 52px;
    margin-bottom: 10px;
    .user{
        span:nth-child(1){
            margin-right: 10px;
        }
    }
    .arrow{
        span:nth-child(1){
            margin-right: 10px;
            color:rgb(0, 132, 255);;
        }
    }
}
</style>
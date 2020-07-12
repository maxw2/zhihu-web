<template>
  <div class="title-login">
    <span class="glyphicon glyphicon-bell bell"></span>
    <span class="glyphicon glyphicon-comment comment"></span>
    <span class="glyphicon glyphicon-user user"></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title-login {
  font-size: 18px;
  color: #8590a6;
  .bell,
  .comment {
    margin-right: 40px;
  }
  .user {
    width: 30px;
    height: 30px;
    line-height: 30px;
    background: #efefef;
    border-radius: 4px;
  }
}
</style>
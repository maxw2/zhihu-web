<template>
  <div class="question-side">
    <div class="title">相关问题</div>
    <ul>
      <li v-for="(val,index) in listArr" :key="index">
        <span>{{val.name}}</span>
        <span>{{`${val.number} 个回答`}}</span>
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
          name:
            "在Vue中使用typescript开发有什么样的体验？",
          number: 10
        },
        {
          name:
            "Typescript 或者 Vue 需要实现什么功能或者做出什么改进，后者才能得到更好地类型支持？",
          number: 10
        },
        {
          name:
            "在Vue中使用typescript开发有什么样的体验？",
          number: 10
        },
        {
          name:
            "Typescript 或者 Vue 需要实现什么功能或者做出什么改进，后者才能得到更好地类型支持？",
          number: 10
        },
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.question-side {
  text-align: left;
  background: #fff;
  .title {
    height: 50px;
    // padding: 0 20px;
    font-size: 15px;
    color: #1a1a1a;
    line-height: 50px;
    font-weight: 600;
    border-bottom: 1px solid #f6f6f6;
  }
  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
    padding: 16px 0px;
    li {
      font-size: 14px;
      line-height: 21px;
      
      margin-bottom: 10px;
      color: #175199;
      span:nth-child(2){
          color: #8590a6;
      }
    }
    
  }
}
</style>
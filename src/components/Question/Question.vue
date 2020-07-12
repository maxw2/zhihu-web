<template>
  <div class="question" v-if="questionData">
    <question-title :questionTitleData="questionData.title"></question-title>
    <div class="content container">
      <div class="main col-lg-7 col-lg-offset-1">
        <div class="boxShadow">
          <question-list :questionList="questionData.list"></question-list>
        </div>
      </div>
      <div class="side boxShadow col-lg-3">
        <question-side></question-side>
      </div>
    </div>
  </div>
</template>
<script>
import { axiosQuestion, questionData } from "@/axios/axiosQuestion.js";

import QuestionTitle from "./QuestionTitle";
import QuestionList from "./QuestionList";
import QuestionSide from "./QuestionSide";

export default {
  components: {
    QuestionTitle,
    QuestionList,
    QuestionSide
  },
  data() {
    return {
      questionData: null
    };
  },
  mounted() {
    axiosQuestion(this.$route.params.id)
      .then(res => {
        this.questionData = res;
      })
      .catch(() => {
        this.questionData = questionData.data;
      });
  }
};
</script>
<style lang="scss" scoped>
.content {
  margin-top: 10px;
  .side{
    background: #fff;
  }
}
</style>
<template>
  <div class="question-title boxShadow">
    <div class="container">
      <div class="main col-lg-7 col-lg-offset-1">
        <div class="tabs">
          <ul>
            <li v-for="(val,index) in questionTitleData.tabs" :key="index">{{val}}</li>
          </ul>
        </div>
        <h1 class="title">{{questionTitleData.questionName}}</h1>
        <div class="content">{{questionTitleData.questionContent}}</div>
        <div class="icon">
          <ul>
            <li class="follow">关注问题</li>
            <li class="write">
              <span class="glyphicon glyphicon-pencil"></span>写答案
            </li>
            <li class="invite">
              <span class="glyphicon glyphicon-user"></span>邀请回答
            </li>
          </ul>
        </div>
      </div>
      <div class="side col-lg-4">
        <div class="follow">
          <p>关注者</p>
          <span>{{questionTitleData.follow}}</span>
        </div>
        <div class="watch">
          <p>被浏览</p>
          <span>{{questionTitleData.watch}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    questionTitleData: Object
  }
};
</script>
<style lang="scss" scoped>
.question-title {
  padding: 16px 0;
  background: #fff;
  .main {
    // tabs
    .tabs {
      ul {
        display: flex;
        list-style: none;
        margin: 0px;
        padding: 0px;
        li {
          margin: 3px 5px 3px 0;
          color: #0084ff;
          height: 30px;
          padding: 0 12px;
          font-size: 14px;
          line-height: 30px;
          border-radius: 100px;
          background: rgba(0, 132, 255, 0.1);
        }
      }
    }
    // title
    .title {
      color: #1a1a1a;
      text-align: left;
      margin-top: 12px;
      margin-bottom: 4px;
      font-size: 22px;
      font-weight: 600;
    }
    // content
    .content {
      margin: 8px 0;
      text-align: left;
      font-size: 15px;
      color: #1a1a1a;
    }
    // icon
    .icon {
      margin-top: 4px;
      margin-left: -8px;
      ul {
        display: flex;
        list-style: none;
        margin: 0px;
        padding: 0px;
        li {
          margin: 0 8px;
        }
        .follow {
          color: #fff;
          background-color: #0084ff;
          padding: 0 16px;
          font-size: 14px;
          line-height: 32px;
          border: 1px solid;
          border-radius: 3px;
        }
        .write {
          color: #0084ff;
          border-color: #0084ff;
          border: 1px solid;
          border-radius: 3px;
          padding: 0 16px;
          line-height: 32px;
          span {
            vertical-align: text-bottom;
            margin-right: 4px;
          }
        }
        .invite {
          color: #8590a6;
          border-color: #8590a6;
          border: 1px solid;
          border-radius: 3px;
          padding: 0 16px;
          font-size: 14px;
          line-height: 32px;
          span {
            vertical-align: text-top;
            margin-right: 4px;
          }
        }
      }
    }
  }
  .side {
    display: flex;
    .follow {
      position: relative;
    }
    .follow:after {
      content: "";
      position: absolute;
      right: 0px;
      top: 0px;
      width: 1px;
      height: 90%;
      background: #ebebeb;
    }
    .follow,
    .watch {
      padding:0 25px;
      p {
        font-size: 14px;
        color: #8590a6;
      }
      span {
        font-size: 18px;
        color: #1a1a1a;
        font-weight: 600;
      }
    }
  }
}
</style>
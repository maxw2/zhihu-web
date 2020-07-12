<template>
  <div class="list-comment">
    <div v-if="!loader || commentList" class="content">
      <div>
        <comment-title :commentList="commentList"></comment-title>
        <comment-hot :hotList="commentList.hot"></comment-hot>
        <comment-content :contentList="commentList.list"></comment-content>
      </div>
      <div class="page">
        <Page :total="300" :pageSize="10" @current-change="currentChange"></Page>
      </div>
    </div>
    <div v-else>
      <Loader></Loader>
    </div>
  </div>
</template>
<script>
import {
  axiosComment,
  commentData,
  commentData_1
} from "@/axios/axiosComment.js";
import Loader from '../../Loader/Loader'
import CommentTitle from "./CommentTitle";
import CommentHot from "./CommentHot";
import CommentContent from "./CommentContent";
import Page from "../../Page/Page";

export default {
  components: {
    CommentTitle,
    CommentHot,
    CommentContent,
    Page,
    Loader
  },
  props: {
    replyId: Number
  },
  data() {
    return {
      commentList: null,
      loader:true
    };
  },
  mounted() {
    this.loader = true
    axiosComment(this.replyId, {
        params: {
          page: 0
        }
      })
      .then(res => {
        this.commentList = res;
        this.loader = false
      })
      .catch(() => {
        this.commentList = commentData.data;
        this.loader = false
      });
  },
  methods: {
    currentChange(ev) {
      this.loader = true
      axiosComment(this.replyId, {
        params: {
          page: ev
        }
      })
        .then(res => {
          this.commentList = res;
          this.loader = false
        })
        .catch(() => {
          if (ev !== 1) {
            this.commentList = commentData_1.data;
          } else {
            this.commentList = commentData.data;
          }
          this.loader = false
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.list-comment {
  .content {
    border: 1px solid #ebebeb;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  }
  .page {
    border-top: 1px solid #ebebeb;
    padding: 6px 70px;
  }
}
</style>
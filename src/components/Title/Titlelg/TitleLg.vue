<template>
  <div class="title-lg">
    <div class="is-fixed boxShadow">
      <div
        class="container"
        :style="top ? 'transform:translateY(0px)': 'transform:translateY(-53px)'"
      >
        <TitleA></TitleA>
        <TitleB></TitleB>
      </div>
    </div>
  </div>
</template>
<script>
import TitleA from "./TitleA";
import TitleB from "./TitleB";

export default {
  components: {
    TitleA,
    TitleB
  },
  data() {
    return {
      scrollX: 0,
      top: true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scroll);
  },
  methods: {
    scroll() {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > this.scrollX) {
        this.top = false;
      } else {
        this.top = true;
      }
      this.scrollX = scrollTop;
    }
  }
};
</script>
<style lang="scss" scoped>
.title-lg {
  background: white;
  min-height: 52px;
  .is-fixed {
    width: 100%;
    height: 52px;
    overflow: hidden;
    background: white;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 90;
    .container {
      transition: transform 0.5s ease 0s;
      .row {
        height: 52px;
        display: flex;
        align-items: center;
        .input,
        .tabs {
          padding: 0px;
        }
        .input {
          padding-left: 15px;
        }
      }
    }
  }
}
</style>
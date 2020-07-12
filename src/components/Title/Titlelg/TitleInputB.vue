<template>
  <div class="title-input-b" :class="{'lableFocus':inputFocus}">
    <form>
      <div class="lable">
        <input placeholder="搜索你感兴趣的内容…" @focus="onInputFocus" @blur="onInputBlur" />
        <span class="icon glyphicon glyphicon-search"></span>
      </div>
    </form>
    <button class="button">提问</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputFocus: false
    };
  },
  methods: {
    onInputFocus() {
      this.inputFocus = true;
    },
    onInputBlur() {
      this.inputFocus = false;
    }
  }
};
</script>
<style lang="scss" scoped>
// title-b
.title-input-b {
  display: flex;
  // form
  form {
    width: 216px;
    .lable {
      display: flex;
      align-items: center;
      width: 216px;
      margin: 0px;
      padding: 5px 0px 5px 12px;
      border: 1px solid #ebebeb;
      border-radius: 4px;
      background: #f6f6f6;
      transition: all 0.2s ease;
      input {
        flex: 1;
        font-size: 14px;
        background: transparent;
        border: none;
      }
      .icon {
        padding-right:12px;
      }
      input:focus {
        border: none;
        outline: none;
      }
    }
    .lable:focus {
    }
  }
  // button
  .button {
    display: inline-block;
    padding: 0 14px;
    margin-left: 16px;
    line-height: 30px;
    font-size: 14px;
    border: none;
    border-radius: 3px;
    background: #0084ff;
    color: white;
    transition: transform 0.1s ease, opacity 0.1s ease, width 0.1s ease;
  }
  .button:hover {
    background: #0077e6;
  }
  .button:focus {
    outline: none;
  }
}

// focus
.lableFocus {
  position: relative;
  form {
    .lable {
      background: #fff;
      border: 1px solid #8590a6;
    }
  }
}
</style>
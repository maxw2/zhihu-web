<template>
  <div class="title-input" :class="{'lableFocus':inputFocus}">
    <form>
      <div class="lable">
        <input placeholder=" iOS 或更名为 iPhone OS " @focus="onInputFocus" @blur="onInputBlur" />
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

<style lang='scss' scoped>
// title-a
.title-input {
  display: flex;
  // form
  form {
    width: 280px;
    .lable {
      display: flex;
      align-items: center;
      width: 280px;
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
        padding: 0 12px;
      }
      input:focus {
        border: none;
        outline: none;
      }
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
      width: 350px;
      .icon {
        color: #0084ff;
      }
    }
  }
  .button {
    transform: scale(0);
    opacity: 0;
  }
}
</style>
<template>
  <transition name="fade" v-on:enter="enter">
    <ul v-show="show" class="common-dropDown-item">
      <span :class="itemTop ? 'arrowTop':'arrowBottom'"></span>
      <li v-for="(val,index) in dropList" :key="index">{{val}}</li>
    </ul>
  </transition>
</template>
<script>
export default {
  props: {
    dropList: Array,
    show: Boolean,
    dropEl: HTMLDivElement
  },
  data() {
    return {
      itemTop: true
    };
  },
  methods: {
    enter(ev) {
      let item = ev;
      let window_h = document.documentElement.clientHeight;
      let item_h = ev.offsetHeight;
      let dropRect = this.dropEl.getBoundingClientRect();
      let top = dropRect.top + document.documentElement.scrollTop;
      let left = dropRect.left + document.documentElement.scrollLeft;
      if (window_h - dropRect.top > item_h) {
        this.itemTop = true;
        item.style.top = `${top + dropRect.height}px`;
        item.style.left = `${left - dropRect.width}px`;
      } else {
        this.itemTop = false;
        item.style.top = `${top - item_h}px`;
        item.style.left = `${left - dropRect.width}px`;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  position: absolute;
  transform: translateX(-30%);
  margin: 0px;
  padding: 0px;
  list-style: none;
  font-size: 14px;
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  box-shadow: 0 5px 20px rgba(26, 26, 26, 0.1);
  .arrowTop {
    position: absolute;
    display: block;
    width: 32px;
    height: 14px;
    overflow: hidden;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
  }
  .arrowTop::after {
    content: "";
    display: inline-block;
    width: 22px;
    height: 22px;
    transform: rotate(45deg) translateX(30%) translateY(30%);
    background: #fff;
    border: 1px solid #ebebeb;
  }
  .arrowBottom {
    position: absolute;
    display: block;
    width: 32px;
    height: 14px;
    overflow: hidden;
    bottom: -14px;
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
  }
  .arrowBottom::after {
    content: "";
    display: inline-block;
    width: 22px;
    height: 22px;
    transform: rotate(45deg) translateX(30%) translateY(30%);
    background: #fff;
    border: 1px solid #ebebeb;
  }

  li {
    cursor: pointer;
    background: #fff;
    line-height: 40px;
    white-space: nowrap;
    padding: 0 20px;
  }
  li:hover {
    background: #f6f6f6;
  }
}
// transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
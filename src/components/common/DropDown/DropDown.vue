<template>
  <div class="common-dropDown" ref="drop">
    <div class="common-dropDown-click" v-if="trigger === 'click'" @click="setShow">
      <slot></slot>
    </div>
    <div class="common-dropDown-hover" v-else @mouseover="overShow" @mouseleave="leaveShow">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import DropItem from "./DropItem";

export default {
  props: {
    trigger: String,
    dropList: Array,
  },
  data() {
    return {
      show: false,
      ItemCom: null,
    };
  },
  mounted() {},
  methods: {
    setShow() {
      if (!this.ItemCom) {
        let Item = Vue.extend(DropItem);
        let ItemCom = new Item({
          propsData: {
            dropList: this.dropList,
            show: this.show,
            dropEl:this.$refs.drop
          }
        });
        document.getElementById("app").appendChild(ItemCom.$mount().$el);
        this.ItemCom = ItemCom;
      }
      this.show = !this.show;
      this.ItemCom.show = this.show;
    },
    overShow() {
      if (!this.ItemCom) {
        let Item = Vue.extend(DropItem);
        let ItemCom = new Item({
          propsData: {
            dropList: this.dropList,
            show: this.show,
            dropEl:this.$refs.drop
          }
        });
        document.getElementById("app").appendChild(ItemCom.$mount().$el);
        this.ItemCom = ItemCom;
      }
      this.show = true;
      this.ItemCom.show = this.show;
    },
    leaveShow() {
      this.show = false;
      this.ItemCom.show = this.show;
    }
  }
};
</script>
<style lang="scss" scoped>
.common-dropDown {
  position: relative;
}
</style>
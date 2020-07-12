<template>
  <div class="more">
    <drop-down :dropList="list" trigger='click'>
      <span class="glyphicon glyphicon-option-horizontal" ></span>  
    </drop-down>
  </div>
</template>
<script>
import DropDown from '../DropDown/DropDown'

export default {
    components:{
        DropDown
    },
    data(){
        return {
            list:['没有帮助','举报','不感兴趣']
        }
    }
}
</script>
<style lang="scss" scoped>
    .more{
        position: relative;
        .more-drop{
            position: absolute;

        }
    }
</style>
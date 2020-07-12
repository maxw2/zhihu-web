<template>
    <ul class="question-list">
        <li v-for="(val,index) in questionList" :key='index' >
            <List :listData='val' :type='1' :open='index == 0 ? true : false'></List>
        </li>
    </ul>
</template>
<script>
import List from '../common/List/List'

export default {
    components:{
        List
    },
    props:{
        questionList:Array
    }
}
</script>
<style lang="scss" scoped>
.question-list{
    list-style: none;
    padding: 0px;
    margin:0px;
}
</style>
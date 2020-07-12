import Vue from 'vue'
import VueRouter from 'vue-router'
// index
import Index from '../components/Index/Index'
import IndexMainIndex from '../components/Index/IndexMain/IndexMainIndex/IndexMainIndex'
// question
import Question from '../components/Question/Question'

Vue.use(VueRouter)

const routes = [
    {
    name: 'index',   // 首页
    path: '/',
    component: Index,
    children: [{
        name: '推荐',
        path: '/',
        component: IndexMainIndex,
    }, {
        name: '关注',
        path: '/follow',
        component: IndexMainIndex
    }, {
        name: '热门',
        path: '/hot',
        component: IndexMainIndex
    }]
}, 
{
    name: 'index',   // 首页
    path: '/f',
    component: Index,
    children: [{
        name: '推荐',
        path: '/',
        component: IndexMainIndex,
    }, {
        name: '关注',
        path: '/follow',
        component: IndexMainIndex
    }, {
        name: '热门',
        path: '/hot',
        component: IndexMainIndex
    }]
}, {
    name: 'index',   // 首页
    path: '/d',
    component: Index,
    children: [{
        name: '推荐',
        path: '/',
        component: IndexMainIndex,
    }, {
        name: '关注',
        path: '/follow',
        component: IndexMainIndex
    }, {
        name: '热门',
        path: '/hot',
        component: IndexMainIndex
    }]
}, 






{
    name: '问题',
    path: '/question/:id',
    component: Question
}]

const router = new VueRouter({
    routes
})




export default router


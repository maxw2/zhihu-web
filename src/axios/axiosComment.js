import { Axios } from './axios'

let commentData = {
    "success": true,
    "data": {
        len: 50,
        hot: [
            {
            userName: "lee额",
            userImg: 'https://pic2.zhimg.com/v2-694ed0bf3a5a9abd49133b04967fc2bd_s.jpg',
            date: '2019-02-08',
            content: '真香[害羞]',
            like: 28,
            reply: [{
                userName: "TerryZ",
                userImg: '',
                replyName: '三色院堇子的老公',
                date: '2019-02-08',
                content: '然而目前的 Vue2 就是可以直接调用 component 内部的方法，你没具体试过？',
                like: 28,
            }, {
                userName: "强记",
                userImg: '',
                replyName: '三色院堇子的老公',
                date: '2019-02-08',
                content: '现在就可以了',
                like: 28,
            }]
        }],
        list: [
            {
            userName: "三色院堇子的老公",
            userImg: 'https://pic2.zhimg.com/90a18f53117dcd9fefac40fe94c3d000_s.jpg',
            date: '2019-02-08',
            content: '那个，我希望3.0可以直接调用组件方法比如this.$refs.menu.hide()这样的操作，虽然有些违背数据绑定的单向控制，还有3.0最好能够用类型系统好好约束Prop，我现在都是用get转换，之前做底部弹框动画，用v-show做动画一直有个问题，只有滑动弹入动画，没有滑动弹出动画，总觉得必须要手动移除组件元素才行，弹框我用插件做的[微笑]',
            like: 28,
            reply: [{
                userName: "TerryZ",
                userImg: '',
                replyName: '三色院堇子的老公',
                date: '2019-02-08',
                content: '然而目前的 Vue2 就是可以直接调用 component 内部的方法，你没具体试过？',
                like: 28,
            }, {
                userName: "强记",
                userImg: '',
                replyName: '三色院堇子的老公',
                date: '2019-02-08',
                content: '现在就可以了',
                like: 28,
            }]
        },
        {
            userName: "lee额",
            userImg: 'https://pic2.zhimg.com/v2-694ed0bf3a5a9abd49133b04967fc2bd_s.jpg',
            date: '2019-02-08',
            content: '真香[害羞]',
            like: 28,
            reply: [{
                userName: "TerryZ",
                userImg: '',
                replyName: '三色院堇子的老公',
                date: '2019-02-08',
                content: '然而目前的 Vue2 就是可以直接调用 component 内部的方法，你没具体试过？',
                like: 28,
            }, {
                userName: "强记",
                userImg: '',
                replyName: '三色院堇子的老公',
                date: '2019-02-08',
                content: '现在就可以了',
                like: 28,
            }]
        },
         {
            userName: "三色院堇子的老公",
            userImg: 'https://pic2.zhimg.com/90a18f53117dcd9fefac40fe94c3d000_s.jpg',
            date: '2019-02-08',
            content: '那个，我希望3.0可以直接调用组件方法比如this.$refs.menu.hide()这样的操作，虽然有些违背数据绑定的单向控制，还有3.0最好能够用类型系统好好约束Prop，我现在都是用get转换，之前做底部弹框动画，用v-show做动画一直有个问题，只有滑动弹入动画，没有滑动弹出动画，总觉得必须要手动移除组件元素才行，弹框我用插件做的[微笑]',
            like: 28,
            reply: [{
                userName: "TerryZ",
                userImg: '',
                replyName: '三色院堇子的老公',
                date: '2019-02-08',
                content: '然而目前的 Vue2 就是可以直接调用 component 内部的方法，你没具体试过？',
                like: 28,
            }, {
                userName: "强记",
                userImg: '',
                replyName: '三色院堇子的老公',
                date: '2019-02-08',
                content: '现在就可以了',
                like: 28,
            }]
        },{
            userName: "lee额",
            userImg: 'https://pic2.zhimg.com/v2-694ed0bf3a5a9abd49133b04967fc2bd_s.jpg',
            date: '2019-02-08',
            content: '真香[害羞]',
            like: 28,
            reply: [{
                userName: "TerryZ",
                userImg: '',
                replyName: '三色院堇子的老公',
                date: '2019-02-08',
                content: '然而目前的 Vue2 就是可以直接调用 component 内部的方法，你没具体试过？',
                like: 28,
            }, {
                userName: "强记",
                userImg: '',
                replyName: '三色院堇子的老公',
                date: '2019-02-08',
                content: '现在就可以了',
                like: 28,
            }]
        },
    ]
    }
}

let commentData_1 = {
    "success": true,
    "data": {
        len: 50,
        list: [
            {
            userName: "三色院堇子的老公",
            userImg: 'https://pic2.zhimg.com/90a18f53117dcd9fefac40fe94c3d000_s.jpg',
            date: '2019-02-08',
            content: '那个，我希望3.0可以直接调用组件方法比如this.$refs.menu.hide()这样的操作，虽然有些违背数据绑定的单向控制，还有3.0最好能够用类型系统好好约束Prop，我现在都是用get转换，之前做底部弹框动画，用v-show做动画一直有个问题，只有滑动弹入动画，没有滑动弹出动画，总觉得必须要手动移除组件元素才行，弹框我用插件做的[微笑]',
            like: 28,
            reply: [{
                userName: "TerryZ",
                userImg: '',
                replyName: '三色院堇子的老公',
                date: '2019-02-08',
                content: '然而目前的 Vue2 就是可以直接调用 component 内部的方法，你没具体试过？',
                like: 28,
            }, {
                userName: "强记",
                userImg: '',
                replyName: '三色院堇子的老公',
                date: '2019-02-08',
                content: '现在就可以了',
                like: 28,
            }]
        }, 
        {
            userName: "lee额",
            userImg: 'https://pic2.zhimg.com/v2-694ed0bf3a5a9abd49133b04967fc2bd_s.jpg',
            date: '2019-02-08',
            content: '真香[害羞]',
            like: 28,
            reply: [{
                userName: "TerryZ",
                userImg: '',
                replyName: '三色院堇子的老公',
                date: '2019-02-08',
                content: '然而目前的 Vue2 就是可以直接调用 component 内部的方法，你没具体试过？',
                like: 28,
            }, {
                userName: "强记",
                userImg: '',
                replyName: '三色院堇子的老公',
                date: '2019-02-08',
                content: '现在就可以了',
                like: 28,
            }]
        },
        {
            userName: "三色院堇子的老公",
            userImg: 'https://pic2.zhimg.com/90a18f53117dcd9fefac40fe94c3d000_s.jpg',
            date: '2019-02-08',
            content: '那个，我希望3.0可以直接调用组件方法比如this.$refs.menu.hide()这样的操作，虽然有些违背数据绑定的单向控制，还有3.0最好能够用类型系统好好约束Prop，我现在都是用get转换，之前做底部弹框动画，用v-show做动画一直有个问题，只有滑动弹入动画，没有滑动弹出动画，总觉得必须要手动移除组件元素才行，弹框我用插件做的[微笑]',
            like: 28,
            reply: [{
                userName: "TerryZ",
                userImg: '',
                replyName: '三色院堇子的老公',
                date: '2019-02-08',
                content: '然而目前的 Vue2 就是可以直接调用 component 内部的方法，你没具体试过？',
                like: 28,
            }, {
                userName: "强记",
                userImg: '',
                replyName: '三色院堇子的老公',
                date: '2019-02-08',
                content: '现在就可以了',
                like: 28,
            }]
        },{
            userName: "lee额",
            userImg: 'https://pic2.zhimg.com/v2-694ed0bf3a5a9abd49133b04967fc2bd_s.jpg',
            date: '2019-02-08',
            content: '真香[害羞]',
            like: 28,
            reply: [{
                userName: "TerryZ",
                userImg: '',
                replyName: '三色院堇子的老公',
                date: '2019-02-08',
                content: '然而目前的 Vue2 就是可以直接调用 component 内部的方法，你没具体试过？',
                like: 28,
            }, {
                userName: "强记",
                userImg: '',
                replyName: '三色院堇子的老公',
                date: '2019-02-08',
                content: '现在就可以了',
                like: 28,
            }]
        },]
    }
}

//  首页
function axiosComment(replyId) {
    let url = `/comment/${replyId}`
    return Axios.get(url)
}



export { axiosComment, commentData,commentData_1 }
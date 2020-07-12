import { Axios } from './axios'

let questionData = {
    data: {
        title: {
            questionName: 'TypeScript 不适合在 vue 业务开发中使用吗？',
            questionContent: '如果适合，有没有好的最佳实践？',
            tabs: ['前端开发', "JavaScript", "TypeScript", 'Vue.js'],
            watch: 21455,
            follow: 461
        },
        list: [{
            "questionId": 100,    // 问题id
            "replyId": 200,  // 回答id
            "authorName": '尤雨溪',
            "authorBadge": true,
            "authorInfo": '前端开发、JavaScript、前端工程师 话题的优秀回答者',
            "authorImg": 'https://pic1.zhimg.com/7be980a0f_xs.jpg',
            "question": 'TypeScript 不适合在 vue 业务开发中使用吗？',
            "richContent": `<div class="RichContent-inner"><span class="RichText ztext CopyrightRichText-richText" itemprop="text"><p>必须要承认的是，2.x 的 TS 支持显然跟 React 和 Angular 是有差距的，这也是为什么 3.0 要加强这一块。</p><p>关于目前 2.x 跟 TS 的整合，通常需要基于 vue-class-component 来用基于 class 的组件书写方式。虽然对于默认的对象书写方式有类型推导支持，但里面的实现绕了很多弯。问题的本质其实很简单：因为当初 API 的设计根本就没有考虑类型系统。</p><p>Vue 五年半以前刚开始写的时候 JS 根本没有类型系统，我自己当时也不用带类型的语言，所以 Vue 的组件本质上就是一个 “包含了描述组件选项的对象”。这个设计算是一个典型的 intuition based design，它不是从语言本身的机制或是类型系统出发去设计的，而是单纯从人如何描述自己想要的东西出发的。这样的设计的好处是对于新手很容易理解，缺陷是跟类型系统之间确实存在一定的 “断层”。这个断层的意义到底有多大，对于不同类型的用户其实不太一样。首先，因为 API 还算简单直白，所以即使和传统的 OO 有一定的 mismatch，但大部分人适应起来还是很快。对于不使用类型系统，更关注组件业务逻辑的用户来说，这个断层其实是感受不到的。其次，这里的断层其实是双向的：你可以说是 Vue 的 API 设计不 type friendly，反过来也可以说是 TS 的类型系统不够强大所以没法给 Vue 提供足够好的支持。一个例子就是 JSX 其实一开始也没有类型支持，完全是 TS 强行给加了一整套针对 JSX 的推导机制才给了 TSX 现在的开发体验。如果 TS 因为 JSX 不属于真正的 JS 规范因而不提供支持，是不是也可以说 React 的设计跟类型系统存在断层？</p><p>当然想要抹平这个断层，更直接的办法是对 API 进行重新设计。这话说起来很简单，但对于 Vue 来说，改 API 需要考虑很多东西：</p><ul><li>跟原有 API 的兼容性：能否同时支持新旧 API？旧的用户如何升级？像 Angular 那样直接改得面目全非当然比较简单，但说直接点就是不管旧版本用户的死活；<br></li><li>如何设计出既能提供良好的类型推导，又不让为了类型而做的设计 leak 到非 TS 用户的使用体验中去？如何在 TS 和非 TS 的使用体验之间做到最好的一致性和平衡？Again，像 Angular 那样不管非 TS 的用户的死活当然也是比较简单，但我们不会这么做。<br></li><li>class 的原生支持不理想：如果太早用 class 作为默认的 API，那么意味着用户不预编译就无法在一部分浏览器中使用，这是我们一直极力避免的情况。Vue 一直很重视 “引入一个 script 就可以开始写” 这样的用例，因为这保证了新人上手的最低门槛，也让 Vue 可以很简单的整合到 legacy 应用当中作为 jQuery 的替代品。所以要改 API 有一个时机问题，太早了不合适。<br></li><li>用 class 写组件所依赖的 class fields, decorators 等提案尚不稳定：基于 stage&lt;4 的提案设计 API 是非常具有风险的，比如大家一开始都默认 class fields 的语义是 [[Set]]，结果到 stage 3 改成了 [[Define]]，这下 Polymer 急死了，因为它们有一个 API 设计是完全依赖了 class fields 的 [[Set]] 语义的。decorators 提案被彻底重新设计，并且在最近的 TC39 试图升 stage 3 被 V8 团队出于性能的考虑否决，可能又要大改；decorators 是否能放在 export 前面依然还在争论，为此 Angular 的老大 Igor 急的不行... 所以，如何避免设计出来的 API 在提案发生改动之后被迫也要改，陷自己于尴尬境地？Again，时机问题，等提案成熟，或是等有争议的点有结论后再动手（虽说我其实也是被邀请参与了这些东西的讨论的，但讨论规范真的是超级费时费神，还往往说服不了几个人...）</li></ul><p>额外说说模版和类型推导的关系。表面上看，隔了一层模版语法 + 编译，似乎确实存在 “断层”，但其实里面没你想的差那么远。Vue 的模版是编译成 virtual dom 渲染函数的，生成的 js 跟 React 的渲染函数一样可以类型推导，而模版跟生成的 js 之间是完整的逻辑映射，所以这里其实主要是需要做一些工具链上的衔接，把对生成的 js 分析出来的 intellisense 反馈到 IDE 里的模版上。技术上是完全可行的。</p><p>高票答案有另一个地方说 React 的 js 本位使得它做多端渲染简单，这话其实不对，做多端本质上是需要运行时一开始就做核心和平台分离的设计，这一点 Vue 2 一开始就做了（所以才会有 weex, NativeScript Vue 等等），实际上有模版这个更简单的编译源，做多端灵活性还更高一点，现在用 Vue 做小程序多端的方案一点都不少啊，mpvue, megalo, uni-app...</p><p>至于 Vue 本身使用什么类型系统做内部实现，其实是另一个问题了。用户用 TS 写 Vue 的体验关键还是在 API，用 TS 做内部实现其实只是减少了额外维护 d.ts 的成本。至于当初为什么没用 TS，我之前的回答相信很多人都看过了，谁能想到 Flow 团队会这么烂尾呢。相比之下，TS 团队确实是在用心做事的。Daniel Rosenwasser (TS 的 PM）跟我沟通过很多次，还来参加过 VueConf，都变成熟人了，不用都不好意思...</p><p>总结一下：</p><ul><li>现有的 API 和类型系统的结合存在缺陷，属于历史遗留；改新的 API 有个时机问题，请耐心等待 Vue 3；</li><li>TSX 类型支持好是因为 TS 专门开了后门给做了支持；模版只要工具链到位一样可以做到。</li><li>Vue 2 一开始内部实现就有类型系统，但是没想到 Flow 烂尾了，而 TS 整个生态越做越好。这个属于就是押错宝了，只能说... 真香</li></ul></span></div>`,
            "colContent": '这个问题下面的很多回答太偏激了，其实我淡出知乎就是因为这类破事... 但是作为作者还是认真地说一说吧，希望能以后别再有这种问题了。 这里我可以大方地承认…',
            "like": '1405',
            "date": "06-01",
            "comment": 123
        },{
            "questionId": 100,    // 问题id
            "replyId": 200,  // 回答id
            "authorName": '尤雨溪',
            "authorBadge": true,
            "authorInfo": '前端开发、JavaScript、前端工程师 话题的优秀回答者',
            "authorImg": 'https://pic1.zhimg.com/7be980a0f_xs.jpg',
            "question": 'TypeScript 不适合在 vue 业务开发中使用吗？',
            "richContent": `<div class="RichContent-inner"><span class="RichText ztext CopyrightRichText-richText" itemprop="text"><p>必须要承认的是，2.x 的 TS 支持显然跟 React 和 Angular 是有差距的，这也是为什么 3.0 要加强这一块。</p><p>关于目前 2.x 跟 TS 的整合，通常需要基于 vue-class-component 来用基于 class 的组件书写方式。虽然对于默认的对象书写方式有类型推导支持，但里面的实现绕了很多弯。问题的本质其实很简单：因为当初 API 的设计根本就没有考虑类型系统。</p><p>Vue 五年半以前刚开始写的时候 JS 根本没有类型系统，我自己当时也不用带类型的语言，所以 Vue 的组件本质上就是一个 “包含了描述组件选项的对象”。这个设计算是一个典型的 intuition based design，它不是从语言本身的机制或是类型系统出发去设计的，而是单纯从人如何描述自己想要的东西出发的。这样的设计的好处是对于新手很容易理解，缺陷是跟类型系统之间确实存在一定的 “断层”。这个断层的意义到底有多大，对于不同类型的用户其实不太一样。首先，因为 API 还算简单直白，所以即使和传统的 OO 有一定的 mismatch，但大部分人适应起来还是很快。对于不使用类型系统，更关注组件业务逻辑的用户来说，这个断层其实是感受不到的。其次，这里的断层其实是双向的：你可以说是 Vue 的 API 设计不 type friendly，反过来也可以说是 TS 的类型系统不够强大所以没法给 Vue 提供足够好的支持。一个例子就是 JSX 其实一开始也没有类型支持，完全是 TS 强行给加了一整套针对 JSX 的推导机制才给了 TSX 现在的开发体验。如果 TS 因为 JSX 不属于真正的 JS 规范因而不提供支持，是不是也可以说 React 的设计跟类型系统存在断层？</p><p>当然想要抹平这个断层，更直接的办法是对 API 进行重新设计。这话说起来很简单，但对于 Vue 来说，改 API 需要考虑很多东西：</p><ul><li>跟原有 API 的兼容性：能否同时支持新旧 API？旧的用户如何升级？像 Angular 那样直接改得面目全非当然比较简单，但说直接点就是不管旧版本用户的死活；<br></li><li>如何设计出既能提供良好的类型推导，又不让为了类型而做的设计 leak 到非 TS 用户的使用体验中去？如何在 TS 和非 TS 的使用体验之间做到最好的一致性和平衡？Again，像 Angular 那样不管非 TS 的用户的死活当然也是比较简单，但我们不会这么做。<br></li><li>class 的原生支持不理想：如果太早用 class 作为默认的 API，那么意味着用户不预编译就无法在一部分浏览器中使用，这是我们一直极力避免的情况。Vue 一直很重视 “引入一个 script 就可以开始写” 这样的用例，因为这保证了新人上手的最低门槛，也让 Vue 可以很简单的整合到 legacy 应用当中作为 jQuery 的替代品。所以要改 API 有一个时机问题，太早了不合适。<br></li><li>用 class 写组件所依赖的 class fields, decorators 等提案尚不稳定：基于 stage&lt;4 的提案设计 API 是非常具有风险的，比如大家一开始都默认 class fields 的语义是 [[Set]]，结果到 stage 3 改成了 [[Define]]，这下 Polymer 急死了，因为它们有一个 API 设计是完全依赖了 class fields 的 [[Set]] 语义的。decorators 提案被彻底重新设计，并且在最近的 TC39 试图升 stage 3 被 V8 团队出于性能的考虑否决，可能又要大改；decorators 是否能放在 export 前面依然还在争论，为此 Angular 的老大 Igor 急的不行... 所以，如何避免设计出来的 API 在提案发生改动之后被迫也要改，陷自己于尴尬境地？Again，时机问题，等提案成熟，或是等有争议的点有结论后再动手（虽说我其实也是被邀请参与了这些东西的讨论的，但讨论规范真的是超级费时费神，还往往说服不了几个人...）</li></ul><p>额外说说模版和类型推导的关系。表面上看，隔了一层模版语法 + 编译，似乎确实存在 “断层”，但其实里面没你想的差那么远。Vue 的模版是编译成 virtual dom 渲染函数的，生成的 js 跟 React 的渲染函数一样可以类型推导，而模版跟生成的 js 之间是完整的逻辑映射，所以这里其实主要是需要做一些工具链上的衔接，把对生成的 js 分析出来的 intellisense 反馈到 IDE 里的模版上。技术上是完全可行的。</p><p>高票答案有另一个地方说 React 的 js 本位使得它做多端渲染简单，这话其实不对，做多端本质上是需要运行时一开始就做核心和平台分离的设计，这一点 Vue 2 一开始就做了（所以才会有 weex, NativeScript Vue 等等），实际上有模版这个更简单的编译源，做多端灵活性还更高一点，现在用 Vue 做小程序多端的方案一点都不少啊，mpvue, megalo, uni-app...</p><p>至于 Vue 本身使用什么类型系统做内部实现，其实是另一个问题了。用户用 TS 写 Vue 的体验关键还是在 API，用 TS 做内部实现其实只是减少了额外维护 d.ts 的成本。至于当初为什么没用 TS，我之前的回答相信很多人都看过了，谁能想到 Flow 团队会这么烂尾呢。相比之下，TS 团队确实是在用心做事的。Daniel Rosenwasser (TS 的 PM）跟我沟通过很多次，还来参加过 VueConf，都变成熟人了，不用都不好意思...</p><p>总结一下：</p><ul><li>现有的 API 和类型系统的结合存在缺陷，属于历史遗留；改新的 API 有个时机问题，请耐心等待 Vue 3；</li><li>TSX 类型支持好是因为 TS 专门开了后门给做了支持；模版只要工具链到位一样可以做到。</li><li>Vue 2 一开始内部实现就有类型系统，但是没想到 Flow 烂尾了，而 TS 整个生态越做越好。这个属于就是押错宝了，只能说... 真香</li></ul></span></div>`,
            "colContent": '这个问题下面的很多回答太偏激了，其实我淡出知乎就是因为这类破事... 但是作为作者还是认真地说一说吧，希望能以后别再有这种问题了。 这里我可以大方地承认…',
            "like": '1405',
            "date": "06-01",
            "comment": 123
        }]
    }

}

function axiosQuestion(questionId) {
    let url = `/question/${questionId}`
    return Axios.get(url)
}


export { axiosQuestion, questionData }
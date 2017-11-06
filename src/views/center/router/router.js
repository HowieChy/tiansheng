

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './routerApp.vue'

import Index from './components/index.vue'
import Order from './components/order.vue'
import orderDetail from './components/orderDetail.vue'
import Address from './components/address.vue'
import Log from './components/log.vue'
import Regiment from './components/regiment.vue'
import RegimentList from './components/regimentList.vue'
import Member from './components/member.vue'
import MemberInfo from './components/memberInfo.vue'
import Intergral from './components/integral.vue'

const routes = [
    { path: '/', component: App ,
        children:[
            {path:'index',component:Index},//个人中心
            {path:'order',component:Order, //订单列表
                children:[
                    {path:'detail',component:orderDetail},//订单详情
                ]
            },
            {path:'address',component:Address},//收货地址
            {path:'regiment',component:Regiment},//我的团
            {path:'regimentList',component:RegimentList},//我的团员订单流水
            {path:'member',component:Member},//我的推荐
            {path:'memberInfo',component:MemberInfo},//我的推荐详情
            {path:'log',component:Log},//余额日志
            {path:'intergral',component:Intergral},//积分日志


        ]
    },

     // {path:'*',redirect:'/index'}
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes:routes
})

new Vue({
    router: router
}).$mount('#app')

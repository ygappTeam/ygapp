import Vue from 'vue'
import Router from 'vue-router'

import CartList from "../components/cart.vue"
import Settle from '../components/settle.vue'
import chooseCity from '../components/choosecity.vue';
import classifyNav from '../components/classifyNav.vue'
import Index from '../components/index.vue'
import Eat from '../components/eat.vue'
import ANewUser from '../components/aNewUser.vue'
import ADownload from '../components/aDownload.vue'
import APay from '../components/aPay.vue'
import Login from "../components/login.vue"
import Register from "../components/register.vue"
import Mine from "../components/mine.vue"
import Setting from '../components/setting.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {   /*首页*/
      name:Index.name,
      path:'/',
      component:Index
    },
    {   /*吃饭吧*/
      name:Eat.name,
      path:'/eat',
      component:Eat
    },
    {   /*活动页-新用户*/
      name: ANewUser.name,
      path: '/aNewUser',
      component: ANewUser
    },
    {   /*活动页-下载app*/
      name: ADownload.name,
      path: '/aDownload',
      component: ADownload
    },
    {   /*活动页-银联支付*/
      name: APay.name,
      path: '/aPay',
      component: APay
    },
    {
      name:chooseCity.name,
      path:'/chooseCity',
      component:chooseCity
    },
    { /*选择城市*/
      name:classifyNav.name,
      path:'/classify',
      component:classifyNav
    },
    {/* 购物车*/
      path:"/cart",
      name:"cart",
      component:CartList
    },{/*结算页面*/
      path:"/settle/:id",
      name:Settle.name,
      component:Settle
    },
    {/*登录页面*/
      path:"/login",
      name:"login",
      component:Login
    },
    {/*注册页面*/
      path:"/register",
      name:"register",
      component:Register
    },
    {/*我的页面*/
      path:"/mine",
      name:"mine",
      component:Mine
    },
    {/*设置页面*/
      path:"/setting",
      name:"setting",
      component:Setting
    }
  ]
})

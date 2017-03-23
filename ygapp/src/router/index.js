import Vue from 'vue'
import Router from 'vue-router'

import CartList from "../components/cart.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/cart",
      name:"cart",
      component:CartList
    }
  ]
})

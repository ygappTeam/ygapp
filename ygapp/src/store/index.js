import Vue from 'vue';
import Vuex from 'vuex';
// import fetch from 'fetch-jsonp';
import axios from 'axios';
import CartStore from "./moduleStore/cartStore.js";

Vue.use(Vuex);
// Vue.use(fetch);
Vue.use(axios);

const store = new Vuex.Store({
  state: {
    city:''
  },
  getters: {
    city:state=>{return this.state.city}
  },
  mutations: {
    changeCity(state,data){
      state.city = data;
    }
  },
  actions: {
    changeCity(context,params){
      context.commit('changeCity',params)
    }
  },
  modules:{
    cart:CartStore
  }
})

export default{
  store
}

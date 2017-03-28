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
    city:'',
    listdata:[],
    dataildata:{},
    cartNumber:0
  },
  getters: {
    city:state=>{return this.state.city}
  },
  mutations: {
    changeCity(state,data){
      state.city = data;
    },
    setListData(state,newState){
      state.listdata = newState;
    },
    setDetailData(state,newState){
      state.dataildata = newState;
    },
    getcartNum(state,newState){
      state.cartNumber = newState;
    },
    addCart(state,data){
      state.cartNumber += +data;
    }
  },
  actions: {
    changeCity(context,params){
      context.commit('changeCity',params)
    },
    getListdata(context,parms){
      axios.get("../../static/json/product-list.json",{timeout:20000})
        .then(res=>{
          if(!parms.price&&!parms.sales){
            console.log(2);
            context.commit('setListData',res.data.RspData.data)
          }else if(parms.price){
            var data = res.data.RspData.data
            for(var i=0;i<data.length;i++){
              for(var j=0;j<data.length-i-1;j++){
                if(data[j].CommodityPrice>data[j+1].CommodityPrice){
                  var temp = data[j].CommodityPrice;
                  data[j].CommodityPrice = data[j+1].CommodityPrice
                  data[j+1].CommodityPrice = temp;
                }
              }
            }
            if(parms.order){
              context.commit('setListData',data)
            }else{
              context.commit('setListData',data.reverse())
            }
          }else if(parms.sales){
            var data = res.data.RspData.data
            for(var i=0;i<data.length;i++){
              for(var j=0;j<data.length-i-1;j++){
                if(data[j].CommodityCode>data[j+1].CommodityCode){
                  var temp = data[j].CommodityCode;
                  data[j].CommodityCode = data[j+1].CommodityCode
                  data[j+1].CommodityCode = temp;
                }
              }
            }
            if(parms.order){
              context.commit('setListData',data)
            }else{
              context.commit('setListData',data.reverse())
            }
          }
        }).catch(err=>{
      })
    },
    getDetaildata(context,parms){
      console.log(111)
      axios.get(`../../static/json/detail/product-detail${parms}.json`,{timeout:20000})
        .then(res=>{
          context.commit('setDetailData',res.data.RspData.data)
        }).catch(err=>{
      })
    },
    getcartNumber(context){
      axios.get('../../static/json/cart.json',{timeout:20000})
        .then(res=>{
          var numbers = 0;
          for(var i=0; i<res.data.length;i++){
            numbers+=res.data[i].goodsNum;
            context.commit('getcartNum',numbers)
          }
        }).catch(err=>{
      })
    },
    addcartNumber(context,data){
      context.commit("addCart",data);
    }
  },
  modules:{
    cart:CartStore
  }
})

export default{
  store
}

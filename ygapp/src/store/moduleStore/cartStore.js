/**
 * Created by Administrator on 2017/3/24.
 */
import axios from "axios";
const state = {
  cart:[]
}

const getters = {
  cart(state){
    return state.cart;
  }
}

const actions = {
  // 获取商品数据
  getCartDataAction(context){
    // 进行数据请求
    axios.get("../../static/data/cart.json")
      .then(data=>{
        context.commit("getCartData",data.data);
      }).catch(err=>{
      console.log(err);
    });
  },
  // 更新商品数据
  updateShopNumAction(context,params){
    // 提交一个commit
    context.commit("updateShopNum",params);
  },
  // 删除
  deleteAction(context,params){
    context.commit("delete",params);
  }
}

const mutations = {
  // 获取购物车简历
  getCartData(state,data){
    state.cart = data;
  },

  // 更新数据
  updateShopNum(state,data){
    state.cart[data.index].number = data.num;
    console.log(state.cart);
  },
  // 删除
  delete(state,data){
    if(data>=0){
      // 删除单个商品
      state.cart.splice(data,1);
    }else {
      // 删除所有的商品
      state.cart.splice(0,state.cart.length);
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

<template>
  <div id="cart">
    <div class="warpper" v-if="cartDataList.length">
      <ul>
        <li v-for="(cart,index) in cartDataList" class="clearfix" @click="goDetail($event)" :key="index" ref="shopItem">
          <img :src="cart.SmallPic" alt="">
          <div class="product-info">
            <p class="productName" v-text="cart.CommodityName"></p>
            <p class="price-info">
              <span class="price" v-text="cart.OriginalPrice"></span>
              <span class="info">({{cart.Spec}})</span>
            </p>
            <p class="calcul clearfix">
              <a href="javascript:;" id="min" @click="minShop($event,index)">-</a>
              <input type="text" id="num" v-model="shopNum=cart.number" ref="num" disabled style="border: 1px solid #8d8a8a">
              <a href="javascript:;" id="plus" @click="plusShop($event,index)">+</a>
            </p>
          </div>
          <a href="javascript:;" id="delete" @click="handleDelete($event,index)">删除</a>
          <p id="send" v-if="cart.CommodityName">
            <img :src="cart.sendImg" alt="">
            <span v-text="cart.SubTitle"></span>
          </p>
        </li>
        <span v-if="refresh"></span>
      </ul>
      <div id="delete-cart" @click="handleDelete($event)">清空购物车</div>
      <div id="total">
        <span class="sale-off">优惠 :<i>￥{{ discountprice }}</i></span>
        <span class="sale-total">总计 :<i>￥{{totalPrice}}</i></span>
        <a href="javascript:;" id="go-cal" @click="goTotal">去结算({{totalNum}})</a>
      </div>
    </div>
    <div class="nothing" v-else>
      {{nothingText}}
    </div>
    <v-navBar></v-navBar>
  </div>
</template>

<script type="text/ecmascript-6">
  import fetchJsonp from "fetch-jsonp";
  import axios from 'axios';
  import navbar from "./common/navbar.vue";
  import Vue from "vue";
  import { MessageBox } from 'mint-ui';
  // 定义一个过滤器
  Vue.filter("filterDecimal",function (value) {
    return value.toFixed(2);
  });

  export default {
    name:"cart",
    data(){
      return {
        shopNum:0,
        nothingText:"您的购物车空空如也，请先添加购物车",
        refresh:false
      }
    },
    components:{
      "v-navBar":navbar
    },
    methods:{
      goDetail(){
        console.log(2);
      },
      minShop(event,index){
        console.log(index);
        // 生成需要更新的对象
        this.$refs.num[index].value = (--this.$refs.num[index].value <= 1)? 1 : this.$refs.num[index].value;
        let num = this.$refs.num[index].value;
        if(num <= 1){
          num = 1;
        };
        let obj = {
          index:index, // 需要更新的商品的列表索引
          num:num,
          goodsId:this.cartDataList[index].goodsId
        }
        // 派发一个action去更新数据库中的内容
         this.$store.store.dispatch("updateShopNumAction",obj);
        event.stopPropagation();
      },
      plusShop(event,index){
        // 生成需要更新的对象
        this.$refs.num[index].value = ++this.$refs.num[index].value > 30? 30 : this.$refs.num[index].value;
        let num = this.$refs.num[index].value;
        let obj = {
          index:index,  // 需要更新的商品的列表索引
          num:num,
          goodsId:this.cartDataList[index].goodsId
        }
        // 派发一个action去更新加入一个数据
        this.$store.store.dispatch("updateShopNumAction",obj);
        event.stopPropagation();
      },
      // 删除商品
      handleDelete(e,index){
        MessageBox({
          title: '提示',
          message: '确定执行此操作?',
          showCancelButton: true
        }).then(action=>{
          if(action === "confirm"){
            console.log(1111);
            this.refresh = true;
            this.$store.store.dispatch("deleteAction",index);
          }
        });
        e.stopPropagation();
      },
      goTotal(){
        // 判断用户是否已经登录
        let user = window.localStorage.getItem("loginedUsers");
        if(user){
          window.location.href = "#/settle/"+this.totalPrice;
        }else {
          window.location.href = "#/login";
        }
      },
      // 封装计算价格函数
      getPrice:(array,param)=>{
        let arrayP = [];
        let totalPrice = 0;
        array.forEach((value)=>{
          arrayP.push(parseFloat(value[param]) * value.number);
        });
        for (let i = 0; i < arrayP.length; i++){
          totalPrice += arrayP[i];
        }
        return totalPrice.toFixed(2);
      }
    },
    mounted(){
      // 派发一个获取数据的请求
      this.$store.store.dispatch("getCartDataAction");
    },
    computed:{
      cartDataList(){
        console.log("refresh");
        console.log(this.$store.store.getters.cart);
        return this.$store.store.getters.cart;
      },
      // 计算商品的折扣价格
      discountprice:function () {
        return this.getPrice(this.cartDataList,"SaleText");
      },
      // 计算商品的总金额
      totalPrice:function () {
        return this.getPrice(this.cartDataList,"OriginalPrice");
      },

      // 计算商品数量的总和
      totalNum:function () {
        let totalNum = 0;
        for (let i= 0; i < this.cartDataList.length; i++){
          totalNum += +this.cartDataList[i].number;
        }
        return totalNum;
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
  @import "../assets/css/index.scss";
  #cart{
    position:relative;
    ul{
      li{
        @include h(4.6rem);
        @include mb(0.5rem);
        border-bottom:1px solid #eeeeee;
        width:100%;
        padding:2px 0 2px 5px;
        position:relative;
        @include fs(0);
        img{
          float: left;
          @include w(3.4rem);
          @include h(3.4rem);
        }
        .product-info{
          @include pl(0.8rem);
          @include fs(0.45rem);
          @include t-l(left);
          float:left;
          @include w(10rem);
          @include mb(0.1rem);
          p{
            @include mb(0.3rem);
            & .info{
              color:$cartInfoColor;
            }
            &.calcul{
              a{
                float: left;
                display: inline-block;
                @include w(1.2rem);
                @include h(1.2rem);
                @include lh(1.2rem);
                text-underline: none;
                color:$cartInfoColor;
                @include t-l(center);
                border:1px solid $cartInfoColor;
                &:first-child{
                  border-right-style:none;
                  border-top-left-radius: 0.2rem;
                  border-bottom-left-radius:0.2rem;
                }
                &:last-child{
                  border-left-style:none;
                  border-top-right-radius: 0.2rem;
                  border-bottom-right-radius: 0.2rem;
                }
                &:hover{
                  text-underline: none;
                }
              }
              input{
                outline-width: 0;
                float: left;
                @include t-l(center);
                @include w(1.2rem);
                @include h(1.2rem);
                background: $defaultBgColor;
              }
            }
          }
        }
        #delete{
          position:absolute;
          display: block;
          right:0.1rem;
          top:0.6rem;
          @include fs(0.45rem);
          @include w(2rem);
          @include h(1.6rem);
          @include lh(1.6rem);
          color:$dangerColor;
          text-underline: none;
        }
        #send{
          float:left;
          @include fs(0.45rem);
          width:100%;
          img{
            @include w(3.4rem);
            @include h(0.9rem);
          }
          span{
            display:inline-block;
            @include lh(1rem);
            vertical-align: middle;
            @include pl(0.8rem);
            float:left;
          }
        }
      }
    }
    #delete-cart{
      border:1px solid #eeeeee;
      margin:0 auto;
      @include w(6rem);
      @include h(1.2rem);
      @include lh(1.2rem);
      @include fs(0.6rem);
      color: $dangerColor;
      border-radius: 0.3rem;
      @include mb(5rem);
    }
    #total{
      position:fixed;
      left:0;
      bottom:2rem;
      border-top:1px solid #eeeeee;
      @include w(100%);
      @include h(2.4rem);
      background-color:#ffffff;
      span{
        display:block;
        @include fs(0.6rem);
        @include t-l(left);
        @include pl(1rem);
        padding-top:0.2rem;
        padding-bottom:0.2rem;
        i{
          color:#f00;
          font-style:normal;
        }
      }
      #go-cal{
        display: inline-block;
        position:absolute;
        right:0.8rem;
        top:0.2rem;
        @include fs(0.8rem);
        @include w(5rem);
        @include h(2rem);
        @include lh(2rem);
        background:#f00;
        border-radius:0.4rem;
        text-underline: none;
        color:#fff;
        &:hover{
          text-underline: none;
        }
      }
    }
  }
</style>


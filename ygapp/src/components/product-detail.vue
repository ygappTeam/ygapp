<template>
  <div class="detailPage">
    <div class="product-detail">
    <div class="pic-head">
        <a href="javascript:window.history.go(-1);"></a>
        <mt-swipe :auto="0" id="mt-swipe">
          <mt-swipe-item><img :src="detaildata.Pictures[0]" alt=""></mt-swipe-item>
          <mt-swipe-item><img :src="detaildata.Pictures[1]" alt=""></mt-swipe-item>
          <mt-swipe-item><img :src="detaildata.Pictures[2]" alt=""></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="product-summary">
        <div class="product-info warp">
          <p class="product-tit">{{detaildata.CommodityName}}</p>
          <span>{{'￥'+detaildata.CommodityPrice}}</span>
          <div class="quantity">
            <a href="javascript:;" class="decrement" @click='changeNumber(-1)'>-</a>
            <input type="text" :value="newNumber" v-model="goodsNumber" @keyup="newNumber">
            <a href="javascript:;" class="increment" @click='changeNumber(1)'>+</a>
          </div>

        </div>
        <div class="product-choose warp">
          <span class="p-title">
            规格
          </span>
          <span :class="[guige1?'active':'','choose1']" @click="guigechange1">
            {{detaildata.Speces[0].Spec}}
          </span>
          <span :class="[guige2?'active':'','choose1']" @click="guigechange2">
            {{detaildata.Speces[1].Spec}}
          </span>

        </div>
        <div class="product-other warp">
          <p>产地<span style="color:#000;padding-left:10px">{{detaildata.PlaceOfOrigin}}</span></p>
          <p>24:00 前完成订单，预计明日(3月24日)送达</p>
        </div>
        <div class="comment warp">
          <span class="com-left">用户评价（<i>20000</i>）</span>
          <span class="com-right"><i style="color:red;font-weight:100">99%</i>好评
            <span class="arrow"></span>
          </span>
        </div>
        <div class="detail-link warp">
          <span class="links">
            商品图文详情（建议在WIFI下查看）
            <span class="arrow"></span>
          </span>
        </div>
      </div>

    </div>
    <div class="shop-cart">
      <div class="cart-left">
        <a href="#/">
          <i class="icon1"></i>
          首页
        </a>
      </div>
      <div class="cart">
        <a href="#/cart">
          <i class="icon2">
          </i>
          <span id="number">{{cartNum}}</span>
          购物车
        </a>
      </div>
      <div class="cart-right" id="cart-right">
        <a href="javascript:;" @click="addToCart">加入购物车</a>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name:"detailPage",
    data(){
      return {
        goodsNumber:1
      }
    },
    methods:{
      changeNumber(i){
        if(i<0){
          this.goodsNumber=+(this.goodsNumber) + i<1?1:+(this.goodsNumber) + i
        }else{
          this.goodsNumber = +(this.goodsNumber) + i
        }
      },
      guigechange1(){
        var code = this.detaildata.Speces[0].CommodityCode;
        if(this.detaildata.CommodityCode==this.detaildata.Speces[1].CommodityCode){
          window.location.href='#/detail/'+this.detaildata.CommodityCode;
          this.$store.store.dispatch("getDetaildata",code);
        }else{
          window.location.href='#/detail/'+code;
          this.$store.store.dispatch("getDetaildata",code);
        }
      },
      guigechange2(){
        var code = this.detaildata.Speces[1].CommodityCode
        if(this.detaildata.CommodityCode==this.detaildata.Speces[1].CommodityCode){
          window.location.href='#/detail/'+this.detaildata.CommodityCode;
          this.$store.store.dispatch("getDetaildata",code);
        }else{
          window.location.href='#/detail/'+code;
          this.$store.store.dispatch("getDetaildata",code);
        }
      },
      addToCart(){
        console.log(this.$store);
        this.$store.store.dispatch('addcartNumber',this.newNumber);
      }
    },
    computed:{
      newNumber(){
        let goodsNumber = this.goodsNumber;
        if(this.goodsNumber<1){
          this.goodsNumber = 1
        }else if(this.goodsNumber>20){
          this.goodsNumber = 20
        }
        this.goodsNumber = String(this.goodsNumber);
        this.goodsNumber = this.goodsNumber.replace(/\D/g,'')
        return this.goodsNumber
      },
      detaildata(){
        return this.$store.store.state.dataildata
      },
      guige1(){
        let detail = this.$store.store.state.dataildata;
        if (detail.CommodityCode==detail.Speces[0].CommodityCode){
          return true
        }else {
          return false
        }
      },
       guige2(){
        let detail = this.$store.store.state.dataildata;
        if (detail.CommodityCode==detail.Speces[1].CommodityCode){
          return true
        }else {
          return false
        }
      },
      cartNum(){
        if(this.$store.store.state.cartNumber==0){
          return ""
        }else{
          return this.$store.store.state.cartNumber
        }
      }
    },
    mounted(){
      let id = this.$route.params.id
      this.$store.store.dispatch("getDetaildata",id);
      this.$store.store.dispatch("getcartNumber");
    }
  }
</script>
<style lang="" scoped>
  .detailPage div,a,span,p{font-size:12px};
  .detailPage{
    position:absolute;
    height:100%;
    width:100%
  }
  .pic-head{
    width:100%;
    height:10rem;
  }
  .product-detail{
    overflow:auto;
    position:absolute;
    top:0;
    left:0;
    bottom:2.5rem;
    width:100%;
  }
  .pic-head a{
    position: absolute;
    top: 7px;
    left: 14px;
    display: inline-block;
    width: 36px;
    height: 36px;
    background: url(http://img05.yiguoimg.com/e/web/161227/00584/173409/return-icon.png) no-repeat;
    background-size: 100% 100%;
    z-index: 2
  }
  #mt-swipe{
    width:10rem;
    height:10rem;
    margin:0 auto;
  }
  #mt-swipe .is-active{
    background:#007aff;
    opacity: 1;
  }
  .pic-head img{width:101%}
  .warp{
    padding: .5rem .75rem;
    border-bottom: 1px solid #ccc;
    overflow:hidden;
    background:#fff
  }
  .product-summary{
    position:absolute;
    top:10rem;
    background:#eee;
    width:100%;
  }
  .product-info{
    position:relative
  }
  .product-info p{
    line-height: 1rem;
    font-size: 14px;
    margin-bottom: 8px;
    text-align:left;

  }
  .product-info span{
    float:left;
    color:red;
    font:16px "";
    margin:0;
    position:absolute;
    bottom:.5rem;
    left:.75rem;
  }
  .quantity{
    position: relative;
    height: 1.5rem;
    float: right;
    border:1px solid #9e9e9e;
    border-radius:2px;
    color:#666;
    bottom:.25rem;
  }
  .quantity a{
    width:1.4rem;
    height:1.4rem;
    color:#666;
    float:left;
    font-size:14px;
    line-height: 1.4rem;
  }
  .quantity .increment{
    border-left:1px solid #9e9e9e;
    text-decoration:none;
  }
  .quantity .decrement{
    border-right:1px solid #9e9e9e;
    text-decoration:none

  }
  .quantity input{
    width:1.4rem;
    height:1.4rem;
    float:left;
    outline:none;
    font:14px "";
    border:none;
    text-align:center;
  }
  .product-choose{
    padding-bottom: 0.25rem;
    font:12px "";
    overflow:hidden;
    width:100%
  }
  .product-choose span{
    float:left;

  }
  .p-title{
    width: 40px;
    color: #8d8a8a;
    font:.5rem;
    margin:8px 15px 0 0;
    text-align:left
  }
  .choose1,.choose2{
    display: inline-block;
    padding: 3px 7px;
    line-height: 1.1rem;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-right: 10px;
    background: #fff;
    margin-bottom: 5px;
  }
  .active{
    border-color: #008842;
    background: #008842;
    color:#fff
  }
  .product-other p{
    color:#999;
    font:12px "";
    text-align:left;
    line-height:1rem;
  }
  .comment{
    color:#999
  }
  .comment .com-left{
    float:left;
    font:12px/1.5rem ""
  }
  i{
    font-style:normal
  }
  .comment .com-right{
    float:right;
    line-height:1.5rem;
  }
  .com-right {
    position:relative;
    padding-right:1rem
  }
  .arrow{
    overflow: hidden;
    position: absolute;
    right: 0px;
    top: 50%;
    width: 11px;
    height: 18px;
    margin-top: -9px;
    background: url(http://img02.yiguo.com/e/web/150630/00781/175358/sprites.png) no-repeat -47px 0px;
    background-size:222px
  }
  .detail-link .links{
    float:left;
    text-align:left;
    color:#999;
    position:relative;
    line-height:1.5rem;
    width:100%
  }
  .shop-cart{
    position:absolute;
    left:0;
    bottom:0;
    border-top: 1px solid #ccc;
    width:100%;
    height:2.5rem;
  }
  .cart-left,.cart{
    float: left;
    width: 22%;
    height: 100%;

  }
  .cart-left a,.cart a{
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    padding-top: 1.5rem;
    text-align: center;
    color: #8d8a8a;
    font:14px ""
  }
  .icon1{
    display: block;
    position: absolute;
    top: 0;
    width: 23px;
    height: 20px;
    top: 9px;
    left: 50%;
    margin-left: -11.5px;
    background: url(http://img07.yiguoimg.com/e/web/161227/00585/180433/home.png) no-repeat;
    background-size: 100% 100%;
  }
  .icon2{
    display: block;
    position: absolute;
    width: 22px;
    height: 19.5px;
    top: 9px;
    left: 50%;
    margin-left: -11px;
    background: url(http://img05.yiguoimg.com/e/web/161227/00585/180433/shopping-cart.png) no-repeat;
    background-size: 100% 100%;
  }
  #cart-right{
    float:right;
    width:56%;
    height:100%;
    background:red;
    line-height: 1.5rem;
  }
  #cart-right a{
    line-height: 2.5rem;
    font-size: 16px;
    color: #fff;
    text-decoration:none
  }
  #number{
    background:red;
    position:absolute;
    border-radius:50%;
    top:2px;
    right:22px;
    color:#fff;
    min-width:16px;
  }

</style>

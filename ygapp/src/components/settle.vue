<template>
<div id="settle">
  <div class="cell-buy">
    <mt-cell title="支付方式" href="#/cart" is-link value="" class="cell"></mt-cell>
  </div>
  <div class="cell-offers">
    <mt-cell title="发票信息" href="#/cart" is-link value="不需要" class="cell"></mt-cell>
    <mt-cell title="优惠代码" href="#/cart" is-link value="请选择你的优惠代码" class="cell"></mt-cell>
  </div>
  <p class="remarks"><input type="text" placeholder="若您对订单有特殊要求，请填写备注"></p>
  <div class="product-message" id="warpper">
    <ul>
      <li class="clearfix" v-for="item in cartList">
        <img :src="item.SmallPic" alt="">
        <div class="shop-info">
          <span class="shop-description">{{item.CommodityName}}</span><br/>
          <span class="shop-number">x{{item.number}}</span>
        </div>
        <span class="shop-price">￥{{item.OriginalPrice}}</span>
      </li>
    </ul>
  </div>
  <div class="order-item">
    <p><span class="order-item-left">商品金额</span><span>￥{{price}}</span></p>
    <p><span class="order-item-left">运费</span><span>￥{{devilPrice}}</span></p>
    <p><span class="order-item-left">折扣</span><span class="discount">-￥{{discountPrice}}</span></p>
  </div>
  <p class="total">
    <span>应付金额：<i>￥{{parseFloat(price) + devilPrice - discountPrice}}</i></span>
    <button>提交订单</button>
  </p>
  <v-tabBar></v-tabBar>
</div>
</template>

<script type="text/ecmascript-6">
  import navbar from "./common/navbar.vue";
  import IScroll from 'iscroll';
  console.log(IScroll);

export default {
  name:"settle",
  data(){
    return {
      cartList:this.$store.store.state.cart.cart,
      price:this.$route.params.id,
      devilPrice:6.00,
      discountPrice:0.00
    }
  },
  components:{
    "v-tabBar":navbar
  },
  mounted(){
    let myIScroll = new IScroll("#warpper",{
      mouseWheel: true,
      scrollbars: true
    });
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">
  @import "../assets/css/index.scss";
  #settle{
    position: absolute;
    @include h(100%);
    @include w(100%);
    background-color:#eee;
    .cell{
      @include t-l(left);
    }
    .cell-buy{
      @include mb(0.45rem);
    }
    .cell-offers{
      @include mb(0.45rem);
    }
    .remarks{
      border:1px solid $lineColor;
      @include w(100%);
      input{
        @extend .outline;
        @include w(100%);
        @include h(2.4rem);
        @include fs(0.45rem);
      }
    }
    .product-message{
      @extend .clearfix;
      @include h(7rem);
      @include mt(0.45rem);
      @include fs(0);
      overflow: hidden;
      padding:0.5rem 0.5rem;
      background:$defaultBgColor;
      position:relative;
      border:1px solid $lineColor;
      ul{
        @include pb(1rem);
        li{
          position: relative;
          @include mb(0.2rem);
          border-bottom:1px solid #eeeeee;
          img{
            @include w(2.5rem);
            @include h(2.5rem);
            float: left;
          }
          .shop-info{
            @include pl(0.3rem);
            float: left;
            @include fs(0.6rem);
            span{
              float:left;
              @include mb(0.4rem);
            }
          }
          .shop-price{
            position: absolute;
            right: 0.4rem;
            top:0.6rem;
            @include fs(0.6rem);
          }
        }
      }
    }
    .order-item{
      @include mt(0.5rem);
      @include fs(0.7rem);
      background:$defaultBgColor;
      border:1px solid $lineColor;
      p{
        padding:0 0.5rem;
        @include mb(0.2rem);
        @extend .clearfix;
        span:first-child{
          float: left;
          color:$cartInfoColor;
        }
        span:last-child{
          float: right;
          &.discount{
            color:#0f0;
          }
        }
      }
    }
    .total{
      @include h(2.4rem);
      position: fixed;
      bottom:2rem;
      @include fs(0.75rem);
      @include lh(2.4rem);
      @include w(100%);
      @extend .clearfix;
      border-top:1px solid #eee;
      background:$defaultBgColor;
      span{
        float: left;
        margin-left:0.5rem;
        vertical-align: middle;
        i{
          color:#f00;
          font-style: normal;
        }
      }
      button{
        background:#f00;
        border:none;
        @extend .outline;
        border-radius:0.2rem;
        float: right;
        @include mt(0.35rem);
        margin-right:0.5rem;
        @include fs(0.65rem);
        @include w(3.6rem);
        @include h(1.5rem);
        color:$defaultBgColor;
      }
    }
  }
</style>


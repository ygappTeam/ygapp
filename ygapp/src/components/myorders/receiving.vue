<template>
  <div class="receiving">
    <ul class="orderlist">
      <li>
        <div class="status">
          <span class="text-left">
            <i>订单流水号：3123131</i>
            <i class="timer">2017-03-24 13:56:44</i>
          </span>
          <span class="text-right">已支付</span>
        </div>
        <div class="goods-pic">
          <span class="min-pic"><img src="../../assets/images/3333.jpg" alt=""></span>
        </div>
        <div class="total">
          <span class="total-left">实付：￥65.00</span>
          <span class="total-right"><a href="">查物流</a></span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name:"receiving"
  }
</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss" scoped>
  .receiving{
    background:#fbfafd;
    position:absolute;
    top:46px;
    bottom:2rem;
    width:100%;
    left:0;
  }
  .orderlist{
    overflow:hidden;
    
    li{
      width:100%;
      margin:0;
      border: 1px solid #ccc;
      border-width: 1px 0;
      margin-bottom: .5rem;
      background:#fff;
    }
    .status{
      width: 100%;
      text-align:left;
      overflow:hidden;
      padding: .25rem 15px;
      .text-left{
        color:#000;
        padding:0;
        float:left;
        font:14px "";

        .timer{
          display:block;
          color: #8d8a8a;
          margin-top:.1rem;
        }
      }
      .text-right{
        color:#008842;
        float:right;
        font:14px/2rem "";
      }
    }
    .goods-pic{
      padding: .5rem .75rem;
      height: 3.5rem;
      overflow: hidden;
      position: relative;
      border: 1px solid #ccc;
      background: #fff;
      .min-pic{
        float:left;
        height:2.5rem;
        width:2.5rem;
        img{
          width:100%;
          height:100%
        }
      }
    }
    .total{
      width: 100%;
      padding: .25rem .75rem;
      overflow:hidden; 
      .total-left{
        line-height:1.6rem;
        float:left;
        font-size: 14px;
      }
      .total-right{
        float: right;
        width: 4.5rem;
        background: #008842;
        color: #fff;
        border-radius: 4px;
        a{
          color:#fff;
          font-size:14px;
          text-decoration:none;
          line-height:1.7rem;
        }
      }
    }
  }
</style>
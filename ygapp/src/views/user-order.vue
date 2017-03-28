<template>
  <div class="user-order">
    <div class="order-head">
      <ul @click="changeclass($event)">
        <li :class="id==1?'active':''"><a href="#/userorder/allorder"  data-id="1" >全部</a></li>
        <li :class="id==2?'active':''"><a href="#/userorder/unpaid" data-id="2">待支付</a></li>
        <li :class="id==3?'active':''"><a href="#/userorder/receiving" data-id="3">待收货</a></li>
        <li :class="id==4?'active':''" style="border-right:none"><a href="#/userorder/comment" data-id="4">待评价</a></li>
      </ul>
    </div>
    <router-view></router-view>
    <navbar></navbar>
  </div>
</template>
<script>
  import Navbar from '../components/common/navbar.vue'
  export default {
    name:"user-order",
    data(){
      return {
        id:1
      }
    },
    components:{
      navbar:Navbar
    },
    methods:{
      changeclass(ev){
        this.id = ev.toElement.dataset.id
        console.log(this.id)
      }
    }
  }
</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss" scoped>
  .user-order{
    color:red
  }
  .order-head{
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #ccc;
    background: #fff;
    ul{
      margin: 5px 15px 8px 15px;
      border: 1px solid #008842;
      border-radius: 5px;
      overflow: hidden;
      li{
        box-sizing: border-box;
        width: 25%;
        height: 35px;
        float:left;
        border:solid #008842;
        border-width: 0px 1px 0 0 ;
        margin:0;
        font:14px/35px "";
        color:#008842;

        a{
          font:14px/35px "";
          color:#008842;
          text-decoration:none;
          height:35px;width:100%;
          float:left
        }

      }
      .active{
        background:#008842;
        color:#fff;
        font:16px/35px "";
        a{
          color:#fff;
        }
      }
    }
  }
</style>

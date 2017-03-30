<template>
  <div class="mine">
    <div class="head">
      <a href="javascript:;" @click="skip">
        <div class="user">
            <img :src="img" alt="">
          <div class="bg"></div>
        </div>
      </a>
      <a href="#/setting" class="setting"></a>
      <div v-show="show" class="userinfo">
        <p>{{username}}</p>
        <span>普通用户</span>
      </div>
      <p class="money">
        <span>悠币： <strong>{{coin}}</strong></span>
        <span>余额：<strong>¥0.00</strong></span>
      </p>
    </div>

    <ul class="user-list">
      <li v-for="data in listData">
        <a href="#/userorder/allorder" :style="{'background-position':data.bgPosition}"></a>
        <p>{{data.itemName}}</p>
      </li>
    </ul>
    <v-navbar></v-navbar>
  </div>

</template>

<script type="text/ecmascript-6">
  import navbar from './common/navbar'
  export default {
    name:"mine",
    components:{
      'v-navbar':navbar
    },
     data(){
        return {
          img:"http://img02.yiguo.com/e/web/150705/00781/102924/login-pic.jpg",
          coin:"0",
          username:"",
          show:false,
          listData:[
            {
              bgPosition:"0 0",
              itemName:"我的订单"
            },
            {
              bgPosition:"-48px 0",
              itemName:"优惠券"
            },
            {
              bgPosition:"-96px 0",
              itemName:"收货地址"
            },
            {
              bgPosition:"-240px 0",
              itemName:"客服电话"
            },
            {
              bgPosition:"-192px 0",
              itemName:"提货券"
            },
            {
              bgPosition:"-288px 0",
              itemName:"团来团趣"
            }
          ]
        }
      },
    mounted(){
      //页面加载时，取出localStory里的用户信息，
      // 判断有没有登录，若登录成功，则显示用户名等相关信息
      var usn=JSON.parse(window.localStorage.getItem("loginedUsers"));
      if(usn){
        this.username=usn;
        this.show=true;
        this.coin="100";
        this.img="http://img02.yiguo.com/e/web/150703/00781/140145/no-pic.jpg";
      }
    },
    methods:{
      skip:function(){
       if(this.show==false){
         location.href="#/login";
       }else{

       }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
  @import "../assets/css/mine.scss";
</style>


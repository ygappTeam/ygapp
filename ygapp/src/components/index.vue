<template>
  <div id="index" >
    <v-header></v-header>

    <!-- 轮播开始 -->
    <mt-swipe :auto="4000" id="index-swipe">
      <mt-swipe-item v-for="data in swipeData">
        <router-link :to="data.url">
        <img :src="data.img" alt="">
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 轮播结束 -->

    <!-- 首页导航开始 -->
    <ul id="index-menu">
      <li v-for="data in menuData">
        <a href="javascript:;">
          <img :src="data.img" alt="">
          <span>{{data.name}}</span>
        </a>
      </li>
    </ul>
    <!-- 首页导航结束 -->

    <!-- 首页商品推荐开始 -->
    <div id="pro-list">
      <!-- 循环推荐 -->
      <div class="pro-item" v-for="data in proData">
        <!-- 推荐大图 -->
        <a href="javascript:;" class="b-img">
          <img :src="data.bImg" alt="">
        </a>
        <!-- 推荐列表 -->
        <div class="pro-wrap">
          <div class="pro-list">
            <ul>
              <li v-for="item in data.proList">
                <router-link :to="'/detail/' + item.commodityCode">
                  <img :src="newImg" alt="" v-if="item.isNew" class="new">
                  <img :src="item.img" alt="" class="pro-img">
                  <p class="pro-name">{{item.name}}</p>
                  <p class="pro-price">￥{{item.price}}<span>/{{item.size}}</span></p>
                </router-link>
              </li>
              <a href="javascript:;" class="more">
                <span>查看更多<i></i></span>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 首页商品推荐结束 -->

    <!-- top10开始 -->
    <div id="top">
      <!-- top大图 -->
      <a href="javascript:;" class="top-img">
        <img src="http://img11.yiguoimg.com/e/items/2017/170119/9288700546949683_1125x408.jpg" alt="">
      </a>
      <!-- top列表 -->
      <div class="top-list">
        <div class="top-item" v-for="data in topData">
          <h2>——·{{data.topTitle}}·——</h2>
          <ul>
            <li v-for="item in data.topList">
              <router-link to="/detail">
                <img :src="newImg" alt="" v-if="item.isNew" class="new">
                <img :src="item.img" alt="" class="pro-img">
                <p class="pro-name">{{item.name}}</p>
                <p class="pro-price">￥{{item.price}}<span>/{{item.size}}</span></p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- top10结束 -->

    <div id="footer">
      <ul>
        <li><a href="javascript:;">客户端</a></li>
        <li><a href="javascript:;" class="active">触屏版</a></li>
        <li><a href="javascript:;">电脑版</a></li>
      </ul>
      <p>沪IPC备09008015号</p>
      <p>上海易果电子商务有限公司</p>
    </div>

    <!-- 回到顶部 -->
    <div id="back-top" v-show="newTop" @click="backTop">
      <img src="http://img07.yiguoimg.com/e/web/161230/00584/172344/top.png" alt="">
    </div>

    <!-- 广告 -->
    <div id="ad" v-if="ad">
      <img src="http://img10.yiguoimg.com/e/items/2017/170216/9288701121339984_1242x162.jpg" alt="">
      <span @click="ad = false">X</span>
    </div>

    <!-- 底部 -->
    <v-navbar></v-navbar>
  </div>
</template>


<script>
import axios from 'axios';
import navbar from './common/navbar'
import header from './common/header'

export default {
  name: 'index',
  components:{
    'v-navbar':navbar,
    'v-header':header
  },
  data () {
    return {
      swipeData: [
        {
          img: "http://img14.yiguoimg.com/e/items/2017/170322/9288705507009142_1125x652.jpg",
          url: ""
        },
        {
          img:"http://img11.yiguoimg.com/e/items/2017/170317/9288705346314865_1125x652.jpg",
          url:""
        },
        {
          img:"http://img11.yiguoimg.com/e/items/2017/170213/9288701036274253_1125x652.jpg",
          url: "/aDownload"
        },
        {
          img:"http://img09.yiguoimg.com/e/items/2017/170320/9288705429152372_1125x652.jpg",
          url: "/aPay"
        },
        {
          img:"http://img12.yiguoimg.com/e/items/2017/170206/9288700881936966_1125x652.jpg",
          url: "/aNewUser"
        }
      ],
      menuData: [
        {
          name: "会员签到",
          img: "http://img12.yiguoimg.com/e/items/2017/170309/9570179981812329_144.png"
        },
        {
          name: "会员福利",
          img: "http://img14.yiguoimg.com/e/items/2017/170320/9570180443087476_144.png"
        },
        {
          name: "精品原箱",
          img: "http://img09.yiguoimg.com/e/items/2017/170309/9570179981877865_144.png"
        },
        {
          name: "优惠券",
          img: "http://img13.yiguoimg.com/e/items/2017/170309/9570179981910633_144.png"
        },
        {
          name: "新品尝鲜",
          img: "http://img13.yiguoimg.com/e/items/2017/170309/9570179981943401_144.png"
        },
        {
          name: "热卖排行",
          img: "http://img12.yiguoimg.com/e/items/2017/170309/9570179981976169_144.png"
        },
        {
          name: "银行活动",
          img: "http://img12.yiguoimg.com/e/items/2017/170309/9570179982008937_144.png"
        },
        {
          name: "企业福利",
          img: "http://img14.yiguoimg.com/e/items/2017/170309/9570179982041705_144.png"
        }
      ] ,
      newImg: "http://img02.yiguo.com/e/web/130101/app/proms/2.png",
      proData: [],
      topData: [],
      wTop:false,
      ad: true
    }
  },
  methods: {
    loadPro(){
      axios.get('../../static/json/index-pro.json').then(res=>{
        this.proData = res.data;
        // console.log(res.data)
      }).catch(res=>console.log(res))
    },
    loadTop(){
      axios.get('../../static/json/index-top.json').then(res=>{
        this.topData = res.data;
        // console.log(res.data)
      }).catch(res=>console.log(res))
    },
    backTop(){
      var timer = setInterval(function (){
        if(document.body.scrollTop){
          document.body.scrollTop -= 100;
        } else {
          clearInterval(timer);
        }
      },20);
    }
  },
  computed:{
    newTop:function (){
        window.onscroll = function (){
        var top = document.body.scrollTop;
        if(top > 500){
           this.wTop = true;
          return this.wTop;
        } else {
          this.wTop = false;
          return this.wTop;
        }
      }.bind(this);
      return this.wTop;
    }
  },
  mounted () {
    this.loadPro();
    this.loadTop();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/index1.css';

</style>

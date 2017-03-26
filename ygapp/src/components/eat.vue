<template>
  <div id="eat">
    <!-- 顶部轮播开始 -->
    <mt-swipe :auto="4000" id="eat-swipe">
      <mt-swipe-item v-for="data in swipeImg"><img :src="data" alt=""></mt-swipe-item>
    </mt-swipe>
    <!-- 顶部轮播结束 -->

    <!-- 吃饭吧导航开始 -->
    <ul id="eat-menu">
      <li v-for="data in menuData">
        <a href="javascript:;">
          <img class="icon" :src="data.img" alt="">
          <span>{{data.name}}</span>
          <img class="new" v-if="data.new" src="http://img05.yiguoimg.com/e/web/170113/00581/160217/new.png"></img>
        </a>
      </li>
    </ul>
    <!-- 吃饭吧导航结束 -->
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
      <div id="eat-list">
        <dl v-for="data in listData">
          <router-link :to="'/article/' + data.EfruitArticleId">
            <dt>
              <img :src="data.PictureUrl" alt="">
              <span :style="{'background':typeColor[data.ArticleVote]}">{{data.OtherCategoryName}}</span>
              <p><i></i>{{data.TotalReadNum}}</p>
            </dt>
            <dd>
              <p class="name">{{data.EfruitArticleTitle}}</p>
              <p class="detail">{{data.EfruitArticleSummary}}</p>
              <div class="author">
                <img :src="data.AuthorPicture" alt="">
                <span>{{data.Author}}</span>
                <i>{{data.PublishedTimed}}</i>
              </div>
            </dd>
          </router-link>
        </dl>
      </div>
    </mt-loadmore>

    <!-- 底部 -->
    <v-navbar></v-navbar>

  </div>
</template>

<script>
import axios from 'axios';
import navbar from './common/navbar'

  export default {
    name:"eat",
    components:{
      'v-navbar':navbar
    },
    data(){
      return {
        swipeImg: [
          "http://img09.yiguoimg.com/e/items/2017/170314/585749457496187502_800x322.jpg",
          "http://img14.yiguoimg.com/e/items/2017/170320/585749457724711540_800x322.jpg",
          "http://img14.yiguoimg.com/e/items/2017/170314/585749457496121966_800x322.jpg",
          "http://img11.yiguoimg.com/e/items/2017/170322/585749457838711414_800x322.jpg",
          "http://img09.yiguoimg.com/e/items/2017/170314/585749457496187502_800x322.jpg",
          "http://img14.yiguoimg.com/e/items/2017/170320/585749457724711540_800x322.jpg"
        ],
        menuData: [
          {
            name: "做美食",
            img: "http://img13.yiguoimg.com/e/ad/2016/161020/586030925119660372_120x96.png",
            new:false
          },
          {
            name: "体验师",
            img: "http://img14.yiguoimg.com/e/ad/2016/161020/586030925119562068_120x96.png",
            new:false
          },
          {
            name: "涨知识",
            img: "http://img13.yiguoimg.com/e/ad/2016/161020/586030925119693140_120x96.png",
            new:false
          },
          {
            name: "生活家",
            img: "http://img12.yiguoimg.com/e/ad/2016/161020/586030925119725908_120x96.png",
            new:false
          },
          {
            name: "爱试吃",
            img: "http://img09.yiguoimg.com/e/ad/2017/170117/586030927703745073_120x96.png",
            new:true
          }
        ],
        typeColor:["#fff","rgb(248,76,103)","rgb(141,186,43)","rgb(250,174,30)","rgb(247,114,48)","rgb(60,159,120)"],
        listData: [],
        page:0,
        allLoaded: false
      }
    },
    methods: {
      loadBottom() {
      // 加载更多数据
        this.getData(); //让之前的数据和本次的数据合并

      },
      getData(){
        this.allLoaded =  this.page >= 9 ? true : false;
        axios.get('../../static/json/eatData.json').then(res=>{
          var totData = res.data;
          this.listData = this.listData.concat(totData[this.page++].RspData.ArticleList.List)
          console.log(this.listData);
          console.log(this.page);
          console.log(this.allLoaded);
        }).catch(res=>console.log(res))
      }
    },
    mounted () {
      this.getData();
    }
  }
</script>


<style scoped>
@import '../assets/css/eat.css';
</style>

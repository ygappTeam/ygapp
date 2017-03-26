<template>
  <div class="main">
    <header class="search">
      <input type="text" class='search_ipt' placeholder="请输入商品名称">
       <img src="../assets/images/search.png">
       <span>搜索</span>
    </header>
    <div class="nav">
    <ul >
      <li class='listwrapper' v-for="(item,index) in dataList" :index="index" @click="showDetail(item,index)"  >
        <div class="title">
          <img src="../assets/images/icon-catalog1.png" width="140" height="140">
          <p id="categoryname">{{item.CategoryName}}</p>
          <p id="des">{{item.Description}}</p>
        </div>
        <ul class="detailnav"  :class="{'show':item.showFlag}">
          <li v-for="(name,i) in dataList[index].Childs" :index="i">
            <a href="#/classify:id">
              {{name.CategoryName}}
            </a>
          </li>
        </ul>
      </li>
    </ul>
    </div>
    <v-navbar></v-navbar>
  </div>
</template>

<script>
import axios from 'axios';
import navbar from './common/navbar'
export default {
  name:'classifyNav',
  components:{
    'v-navbar':navbar
  },
  data(){
    return{
      dataList:[],
      i:-1
    }
  },
  mounted(){
    this.loadData()
  },
  methods:{
    loadData(){
      axios.get('../../static/json/classify.json').then(res=>{
        this.dataList = res.data.RspData.data;
      }).catch(res=>console.log(res))
    },
    showDetail(item,index){
      let _self = this;  
      this.dataList.forEach((el,i)=>{
        if(!el.showFlag){
          _self.$set(el,'showFlag',false)   
        }else{
          el.showFlag = false;
        }
      })  
      item.showFlag = true;
      if(this.i==index){
        item.showFlag = !item.showFlag;
      }this.i = index;
    }
  }
}
</script>

<style scoped>
   .search{
      position: relative;
      border-bottom: 2px solid #e1e5e5;
      padding-top:0.7rem;
       width:100%;
      height:2.5rem;
      font-size:0.7rem;
      color:#008842;
   }
   .search img{
    position: absolute;
    top: 0.4rem;
    left: 1.2rem;
    width: 1rem;
    height: 1rem;
    
   }
   .search_ipt{
    background: #f8f8f8;
    border-radius: 0.6rem;
    line-height:1.3rem;
    font-size: 0.7rem;
    height: 1.3rem;
    padding: 0 1rem 0 3rem;
    width: 12rem;
    border: none;
   }
   .nav{
     width:100%;
     height:100%;
   }
   .listwrapper{    
      width:100%;
      margin:0;
      padding-top:1.1rem
   }
   .title{
     border-bottom: 1px solid #e1e5e5;
     height:3rem;
     overflow:hidden;
     
   }
   .detailnav{
    display: none;
    width: 100%;
    list-style: none;
    border-bottom: 3px solid #e1e5e5;
    font-size:0.7rem;
    overflow:hidden;  
   }
   .detailnav li{
     float:left;
     width:3rem;
     margin:0.2rem 0.1rem;
   }
   .detailnav li a{
     color:#000
   }
   .celltext{
    margin-left: 3rem;
    padding-top: 0.9rem;
    overflow:hidden;
   }
  
   .title img{
    float:left;
    width:2.2rem;
    height:2.2rem;
   }
   #categoryname{
     font-size:0.8rem;
     text-align:left;
     margin-top:0.5rem;
   }
   #des{
     font-size:0.65rem;
     color:#8d8a8a;
     text-align:left;
   }
   .show {
     display:block;
   }
</style>
<template>
  <div class="main">
    <div class="nav">
      <router-link to="/">
        <img :src="hash=='/'?imgs[1]:imgs[0]">
        <p>首页</p>
      </router-link>
      <router-link to="/classify">
        <img :src="hash=='/classify'?imgs[3]:imgs[2]">
        <p>分类</p>
      </router-link>
      <router-link to="/eat">
        <img :src="hash=='/eat'?imgs[5]:imgs[4]">
        <p>吃饭吧</p>
      </router-link>
      <router-link to="/cart">
        <img :src="hash=='/cart'?imgs[7]:imgs[6]">
        <p>购物车</p>
      </router-link>
      <router-link to="/mine">
        <img :src="hash=='/mine'?imgs[9]:imgs[8]">
        <p>我的易果</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import i1 from '../../assets/images/nav_home_selected.png';
import i1a from '../../assets/images/nav_home_selected_active.png';
import i2 from '../../assets/images/nav_classify.png';
import i2a from '../../assets/images/nav_classify_active.png';
import i3 from '../../assets/images/nav_eat.png';
import i3a from '../../assets/images/nav_eat_active.png';
import i4 from '../../assets/images/nav_list.png';
import i4a from '../../assets/images/nav_list_active.png';
import i5 from '../../assets/images/nav_user.png';
import i5a from '../../assets/images/nav_user_active.png';

  export default {
    name:'navbar',
    data(){
      return{
        hash:'',
        imgs:[
          i1,i1a,i2,i2a,i3,i3a,i4,i4a,i5,i5a
        ]
      }
    },
    mounted(){
     this.judgeHash()
    },
    methods:{
      judgeHash(){
        this.hash = this.$router.currentRoute.path
     }
    }
  }
</script>

<style scoped>
  .nav{
    position:fixed;
    bottom:0;
    width:100%;
    height:2rem;
    background-color:#fff;
  }
  .nav img{
    width:1.3rem;
    height:1.3rem;
  }
  .nav a{
    float:left;
    width:20%;
    text-align:center;
    font-size:0.6rem;
    color:#8d8a8a;
    border-top:1px solid #cccccc;
  }


</style>

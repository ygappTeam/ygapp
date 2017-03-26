<template>
  <div class="main">
    <!--头部搜索框-->
    <header>
      <a href="#/choosecity" class="choose-city" >
        <span>{{city}}</span>
        <img src="../../assets/images/arrow.png"/>
      </a>
      <a href="#/classify" class="search">
        <img src="../../assets/images/search.png">
      </a>
    </header>
    <!--头部搜索框-->  
  </div>
</template>

<script type="es6">

  export default {
    name:'top',
    data(){
      return {
        city:''
      }
    },
    mounted(){
      
      this.city = this.$store.store.state.city
    }
  }
</script>

<style scoped>
  header{
    background:linear-gradient(to right, #36db84 , #0eb27b);
    overflow:hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.54rem;
    padding: .27rem .32rem .17rem 2.2rem;
    box-sizing: border-box;
    z-index: 99;
  }
  .choose-city{
    display:block;
    position: absolute;
    left: 0;
    top: .32rem;
    width: 2.5rem;
    height: .6rem;
    line-height: .64rem;
    font-size: .62rem;
    color: #fff;
    text-align: center;
    padding:.17rem 0 0 0;
  }
  .choose-city img{
    display:inline-block;
    margin:.1rem 0 0 0;
    width:0.3rem;
    height:0.3rem
  }
  .search{
    display:block;
    position: relative;
    width: 100%;
    height: 1.1rem;
    padding: none;
    margin:none;
    border-radius: .45rem;
    box-sizing: border-box;
    background: rgba(255,255,255,.2);
  }
  .search img{
    float:left;
    width:1.3rem;
    height:1.3rem;
    
  }
</style>
<template>
  <div class="products" id="products-list">
    <div class="products-head">
      <ul >
        <li @click="moren($event)" data-id="1" :class="dataset==1?'active':''">默认</li>
        <li @click="pricepaixu($event)" data-id="2" :class="dataset==2?'active':''">价格</li>
        <li class="bor-right" @click="rexiao($event)" data-id="3" :class="dataset==3?'active':''">热销</li>
      </ul>
    </div>
    <div class="lists">
      <ul>
        <li v-for="data in listdata">
          <p class="list-img">
            <a :href="'#/detail/'+data.CommodityCode">
              <img :src="data.SmallPic" alt="">
            </a>
          </p>
          <div class="goods-info">
            <p class="goods-name">{{data.CommodityName}}</p>
            <div class="goods-price">
              <span class="price">￥{{data.CommodityPrice}}</span>
              <span class="des">{{data.Spec}}</span>
            </div>
          </div>
          <div class="add-cart">

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
  <script>
    export default {
      name:'products',
      data(){
        return{
          order:true,
          dataset:1
        }
      },
      computed:{
        listdata(){
          return this.$store.store.state.listdata
        }
      },
      methods:{
        pricepaixu(ev){
          this.$store.store.dispatch('getListdata',{price:true,sales:false,order:this.order})
          this.order = !this.order;
          this.dataset = ev.toElement.dataset.id

        },
        moren(ev){
          this.$store.store.dispatch('getListdata',{price:false,sales:false,order:false})
          this.dataset = ev.toElement.dataset.id
        },
        rexiao(ev){
          this.$store.store.dispatch('getListdata',{price:false,sales:true,order:this.order})
          this.order = !this.order
          this.dataset = ev.toElement.dataset.id
        }
      },
      mounted (){
        console.log(this);
          this.$store.store.dispatch("getListdata",{});
          console.log(this.$store.store.state.listdata)
      }

    }
  </script>
<style lang="scss" type="text/scss" rel="stylesheet/scss" scoped>

  #products-list{width:100%;

    border-bottom:1px solid #eee;
    overflow:hidden;
    background:#fcfbfd;

  .products-head{
    width:90%;
    overflow:hidden;
    margin:0 auto;
  };
  .products-head .bor-right{
    border-right:none
  }
  .products-head ul{overflow:hidden;width:100%;border:1px solid green;margin:5px 0 10px 0;border-radius:5px;}
  .products-head ul li{float:left;width:33.3%;border-right:1px solid green;height:35px;font-size:14px !important;line-height:35px;margin:0;color:green;}
  .products-head .active{
    color:#fff;
    font:16px/35px "";
    background-image:url(http://img02.yiguo.com/e/web/150623/00781/173832/filter_arrow.png) no-repeat;
    background-size: 30px 15px;
    background-color:green;
  }
  .lists{
    position:absolute;
    top:50px;
    width:100%;
    left:0;

  }
  .lists ul{
    overflow:hidden
  }
  .lists ul li{
    margin:0;
    width:100%;
    padding: 12px 15px;
    border-bottom: 1px solid #ccc;
    min-height:2rem;
    overflow:hidden;
    position:relative;
  }
  .lists .list-img{
    float:left;
    width:90px;
    height:90px;
    border:1px solid #fefefe;
    overflow:hidden;
    margin-right:10px;
  }
  .list-img img{width:100%;}
  .goods-info .goods-name{
    padding-top:5px;
    font-size: 14px;
    color: #252525;
    line-height: 20px;
    height: 45px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 5px;
    padding-right: 10px;
    text-align:left;
    margin-left:5px;
  }
  .goods-info .goods-price{
    color: #8d8a8a;
    font:14px "";
    text-align:left;
  }
  .goods-price{
    position:absolute;bottom:10px;left:110px
  }
  .goods-price .price{color:red;font-size:16px;}
  .des{
    font-size:12px !important;
  }
  .add-cart{
    background: url(../assets/images/add_cart.png) no-repeat center;
    background-size: 24px 24px;
    position:absolute;
    right: 5px;
    bottom: 35px;
    overflow: hidden;
    width: 42px;
    height: 42px;
  }
  }
</style>

<template>
  <div id="cart">
    <ul>
      <li v-for="cart in cartDataList">
        <img :src="cart.img" alt="">
        <div class="product-info">
          <p class="productName"></p>
          <p class="price-info">
            <span class="price" v-text="cart.price"></span>
            <span class="info" v-text="cart.info"></span>
          </p>
          <p class="calcul">
            <input type="button" id="min" value="-">
            <input type="text" id="num" v-model="cart.number">
            <input type="button" id="plus" value="+">
          </p>
        </div>
        <button id="delete">删除</button>
        <p id="send">
          <img :src="cart.sendImg" alt="">
          <span v-text="cart.sendInfo"></span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"cart",
    data(){
      return {
        cartDataList:[{
          img:"http://img10.yiguoimg.com/e/items/2017/170314/9288705202430574_300.jpg",
          productName:"延时木奶牛场",
          price:"￥65.80",
          info:"lL/瓶*2",
          number:2,
          sendImg:"http://img07.yiguoimg.com/e/web/160223/00909/161252/07.png",
          sendInfo:"仅限 每周一、每周三、每周六、每周日配送"
        }]
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
  @import "../assets/css/index.scss";
  #cart{
    border:1px solid #f00;
    ul{
      li{
        @include h(7rem);
        width:100%;
        border:1px solid #0f0;
      }
    }
  }
</style>


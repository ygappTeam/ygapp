<template>
  <div class="main">
    <!--城市选择-->
    <div class="choose_list">
      <h3 class="title">自配城市</h3>
      <ul class="hotcity">
        <li v-for="(city,index) in hotCity" :index="index" :class="{'active':city.activeFlag}"  @click="cityname(city.Name)">
          <span>{{city.Name}}</span>
        </li>
      </ul>
      <h3 class='title'>全部城市</h3>
      <ul class="citylist">
        <li v-for="(city,index) in cityList" :index="index" :class="{'active':city.activeFlag}"  @click="cityname(city.Name)">
          <span>{{city.Name}}</span>
        </li>
      </ul>
    </div>
    <!--城市选择-->
  </div>
</template>

<script type="es6">
import axios from 'axios'

  export default {
    name:'chooseCity',
    data(){
      return{
        hotCity:[],
        cityList:[],
        city:''
      }
    },
    mounted(){
      this.getCityList()
    },
    methods: {
        getCityList(){
          let _self = this;
          axios.get('../../static/json/city.json').then(res=>{
            _self.hotCity = res.data.HotCityList
            _self.cityList = res.data.CityList;}
          ).catch(res=>console.log(res));
        },
        chooseCity(item,index){
          var _self = this;
          this.cityList.forEach((item,index)=>{
            if(!item.activeFlag){
            _self.$set(item,'activeFlag',false);

            }else{
              item.activeFlag = false;
            }
          })
          this.cityList[index].activeFlag = true;
          this.hotCity[index].activeFlag = true;
        },
        cityname(city){
          this.$store.store.dispatch("changeCity",city);
          //window.location.hash="/"
          window.history.back();
        }
    }
  }
</script>

<style scoped>
.choose_list{
    height: 100%;
    background-color: #eef5e9;
}
li{
  float:left;
  margin:0.5rem 0.6rem 0.6rem 0.6rem
}

  .title{
    font-size:0.7rem;
    margin: 0;
    padding: 5px 10px;
    font-weight: normal;
    color: #888;

  }
  .hotcity{
    width:100%;
    height:15rem;
    overflow:hidden;
  }
  .hotcity li span {
    display: inline-block;
    background-color: #fff;
    color: #000;
    border-radius: 3px;
    border: solid 1px #ccc;
    text-align: center;
    width: 2.6rem;
    height:1.3rem;
    line-height:0.8rem;
    padding: 5px 0;
    font-size:0.7rem;
  }
  .citylist{
    background-color: #fff;
    border-top: solid 1px #ccc;
    border-bottom: solid 1px #ccc;
    overflow:hidden;
    height:100%;
    font-size:1.4rem;
  }
  .citylist li span{
    border: solid 1px #fff;
    border-radius: 3px;
    text-align: center;
    display: inline-block;
    background-color: #fff;
    color: #000;
    width: 2.6rem;
    height:1.3rem;
    line-height:1.3rem;
    padding: 5px 0;
    font-size:0.75rem;
  }
    .active a{
    background-color: #008842;
    color: #fff;
    border-color: #008842;
    text-decoration:none;
  }
</style>

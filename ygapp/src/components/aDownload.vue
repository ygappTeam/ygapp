<template>
	<div id="a-download">
		<div class="imgs">
			<router-link v-for="data in imgData" :to="data.url">
				<img :src="data.img" alt="">
			</router-link>
		</div>
		<div class="city">
			<a href="#/choosecity">
        <img src="http://img06.yiguoimg.com/e/web/160623/00781/143124/position.png"/>
        <span>{{city}}</span>
      </a>
		</div>
		<div id="back-top" v-show="newTop" @click="backTop">
      <img src="http://img07.yiguoimg.com/e/web/161230/00584/172344/top.png" alt="">
    </div>
	</div>
</template>

<script>
	export default {
		name: 'ADownload',
		data () {
			return {
				imgData: [
					{
						img:"http://img09.yiguoimg.com/e/items/2017/170207/9288700917228103_800x1080.jpg",
						url:""
					},
					{
						img:"http://img12.yiguoimg.com/e/items/2017/170215/9288701088965199_800x998.jpg",
						url: "/register"
					},
					{
						img:"http://img13.yiguoimg.com/e/items/2017/170207/9288700917326407_456x1600.jpg",
						url: ""
					},
					{
						img:"http://img13.yiguoimg.com/e/items/2017/170207/9288700917424711_800x1358.jpg",
						url: ""
					},
					{
						img:"http://img11.yiguoimg.com/e/items/2017/170207/9288700917555783_800x220.jpg",
						url:""
					},
					{
						img:"http://img13.yiguoimg.com/e/items/2017/170207/9288700917654087_800x322.jpg",
						url:""
					},
					{
						img:"http://img14.yiguoimg.com/e/items/2017/170207/9288700917686855_800x314.jpg",
						url:""
					},
					{
						img:"http://img10.yiguoimg.com/e/items/2017/170207/9288700917719623_800x152.jpg",
						url:""
					},
					{
						img:"http://img12.yiguoimg.com/e/items/2017/170207/9288700918669895_800x412.jpg",
						url:""
					}
				],
      	wTop:false,
				city: ''
			}
		},
		mounted(){
      this.city = this.$store.store.state.city      
    },
    methods: {
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
	  }
	}
</script>

<style scoped>
	#a-download .city {
		position: absolute;
		width: 3rem; height: 1.5rem;
		top: 20px; right: 20px;
		font-size: 0.7rem;
	}
	#a-download .city a span {
		color: #fff;
		-webkit-text-stroke: 0.03rem #666;	/* 字体边框 */
		font-weight: bold;
		float: left;
		line-height: 1.5rem;
	}
	#a-download .city a img {
		width: 1.5rem; height: 1.5rem;
		float: left;
		margin-right: 2px;
	}
</style>
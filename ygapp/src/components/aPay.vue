<template>
	<div id="a-pay">
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
	</div>
</template>

<script>
	export default {
		name: 'APay',
		data () {
			return {
				imgData: [
					{
						img:"http://img14.yiguoimg.com/e/items/2017/170320/9288705417683572_750x362.jpg",
						url:""
					},
					{
						img:"http://img12.yiguoimg.com/e/items/2017/170323/9288705577296503_750x397.jpg",
						url: ""
					},
					{
						img:"http://img09.yiguoimg.com/e/items/2017/170324/9288705648861816_750x130.jpg",
						url: ""
					},
					{
						img:"http://img12.yiguoimg.com/e/items/2017/170324/9288705648894584_750x74.jpg",
						url:""
					},
					{
						img:"http://img12.yiguoimg.com/e/items/2017/170324/9288705649025656_750x188.jpg",
						url: ""
					},
					{
						img:"http://img12.yiguoimg.com/e/items/2017/170320/9288705417912948_374x142.jpg",
						url: ""
					},
					{
						img:"http://img11.yiguoimg.com/e/items/2017/170320/9288705417945716_376x142.jpg",
						url: ""
					}
				],
				city: ''
			}
		},
		mounted(){
      this.city = this.$store.store.state.city
    }
	}
</script>

<style scoped>
	#a-pay .city {
		position: absolute;
		width: 3rem; height: 1.5rem;
		top: 20px; right: 20px;
		font-size: 0.7rem;
	}
	#a-pay .city a span {
		color: #fff;
		-webkit-text-stroke: 0.03rem #666;	/* 字体边框 */
		font-weight: bold;
		float: left;
		line-height: 1.5rem;
	}
	#a-pay .city a img {
		width: 1.5rem; height: 1.5rem;
		float: left;
		margin-right: 2px;
	}
	img {
		display: block;
	}
	#a-pay .imgs a:nth-last-child(-n+2) img {
		float: left;
		width: 50%;
	}
</style>
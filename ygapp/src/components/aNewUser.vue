<template>
	<div id="a-new-user">
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
		<router-link class="to-cart" to="/cart"></router-link>
	</div>
</template>

<script>
	export default {
		name: 'ANewUser',
		data () {
			return {
				imgData: [
					{
						img:"http://img11.yiguoimg.com/e/items/2017/170118/9288700440519218_800x1009.jpg",
						url:""
					},
					{
						img:"http://img12.yiguoimg.com/e/items/2017/170215/9288701087982159_800x435.jpg",
						url: ""
					},
					{
						img:"http://img11.yiguoimg.com/e/items/2017/170215/9288701088277071_800x457.jpg",
						url: ""
					},
					{
						img:"http://img14.yiguoimg.com/e/items/2017/170215/9288701088604751_800x400.jpg",
						url: "/register"
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
	#a-new-user .to-cart {
		display: block;
		position: fixed;
		width: 1.65rem; height: 1.65rem;
		background: url('http://img07.yiguoimg.com/e/web/160623/00781/143124/btn-cart.png') no-repeat;
		background-size: 1.65rem;
		bottom: 20px; right: 20px;
	}
	#a-new-user .city {
		position: absolute;
		width: 3rem; height: 1.5rem;
		top: 20px; right: 20px;
		font-size: 0.7rem;
	}
	#a-new-user .city a span {
		color: #fff;
		-webkit-text-stroke: 0.03rem #666;	/* 字体边框 */
		font-weight: bold;
		float: left;
		line-height: 1.5rem;
	}
	#a-new-user .city a img {
		width: 1.5rem; height: 1.5rem;
		float: left;
		margin-right: 2px;
	}
</style>
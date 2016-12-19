<template>
  <div class="shop">
  	<div class="shop-content">
  		<a href="">
  			<img :src="shopImg" alt="">
			<div class="newshop">
				{{ shopContent }}
			</div>
  		</a>
  	</div>
  </div>
</template>

<script>
export default {
	props: ['imgShop'],
	data () {
		return this.imgShop
	}
}
</script>

<style scoped lang='less'>
	.shop-content{
		width: 285px;
		height: 300px;
		position: relative;
		background-color: black;
		float: left;
		margin-left: 20px; 
		margin-bottom: 20px;
		img{
			width: 100%;
			height: 100%;
		}
		.newshop{
			border: 2px solid white;
			position: absolute;
			top: 240px;
			left: 95px;
			color: white;
		}
	}
	.shop:nth-child(4n+1){
		.shop-content{
			margin-left: 0;
		}
	}
</style>

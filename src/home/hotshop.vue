<template>
  <div class="hotshop">
  	<div class="shop-content">
  		<a href="">
  			<img :src="shopImg" alt="">
			<div class="company-description">
				{{ shopContent }}
			</div>
			<div class="shop-price">
				{{ shopPrice }}
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
		border: 1px solid #999999;
		width: 285px;
		height: 400px;
		box-sizing: border-box;
		position: relative;
		background-color: white;
		float: left;
		margin-left: 20px; 
		margin-bottom: 20px;
		img{
			width: 100%;
			height: 300px;
		}
		.company-description{
			margin-top: 20px;
			margin-bottom: 10px;
			font-size: 14px;
			text-align: center;
		}
		.shop-price{
			width: 100px;
			height: 30px;
			margin: 0 auto;
			font-size: 20px;
			color: #e83712;
			line-height: 30px;
			padding:20 10;
			text-align: center;
			border: 1px solid #e83712;
			border-radius: 5px;
			box-sizing: border-box;
		}
	}
	.hotshop:nth-child(4n+1){
		.shop-content{
			margin-left: 0;
		}
	}
</style>

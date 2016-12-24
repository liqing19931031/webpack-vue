<template>
	<div class="all-good">
		<div class="good-nav">
			<div class="nav-title text-big">
				Classification of goods
			</div>
			<div class="text-normal">
				 <div class="nav-content" v-for='nav in shopNav'>
				 	{{nav}}
				 </div>
			</div>
		</div>
		<div class="good-view">
			<div class="view-title">
				
			</div>
			<div class="views-content">
				<div class="view-content" v-for="(item, index) in arrays">
					<img :src='shopContent.img' alt="">
					<div class="view-text text-normal">
						{{shopContent.description}}
					</div>
					<div class="text-price text-normal">
						${{shopContent.price}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
var arrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
export default {
	props: ['shopNav', 'shopContent'],
	data () {
		return {
			arrays: arrays
		}
	},
	methods: {
		selectView: function () {
			this.$emit('selectView')
		}
	}
}
</script>
<style scoped lang='less'>
@import '../css/common.less';
.all-good{
	float: left;
	margin-top: 20px;
	.good-nav{
		float: left;
		width: 280px;
		border:1px solid @borderColor;
		box-sizing: border-box;
		.nav-title{
			height: 40px;
			text-align: center;
			line-height: 40px;
			color: white;
			background-color: @theme;
			box-sizing: border-box;
			border-bottom: 1px solid @borderColor;
		}
		.nav-content{
			text-align: center;
			color: @textColor;
			cursor: pointer;
			border-bottom: 1px solid @borderColor;
			padding: 10px 0px;
		}
	}
	.good-view{
		float: left;
		width: 900px;
		margin-left: 20px;
		.view-title{
			background-color: @bgColor;
			height: 40px;
		}
		.views-content{
			.view-content{
				border:1px solid black;
				width: 280px;
				box-sizing: border-box;
				height: 350px;
				float: left;
				margin-left: 30px;
				margin-bottom: 30px;
				img{
					width: 100%;
					height: 250px;
					display: block;
				}
				.view-text{
					padding: 10px;
					height: 50px;
					box-sizing: border-box;
				}
				.text-price{
					padding: 2px;
					color: #e83712;
					text-align: center;
					border:1px solid #e83712;
					border-radius: 5px;
					width: 85px;
					margin:0 auto;
				}
			}
			.view-content:nth-child(3n+1){
				margin-left: 0;
			}
		}
	}
}
</style>
<template>
	<div class="all-good">
		<div class="good-nav">
			<div class="nav-title text-big">
				Classification of goods
			</div>
			<div class="text-normal">
				 <div class="nav-content" v-for='nav in this.data'>
				 	{{nav}}
				 </div>
			</div>
		</div>
		<div class="good-view">
			<div class="view-title">
				
			</div>
			<div class="view-content">
				
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['shopNav'],
		data () {
			return {
				data: this.shopNav
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
	}
}
</style>
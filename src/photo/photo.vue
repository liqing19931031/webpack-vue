<template>
	<div class="contain">
		<company-detail :company-des="company"></company-detail>
		<div class="company-album">
			<div class="album-title">
				The company photo album
			</div>
			<div class="album-content">
				<div class="one-photo" v-for="img in images">
					<a href="">
						<div class="triangle"></div>
						<div class="text-color">PHOTO</div>
						<img :src="img" alt="">
					</a>
				</div>
			</div>
			<div class="clearBoth"></div>
		</div>
	</div>
</template>
<script>
import Vue from 'vue'
import companyDetail from '../component/companyDetail.vue'
let photo = Vue
let company = {
	companyName: '浙江杭州,马老板皮包公司,专卖各种皮包皮',
	companyImg: '',
	shopTime: '2012-12-12',
	phone: '010-1008610086',
	Detailed: 'Yongjia county, zhejiang OuBei Town Jia industrial zone luen hing east road no. 59'
}
let images = [];
for(let a = 0; a < 12; a++){
	let b = a + 1;
	images.push( require('../assets/' + b + '.jpg' ))
}
export default {
	data () {
		return { 
			company: company,
			images: images
		}
	},
	components: {
		'company-detail': companyDetail
	}
}
</script>
<style scoped lang='less'>
	@import '../css/common.less';
	.company-album{
		margin-left: 20px;
		width: 900px;
		float: left;
	}
	.album-title{
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: @fontHuge;
	}
	.album-content{
		width: 100%;
		border: 1px solid @borderColor;
		box-sizing: border-box;
		height: 980px;
		padding:9px;
		.one-photo{
			position: relative;
			float: left;
			width: 200px;
			height: 300px;
			margin: 10px;
			.triangle{
				position: absolute;
				left: 0;
				top: 0;
			    width: 0;
			    height: 0;
			    border-top: 50px solid @theme;
			    border-right: 50px solid transparent;
			}
			.text-color{
				font-size: @fontSmall;
				color: white;
				position: absolute;
				top: 11px;
				left: 0px;
				transform: rotate(-45deg)
			}
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>

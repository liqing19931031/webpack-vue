<template>
  <div class="contain">
    <company-detail :company-des="company"></company-detail>
	<div class="shop-view">
		<slide :slides="slides"></slide>
	</div>
    <shop-nav 
    v-on:selectView="changeSelect"
    :shop-nav="navData"
	:shop-content="shopContent"
    ></shop-nav>
    <div class="clearBoth"></div>
  </div>
</template>
<script>
import companyDetail from '../component/companyDetail.vue'
import shopNav from '../component/shopNav.vue'
import slide from '../component/slide.vue'
let company = {
	companyName: '浙江杭州,马老板皮包公司,专卖各种皮包皮',
	companyImg: '',
	shopTime: '2012-12-12',
	phone: '010-1008610086',
	Detailed: 'Yongjia county, zhejiang OuBei Town Jia industrial zone luen hing east road no. 59'
}
let navData = [];
let images = [];
let slides = [];
let shopContents = [];
for(let a = 0; a < 12; a++){
	let b = a + 1;
	shopContents.push({
		img: require('../assets/shop/shop-' + b + '.jpg' ),
		price: b,
		description: '我是第' + b + '个分类下的商品'
	})
	if (a < 4) {
		slides.push({ 
			img: require('../assets/banner' + b + '.jpg' ),
			url: ''
		})
	}
	navData.push('我是分类' + b)
	images.push( require('../assets/' + b + '.jpg' ))
}
export default {
	data () {
		return {
			company: company,
			images: images,
			navData: navData,
			slides: slides,
			shopContent: shopContents[0]
		}
	},
	methods: {
		changeSelect: function(index) {
			this.$set(this, 'shopContent' ,shopContents[index])
		}
	},
	components: {
		'company-detail': companyDetail,
		'shop-nav': shopNav,
		'slide': slide
	}
}
</script>
<style>
	@import '../css/common.less';
	.shop-view{
		height: 400px;
		float: right;
		margin-left: 20px;
		width: 900px;
	}
</style>
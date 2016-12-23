<template>
  <div id="home">
    <div class="banner">
    </div>
    <div class="contain">
    	<shop v-for="(item, index) in items" :img-shop="item.imgItem"></shop>
    	<div class="clearBoth"></div>
    </div>
    <div class="contain">
    	<hot-shop v-for="(item, index) in items2" :img-shop="item.imgItem"></hot-shop>
    	<div class="clearBoth"></div>
    </div>
    <div class="contant">
    	<shop-footer :company-description="company"></shop-footer>
    </div>
  </div>
</template>
<script>
import shop from './shop.vue'
import hotshop from './hotshop.vue'
import shopfooter from './shopfooter.vue'
let imgItem = [];
let imgItem2 = [];
let company = {
	companyName: '浙江杭州,李大王皮包公司,专卖各种皮包皮',
	companyImg: '',
	shopTime: '2012-12-12',
	phone: '010-1008610086',
	Detailed: 'Yongjia county, zhejiang OuBei Town Jia industrial zone luen hing east road no. 59'
}
for(let a = 0; a < 8; a++){
	let b = a + 1;
	imgItem.push({ 
		imgItem: { 
			shopContent: 'SHOP NEW' + b,
			shopImg: require('../assets/' + b + '.jpg')
		}
	})
}
for(let a = 0; a < 16; a++){
	let b = a + 1;
	imgItem2.push({
		imgItem: { 
			shopContent: 'SHOP NEW' + b,
			shopImg: require('../assets/' + b + '.jpg'),
			shopPrice: '$' + (b + 1)
		}
	})
}
export default {
	data () {
		return {
			imgItem: {
				shopContent: 'SHOP OLD',
				shopImg: require('../assets/2.jpg')
			},
			items: imgItem,
			items2: imgItem2,
			company: company
		}
	},
	components: {
      'shop': shop,
      'hot-shop': hotshop,
      'shop-footer': shopfooter
    },
    methods:{

    }
}
</script>
<style lang='less'>
	@import '../css/common.less';
	@import '../css/base/fn.less';
	@import '../css/icon/weui-icon_font.less';
	.banner{
		height: 400px;
		background: url(../assets/banner.jpg) center center no-repeat;
		background-size: 100% 100%;
	}
	.clearBoth{
		clear: both;
	}
</style>
<template>
  <div id="home">
    <div class="banner">
    </div>
    <div class="contain">
    	<shop v-for="(item, index) in items" :img-shop="item.imgItem"></shop>
    </div>
    <div class="contain">
    	<hot-shop v-for="(item, index) in items2" :img-shop="item.imgItem"></hot-shop>
    </div>
  </div>
</template>
<script>
import shop from './shop.vue'
import hotshop from './hotshop.vue'
let imgItem = [];
let imgItem2 = [];
for(let a = 0; a < 8; a ++){
	let b = a + 1;
	imgItem.push({ 
		imgItem: { 
			shopContent: 'SHOP NEW' + b,
			shopImg: require('../assets/' + b + '.jpg')
		}
	})
}
for(let a = 0; a < 16; a ++){
	let b = a + 1;
	imgItem2.push({
		imgItem: { 
			shopContent: 'SHOP NEW' + b,
			shopImg: require('../assets/' + b + '.jpg')
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
			items2: imgItem2
		}
	},
	components: {
      'shop': shop,
      'hot-shop': hotshop
    },
    methods:{

    }
}
</script>
<style lang='less'>
	@import '../css/common.less';
	.banner{
		height: 400px;
		background: url(../assets/banner.jpg) center center no-repeat;
		background-size: 100% 100%;
	}
</style>
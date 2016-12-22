<template>
	<div class="slide">
		<div class="slide-imgs">
			<div class="slide-img" v-for="(item, index) in slides" v-bind:class="nowIndex === index ? 'on' : '' ">
				<img :src="item.img" alt="">
			</div>
			<div class="clearBoth"></div>
		</div>
		<div class="slide-dots">
			<div class="slide-dot" v-for="(item, index) in slides" @click="goSlide(index)" v-bind:class="nowIndex === index ? 'on' : '' "></div>
		</div>
	</div>
</template>
<script>
export default {
	props: ['slides'],
	data () {
		return {
			nowIndex: 0
		}
	},
	created: function(){
		this.startSlide()
	},
	methods: {
		goSlide: function(index) {
			this.nowIndex = index;
		},
		startSlide: function() {
			this.nowIndex = this.nowIndex > 3 ? 0 : this.nowIndex
			setTimeout( () => {
				this.nowIndex++;
				this.startSlide();
			}, 2500)
		}
	}
}
</script>
<style lang='less'>
	@import '../css/common.less';
	.slide{
		width: 900px;
		height: 400px;
		position: relative;
		.slide-imgs{
			height: 400px;
			overflow: hidden;
			.slide-img{
				position: absolute;
				top: 0;
				left: 0;
				opacity: 0;
				transition: all 0.4s ease-in-out;
				&.on{
					opacity: 1;
				}
				img{
					width: 900px;
					height: 400px;
				}
			}
		}
		.slide-dots{
			height: 20px;
			position: absolute;
			bottom: 20px;
			right: 20px;
			.slide-dot{
				width: 20px;
				height: 20px;
				cursor: pointer;
				margin: 0 2px;
				background-color: @borderColor;
				border-radius: 50%;
				float: left;
				&.on{
					background-color: @dotColor;
				}
			}
		}
	}
</style>
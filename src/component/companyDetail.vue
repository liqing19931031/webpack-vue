<template>
	<div class="company">
		<div class="information text-huge">
			Store Infomation
		</div>
		<div class="companyname text-big">
			{{ data.companyName }}
		</div>
		<div class="company-detial text-small">
			<div class="detail-line"><div class="text-left">credit:</div>{{ data.shopTime }}</div>
			<div class="detail-line"><div class="text-left">certification:</div>{{ data.phone }}</div>
			<div class="detail-line"><div class="text-left">Gem shop time:</div>{{ data.shopTime }}</div>
			<div class="detail-line"><div class="text-left">the phone:</div>{{ data.phone }}</div>
			<div class="detail-line"><div class="text-left">Detailed address:</div>{{ data.Detailed }}</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['companyDes'],
		data () {
			return {
				data: this.companyDes,
				sholdDelete: true
			}
		},
		methods: {
			deleteAll: function() {
				this.sholdDelete = !this.sholdDelete;
			}
		}
	}
</script>
<style scoped lang='less'>
@import '../css/common.less';
	.company{
		float: left;
		width: 280px;
		height: 400px;
		border:1px solid @borderColor;
		box-sizing: border-box;
		.information{
			height: 60px;
			text-align: center;
			line-height: 60px;
			color: white;
			background-color: @theme;
			box-sizing: border-box;
			border-bottom: 1px solid @borderColor;
		}
		.companyname{
			padding: 5px 10px;
			height: 60px;
			text-align: left;
			box-sizing: border-box;
			border-bottom: 1px solid @borderColor;
		}
		.company-detial{
			color: @textColor;
			padding: 20px 10px;
			.detail-line{
				display: block;
				margin:15px 0;
				.text-left{
					width: 140px;
					float: left;
				}
			}
		}
	}
</style>
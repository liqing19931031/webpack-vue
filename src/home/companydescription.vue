<template>
	<div class="company">
		<div v-if="this.sholdDelete">公司名称: {{ data.companyName }}</div>
		<div v-if="this.sholdDelete">{{ data.shopTime }}</div>
		<div v-if="this.sholdDelete">{{ data.phone }}</div>
		<button @click='deleteAll()'>删除</button>
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
				this.sholdDelete = false
			}
		}
	}
</script>
<style scoped lang='less'>
	.company{

	}
</style>
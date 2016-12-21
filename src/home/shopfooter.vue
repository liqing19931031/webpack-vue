<template>
	<div class="contain">
		<company1 :company-des='this.companyDescription'></company1>
	</div>
</template>
<script>
	import company1 from '../component/companyDetail.vue'
	export default {
		props: ['companyDescription'],
		data () {
			return { 
				myname: 'lixianseng'
			}
		},
		components: {
			company1: company1
		}
	}
</script>
<style>
	
</style>
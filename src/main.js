import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import home from './home/home.vue'
import ptoducts from './ptoducts/ptoducts.vue'
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/',
			redirect: '/home' 
		},
		{
			path: '/home',
      		component: home
    	},
    	{
      		path: '/ptoducts',
      		component: ptoducts
    	}
	]
})

const app = new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app')
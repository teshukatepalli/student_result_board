import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Admin from '../views/Admin'
import Results from '../views/results.vue'
Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Dashboard',
			component: Dashboard,
			children: [
				{
					path: '',
					name: 'Results',
					component: Results,
				},
				{
					path: '/Admin',
					name: 'Admin',
					component: Admin,
				}
			]
		},
	]
})

export default router

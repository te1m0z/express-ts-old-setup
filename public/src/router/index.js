import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomePage.vue'
import auth from '@/router/auth'
import categories from '@/router/categories'
import error from '@/router/error'
import posts from '@/router/posts'

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomeView
	},
	...auth,
	...categories,
	...posts,
	...error
]

const routerOptions = {
	history: createWebHistory(),
	routes
}

const router = createRouter(routerOptions)

export default router

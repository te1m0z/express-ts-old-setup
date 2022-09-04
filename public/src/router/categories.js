import CategoryView from '@/pages/CategoryPage'

export default [
	{
		path: '/category/:id',
		name: 'CategoryView',
		component: CategoryView,
	},
	{
		path: '/category',
		redirect: '/',
	},
]

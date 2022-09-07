import PostView from '@/pages/PostPage.vue'

export default [
	{
		path: '/post/:id',
		name: 'PostView',
		component: PostView,
	},
	{
		path: '/post',
		redirect: '/',
	},
]

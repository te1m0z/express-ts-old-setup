export default [
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		component: () => import('@/pages/NotFoundPage.vue'),
	},
]

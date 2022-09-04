export default {
	namespaced: true,
	actions: {
		async fetchPosts(context) {
			fetch('http://localhost:5000/api/posts')
				.then((res) => res.json())
				.then((data) => context.commit('setPosts', data.success.posts))
				.catch((error) =>
					console.log('Ошибка при запросе к постам: ', error)
				)
		}
	},
	mutations: {
		setPosts(state, posts) {
			state.posts = posts
		}
	},
	state() {
		return {
			posts: []
		}
	},
	getters: {
		getPosts(state) {
			return state.posts
		}
	}
}

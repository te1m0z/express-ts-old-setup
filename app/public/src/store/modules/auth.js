import axios from 'axios'

export default {
	namespaced: true,
	state() {
		return {
			user: {
				id: null,
				login: null
			}
		}
	},
	actions: {
		async signIn({ commit }, credentials) {
			let response = await axios.post('/user/login', credentials)

			if (response.data.status) {
				commit('SET_USER_DATA', response.data.success.user)
			}

			return response.data
		}
	},
	mutations: {
		SET_USER_DATA(state, data) {
			state.user = data
		}
	},
	getters: {
		getUser(state) {
			return state.user
		},
		authorized(state) {
			return state.user.id && state.user.login
		}
	}
}

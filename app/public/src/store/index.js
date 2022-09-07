import { createStore } from 'vuex'
import posts from './modules/posts'
import auth from './modules/auth'

export default createStore({
	modules: {
		posts,
		auth
	}
})

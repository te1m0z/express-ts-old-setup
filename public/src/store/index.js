import { createStore } from "vuex";
import categories from './modules/categories.js'
import posts from './modules/posts.js'

export default createStore({
    modules: {
        categories,
        posts
    }
});

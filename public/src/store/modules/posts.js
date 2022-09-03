export default {
    actions: {
        async fetchPosts({ commit }) {

            const request = await fetch('http://localhost:5000/api/posts').catch(err => console.log(err));

            const response = await request.json();

            
            if (response.status) {
                console.log( response.success.posts)
            }
            commit("setPosts", response.success.posts);
        },
    },
    mutations: {
        setPosts(state, posts) {
            console.log('mutations ', posts);
            state.posts = posts;
        },
    },
    state() {
        return {
            posts: [],
        };
    },
    getters: {
        getPosts(state) {
            return state.posts;
        },
    },
};

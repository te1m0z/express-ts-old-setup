export default {
    actions: {
        fetchPosts({ commit }) {

            const posts = [
                { title: "Заголовок 1", content: `Hello kak dela`, date: "18.19.20", slug: "title-1" },
                { title: "Заголовок 2", content: "Hello\nkak dela", date: "18.19.20", slug: "title-2" },
                { title: "Заголовок 3", content: "Hello\nkak dela", date: "18.19.20", slug: "title-3" },
                { title: "Заголовок 4", content: "Hello\nkak dela", date: "18.19.20", slug: "title-4" },
                { title: "Заголовок 4", content: "Hello\nkak dela", date: "18.19.20", slug: "title-5" },
            ];

            commit("setPosts", posts);
        },
    },
    mutations: {
        setPosts(state, posts) {
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

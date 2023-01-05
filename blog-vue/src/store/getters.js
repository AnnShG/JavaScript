const getters = {
    getTitle(state) {
        return state.formAddPost.title;
    },
    getPost(state) {
        return state.formAddPost.post;
    },
    recentPosts(state) {
        return state.recentPosts;
    },
    allPosts(state) {
        return state.allPosts;
    }
}

export default getters;
const mutations = {
    updateNewPostTitle (state, value) {
        state.formAddPost.title = value;
    },
    updateNewPost (state, value) {
        state.formAddPost.post = value;
    },
    setRecentPosts(state, recentPosts) {
        state.recentPosts = recentPosts;
    },
    setAllPosts(state, allPosts) {
        state.allPosts = allPosts;
    }

}

export default mutations;
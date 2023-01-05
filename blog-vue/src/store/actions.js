import axios from 'axios';

const actions = {
    async getRecentPosts({ commit }) {
        const response = await axios.get('http://localhost:3000/posts/recent');
        console.log(response);

        commit('setRecentPosts', response.data);
    },

    async getAllPosts({ commit }) {
        const response = await axios.get('');
        console.log(response);

        commit('setAllPosts', response.data);
    }
};

export default actions;
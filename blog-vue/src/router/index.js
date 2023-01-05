// есть в дефолт
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AllPosts from '../views/AllPosts'
import AddPost from '../components/AddPost.vue'

//import UserPosts from '../components/UserPosts.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/AllPosts',
    name: 'AllPosts',
    component: AllPosts,
  },
  {
    path: '/AddPost',
    name: 'AddPost',
    component: AddPost,
  },
 ] 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;

import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Student from '../views/Students.vue'
import Courses from '../views/Courses.vue'
import Course from '../views/Course.vue'



// app.get('/about', AboutController.main) ~ definition of route

//routes for our router
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/About',
    name: 'ab',
    component: About,
    },
    {
      path: '/Students/:id?',
      name: 'students',
      component: Student,
    },
    {
      path: '/courses',
      component: Courses,
      children: [
        {
          path: ':id',
          component: Course
        }
      ]
    }
]
// :id - parameter

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

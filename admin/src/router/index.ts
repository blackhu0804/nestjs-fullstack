import Vue from 'vue'
import VueRouter, { RouterOptions } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import CourseList from '../views/courses/CourseList.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        name: 'home',
        path: '/',
        component: Home
      },
      {
        name: 'courses-list',
        path: '/courses/list',
        component: CourseList
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

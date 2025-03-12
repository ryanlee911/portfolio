import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "projects" */ '../components/Projects.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../components/Blog.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../components/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 
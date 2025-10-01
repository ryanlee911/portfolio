import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'  // components 폴더에서 Home.vue를 가져옴
import Aboutme from '@/components/Aboutme.vue'
import Projects from '../components/Projects.vue'  // 추가
import Contact from '../components/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },

  {
    path: '/aboutme',
    name: 'aboutme',
    component: Aboutme
  },

  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
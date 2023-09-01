import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostDetails  from '../views/PostDetails.vue'
import PostByCategory  from '../views/PostByCategory.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post-details/:id',
      component: PostDetails
    },
    {
      path: '/category/:id',
      component: PostByCategory
    },
  ]
})

export default router

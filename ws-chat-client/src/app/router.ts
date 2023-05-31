import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainPage from "@/pages/main-page/main-page.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

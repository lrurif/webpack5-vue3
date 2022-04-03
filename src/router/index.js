import { createRouter, createWebHashHistory } from "vue-router";
let routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import("@/views/about")
  },
  {
    path: '/my',
    name: 'my',
    component: () => import("@/views/my")
  }
]
export default createRouter({
  history: createWebHashHistory(),
  routes
})
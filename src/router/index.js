import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Home',
      icon: 'home'
    },
    component: () => import('../views/home/HomeView')
  },
  {
    path: '/lista-gastos',
    name: 'lista-gastos',
    meta: {
      title: 'Lista Gastos',
      icon: 'list-ul'
    },
    component: () => import('../views/lista-gastos/lista-gastos')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login'
    },
    component: () => import('../views/login/Login')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Expenses`
  if (!window.uid && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router

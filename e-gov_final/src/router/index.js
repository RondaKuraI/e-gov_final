import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/AdminPage/Dashboard.vue'
import Reports from '../views/AdminPage/Reports.vue'
import Records from '../views/AdminPage/Records.vue'
import Users from '../views/AdminPage/Users.vue'
import Documents from '../views/AdminPage/Documents.vue'
import Settings from '../views/AdminPage/Settings.vue'
import Barangay from '../views/AdminPage/Barangay.vue'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard/reports',
    name: 'reports',
    component: Reports
  },
  {
    path: '/dashboard/records',
    name: 'records',
    component: Records
  },
  {
    path: '/dashboard/users',
    name: 'users',
    component: Users
  },
  {
    path: '/dashboard/documents',
    name: 'documents',
    component: Documents
  },
  {
    path: '/dashboard/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/dashboard/barangay',
    name: 'barangay',
    component: Barangay
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

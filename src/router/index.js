import Vue from 'vue'
import Router from 'vue-router'
import Edit from '@/components/Edit'
import Add from '@/components/Add'
import List from '@/components/List'
import Login from '@/components/Login'
import Logout from '@/components/Logout'

Vue.use(Router)

let routes = [
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '*',
    redirect: '/list'
  }
]

export default new Router({
  routes // short for routes: routes
})

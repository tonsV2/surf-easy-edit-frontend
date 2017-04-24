import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import Edit from '@/components/Edit'
import Add from '@/components/Add'
import List from '@/components/List'
import Login from '@/components/Login'

Vue.use(Router)

let routes = [
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
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
    path: '*',
    redirect: '/list'
  }
]

export default new Router({
  routes // short for routes: routes
})

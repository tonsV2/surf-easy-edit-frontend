import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Add from '@/components/Add'
import List from '@/components/List'
import ColorPicker from '@/components/ColorPicker'
import Login from '@/components/Login'
import Logout from '@/components/Logout'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
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
    path: '/color',
    name: 'ColorPicker',
    component: ColorPicker
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
  }
]

export default new Router({
  routes // short for routes: routes
})

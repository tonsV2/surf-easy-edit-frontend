<template>
  <div id="app">
    <router-link to="/">
      <img src="./assets/logo.png">
    </router-link>
    <div>
      <router-link to="/add">Add</router-link> -
      <router-link to="/list">List</router-link> -
      <router-link to="/login" v-if="!authenticated">Login</router-link>
      <router-link to="/logout" v-if="authenticated">Logout</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import auth from './auth'

export default {
  data () {
    return {
      authenticated: auth.isAuthenticated()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

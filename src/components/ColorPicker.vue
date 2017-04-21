<template>
  <div class="color">
    <span class="demonstration">Color picker</span>
    <el-color-picker v-model="color"></el-color-picker>
    <span>Choosen color: {{color}}</span>
    <router-link to="/login" v-if="!authenticated">Login</router-link>
    <router-link to="/logout" v-if="authenticated">Logout</router-link>
  </div>
</template>

<script>
  import ColorPicker from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'
  import auth from '../auth'

  export default {
    components: {
      ColorPicker
    },

    data () {
      return {
        color: '#20a0ff',
        authenticated: auth.isAuthenticated()
      }
    },

    mounted () {
      auth.authRequired('/color')
    }
  }
</script>

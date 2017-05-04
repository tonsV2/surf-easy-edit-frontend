<template>
  <div class="users">
    <h1>Users</h1>
    <md-list>
      <md-list-item v-for="user in users" :key="user.username">
        <span>{{user.username}}</span>
        <md-list-expand>
          <md-list>
            <md-list-item class="md-inset" v-for="url in user.urls" :key="url">
              <a :href="url">{{url}}</a>
            </md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import config from '../config'
import userService from '../services/UserService'

Vue.use(VueMaterial)

export default {
  methods: {
    getAll () {
      userService.getAll().then(users => {
        for (let user of users) {
          let apiUrl = config.getUrl('api')
          let urls = [
            apiUrl + '/posts/latest?username=' + user.username,
            apiUrl + '/posts/latest/content?username=' + user.username,
            apiUrl + '/posts/latest/title?username=' + user.username,

            apiUrl + '/feed?username=' + user.username,
            apiUrl + '/feed/latest?username=' + user.username,

            location.origin + '/#/edit?id=' + user.editId
          ]
          this.users.push({username: user.username, urls})
        }
      })
    }
  },

  mounted () {
    this.getAll()
  },

  data () {
    return {
      users: []
    }
  }
}
</script>

<style scoped lang="styl">
.users
  margin auto
  width 80%
</style>

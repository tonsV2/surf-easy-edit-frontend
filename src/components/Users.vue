<template>
  <div class="users">
    <h1>Users</h1>
    <md-list>
      <md-list-item v-for="user in users">
        <span>{{user.username}}</span>
        <md-list-expand>
          <md-list>
            <md-list-item class="md-inset" v-for="url in user.urls">
              <a :href="url">{{url}}</a>
            </md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import userService from '../services/UserService'

export default {
  methods: {
    getAll () {
      userService.getAll().then(users => {
        let apiUrl = 'http://localhost:8080'
        for (let user of users) {
          let urls = [
            apiUrl + '/api/posts/latest?username=' + user.username,
            apiUrl + '/api/posts/latest/content?username=' + user.username,
            apiUrl + '/api/posts/latest/title?username=' + user.username,

            apiUrl + '/api/feed?username=' + user.username,
            apiUrl + '/api/feed/latest?username=' + user.username,

            '/#/edit?id=' + user.editId
          ]
          this.users.push({username: user.username, urls})
        }
      })
    }
  },

  components: {
    VueMaterial
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

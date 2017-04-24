<template>
  <div class="users">
    <h1>Users</h1>
    <table border="1">
      <tr v-for="user in users">
        <td>{{user.username}}</td>
        <td>
          <ul>
            <li v-for="url in user.urls">
              <a :href="url">{{url}}</a>
            </li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
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

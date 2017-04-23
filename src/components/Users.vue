<template>
  <div class="list">
    <h1>List</h1>
    <ul>
      <li v-for="user in users">
        {{user.username}} - {{user.editId}}
      </li>
    </ul>
  </div>
</template>

<script>
  import userService from '../services/UserService'

  export default {
    methods: {
      getAll () {
        userService.getAll().then(users => {
          this.users = users
        })
      }
    },

    mounted () {
      this.getAll()
    },

    data () {
      return {
        users: null
      }
    }
  }
</script>

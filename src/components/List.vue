<template>
  <div class="list">
    <h1>List</h1>
    <ul>
      <li v-for="post in posts">
        {{post.title}} - {{post.content}} - <button @click="deletePost(post)">Delete</button>
      </li>
    </ul>
    <router-link to="/login" v-if="!authenticated">Login</router-link>
    <router-link to="/logout" v-if="authenticated">Logout</router-link>

    <el-dialog title="Delete post?" v-model="showConfirmDialog" size="tiny">
      <span>{{post}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showConfirmDialog = false">Cancel</el-button>
        <el-button type="primary" @click="deleteConfirmed()">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import Vue from 'vue'
  import auth from '../auth'
  import postService from '../services/PostService'
  import Dialog from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'
  Vue.use(Dialog)

  export default {
    methods: {
      getAll () {
        postService.getAll().then(posts => {
          this.posts = posts
        })
      },

      deletePost (post) {
        this.post = post
        this.showConfirmDialog = true
      },

      deleteConfirmed () {
        this.showConfirmDialog = false
        postService.delete(this.post).then(response => {
          this.getAll()
        })
      }
    },

    mounted () {
      auth.authRequired('/list')
      this.getAll()
    },

    data () {
      return {
        posts: null,
        post: null,
        authenticated: auth.isAuthenticated(),
        showConfirmDialog: false
      }
    }
  }
</script>

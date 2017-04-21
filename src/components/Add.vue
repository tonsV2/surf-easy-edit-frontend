<template>
  <div class="editor">
    <h1>New post</h1>
    <input v-model="title" placeholder="Title" class="title"/>
    <quill v-model="content" :options="editorOptions">Content...</quill>
    <button @click="submit()">Submit</button>
  </div>
</template>

<script>
  import auth from '../auth'
  import postService from '../services/PostService'
  import Quill from 'vue-bulma-quill'

  export default {
    methods: {
      submit () {
        postService.save(this.title, this.content).then(response => {
          // TODO: Show that post was saved
          console.log(response)
        })
      }
    },

    components: {
      Quill
    },

    mounted () {
      auth.authRequired('/add')
    },

    data () {
      return {
        title: null,
        content: null,
        editorOptions: {
          theme: 'snow',
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
              ['blockquote', 'code-block'],

              [{'header': 1}, {'header': 2}],               // custom button values
              [{'list': 'ordered'}, {'list': 'bullet'}],
              [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
              [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
              [{'direction': 'rtl'}],                         // text direction

              [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
              [{'header': [1, 2, 3, 4, 5, 6, false]}],

              [{'color': []}, {'background': []}],          // dropdown with defaults from theme
              [{'font': []}],
              [{'align': []}],

              ['clean']                                         // remove formatting button
            ]
          }
        }
      }
    }
  }
</script>

<style lang="styl">
  @import "~quill/assets/snow"

  .title
    float left

  .editor
    margin auto
    width 80%

</style>

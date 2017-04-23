<template>
  <div class="editor">
    <h1>Digital signage content</h1>
    <textarea v-model="content" class="content"></textarea>
    <button @click="submit()" class="submit">Submit</button>
  </div>
</template>

<script>
import editService from '../services/EditService'

export default {
  methods: {
    submit () {
      editService.saveEdit(this.$route.query.id, this.content).then(content => {
        // TODO: Show that post was saved
//        console.log(content)
        this.content = content
      })
    }
  },

  components: {
  },

  mounted () {
    editService.loadEdit(this.$route.query.id).then(content => {
      console.log(content)
      this.content = content
    })
  },

  data () {
    return {
      content: null
    }
  }
}
</script>

<style lang="styl">

  .content
    width 600px
    height 200px
  .title, .submit
    float left
    margin 10px 0px 10px 0px

  .editor
    margin auto
    width 80%

</style>

<template>
  <div class="editor">
    <h1>Digital signage content</h1>
    <md-input-container>
      <md-textarea v-model="content"></md-textarea>
      <md-button @click.native="submit()" class="md-raised md-primary">Submit</md-button>
    </md-input-container>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import Toasted from 'vue-toasted'

import editService from '../services/EditService'

Vue.use(VueMaterial)
Vue.use(Toasted)

export default {
  methods: {
    submit () {
      editService.saveEdit(this.$route.query.id, this.content).then(content => {
        this.content = content
        this.$toasted.show('Updated!', {
          theme: 'outline',
          position: 'top-right',
          duration: 2000
        })
      })
    }
  },

  mounted () {
    editService.loadEdit(this.$route.query.id).then(content => {
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

<style scoped lang="styl">
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

<template>
  <div class="col-sm-4 col-sm-offset-4">
  </div>
</template>

<script>
  import auth from '../auth'
  import Router from '../router'

  export default {
    mounted () {
      auth.logout()
      Router.go(-1)
    }
  }
</script>

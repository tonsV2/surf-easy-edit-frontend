import axios from 'axios'

export default {
  getBackendUrl () {
    return location.hostname === 'easyedit.surfstation.dk' ? 'http://easyedit.surfstation.dk/api/users' : 'http://localhost:8080/api/users'
  },

  getAll () {
    return new Promise((resolve, reject) => {
      let url = this.getBackendUrl()
      axios.get(url).then(response => {
        resolve(response.data)
      }, response => {
        this.handleError(response)
      })
    })
  },

  handleError (response) {
    console.log('Handle Error')
    console.log(response)
  }
}

import axios from 'axios'
import auth from '../auth'
import Router from '../router'

export default {
  getBackendUrl () {
    return location.hostname === 'easyedit.surfstation.dk' ? '/api/posts' : 'http://localhost:8080/api/posts'
  },

  getAll () {
    return new Promise((resolve, reject) => {
      let url = this.getBackendUrl()
      axios.get(url, {headers: auth.getAuthHeader()}).then(response => {
        resolve(response.data)
      }, response => {
//        console.log(reject)
//         if (reject) {
//           reject(response)
//         } else {
        this.handleError(response)
        // }
      })
    })
  },

  delete (post) {
    return new Promise((resolve, reject) => {
      let url = this.getBackendUrl() + '/' + post.id
      axios.delete(url, {headers: auth.getAuthHeader()}).then(response => {
        resolve(response.status === 200)
      }, response => {
        this.handleError(response)
      })
    })
  },

  save (title, content) {
    return new Promise((resolve, reject) => {
      let url = this.getBackendUrl()
      let data = {
        title, content
      }
      let config = {
        headers: auth.getAuthHeader()
      }
      axios.post(url, data, config).then(response => {
        resolve(response.status === 201)
      }, response => {
        this.handleError(response)
      })
    })
  },

  handleError (response) {
    console.log('Handle Error')
    console.log(response)
    if (response.status === 401 || response.status === 403) {
      Router.push('/login')
    }
  }
}

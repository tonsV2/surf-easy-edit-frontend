import axios from 'axios'
import config from '../config'

export default {
  getBackendUrl () {
    return config.getUrl('api') + '/users'
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

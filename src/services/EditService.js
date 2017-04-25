import axios from 'axios'
import config from '../config'

export default {
  getBackendUrl () {
    return config.getUrl('api') + '/edit/'
  },

  loadEdit (editId) {
    return new Promise((resolve, reject) => {
      let url = this.getBackendUrl() + editId
      axios.get(url).then(response => {
        resolve(response.data)
      }, response => {
        this.handleError(response)
      })
    })
  },

  saveEdit (editId, content) {
    return new Promise((resolve, reject) => {
      let url = this.getBackendUrl() + editId
      let req = {
        url,
        method: 'PUT',
        data: content
      }
      axios(req).then(response => {
        resolve(response.data.content)
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

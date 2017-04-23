import axios from 'axios'

export default {
  getBackendUrl () {
    return location.hostname === 'easyedit.surfstation.dk' ? 'http://easyedit.surfstation.dk/api/edit' : 'http://localhost:8080/api/edit/'
  },

  loadEdit (editId) {
    return new Promise((resolve, reject) => {
      let url = this.getBackendUrl() + editId
      axios.get(url).then(response => {
        resolve(response.data)
      }, response => {
//        this.handleError(response)
      })
    })
  },

  saveEdit (editId, content) {
    console.log(editId)
    console.log(content)
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

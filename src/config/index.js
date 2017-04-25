
export default {
  urls: {
    api: location.hostname === 'easyedit.surfstation.dk' ? 'http://easyedit.surfstation.dk/api' : 'http://localhost:8080/api'
  },
  getUrl (ref) {
    return this.urls[ref]
  }
}

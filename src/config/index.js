
export default {
  urls: {
    base: location.origin,
    api: location.hostname.endsWith('localhost') ? 'http://localhost:8080/api' : location.origin + '/api'
  },
  getUrl (ref) {
    return this.urls[ref]
  }
}


export default {
  urls: {
    base: location.origin,
    // api: location.hostname.endsWith('localhost') ? 'http://localhost:8080/api' : location.origin + ':' + location.port + '/api'
    api: location.origin + ':8080/api'
  },
  getUrl (ref) {
    return this.urls[ref]
  }
}

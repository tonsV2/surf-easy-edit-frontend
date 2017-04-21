import Router from '../router'

const LOGIN_URL = location.hostname === 'easyedit.surfstation.dk' ? '/oauth/token' : 'http://localhost:8080/oauth/token'

export default {
  storageKey: 'access_token',

  user: {
    authenticated: false
  },

  login (context, credentials, redirect) {
    const params = {
      'client_id': 'html5',
      'client_secret': 'password',
      'grant_type': 'password',
      'username': credentials.username,
      'password': credentials.password
    }

    const headers = {
      Authorization: 'Basic ' + btoa(params.client_id + ':' + params.client_secret),
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    const body = Object.keys(params).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&')

    const req = {
      url: LOGIN_URL,
      method: 'POST',
      headers: headers,
      body: body
    }

    context.$http(req).then((response) => {
      localStorage.setItem(this.storageKey, response.body.access_token)
      this.user.authenticated = true
      if (redirect) {
        Router.go(redirect)
      }
    })
  },

  logout () {
    localStorage.removeItem(this.storageKey)
    this.user.authenticated = false
  },

  isAuthenticated () {
    return this.user.authenticated === true
  },

  authRequired () {
    if (!this.isAuthenticated()) {
      Router.push('/login')
    }
  },

  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem(this.storageKey)
    }
  }
}

import axios from 'axios'
import Router from '../router'

const LOGIN_URL = location.hostname === 'easyedit.surfstation.dk' ? 'http://easyedit.surfstation.dk/oauth/token' : 'http://localhost:8080/oauth/token'

export default {
  storageKey: 'access_token',

  user: {
    authenticated: false
  },

  login (username, password, redirect) {
    const auth = {
      client_id: 'html5',
      client_secret: 'password'
    }

    const params = {
      'grant_type': 'password',
      'username': username,
      'password': password
    }

    const headers = {
      Authorization: 'Basic ' + btoa(auth.client_id + ':' + auth.client_secret),
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    const data = Object.keys(params).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&')

    const req = {
      url: LOGIN_URL,
      method: 'POST',
      headers: headers,
      data: data
    }

    axios(req).then((response) => {
      console.log(response)
      localStorage.setItem(this.storageKey, response.data.access_token)
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

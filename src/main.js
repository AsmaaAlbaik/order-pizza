import Vue from 'vue'
import router  from './router/routes.js'
import { store } from './store/stores.js'
import accounting from 'accounting-js'
import App from './App.vue'
import * as firebase from 'firebase'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.filter('currency', function (value) {
  return accounting.formatMoney(value)
})

new Vue({
  el: '#app',
  router,
  store,
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyCzx_28aE1Mi3Gp6aekTrxXKhGbpQAQr4M",
      authDomain: "pizza-planet-dafe9.firebaseapp.com",
      databaseURL: "https://pizza-planet-dafe9.firebaseio.com",
      projectId: "pizza-planet-dafe9",
      storageBucket: "pizza-planet-dafe9.appspot.com",
      messagingSenderId: "1094318375706",
      appId: "1:1094318375706:web:3f8b215ea4f477d11f62a3"
    })
    // check if the user state token id change 
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoSignin', user)
        // this.$store.dispatch('fetchUserData')
      }
    })
  },
  render: h => h(App)
})

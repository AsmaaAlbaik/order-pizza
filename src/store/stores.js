import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import users from './modules/user'
import orders from './modules/orders'
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    menu,
    users,
    orders,
  },
  state: {
    loading: false,
    error: null,
  },
  mutations: {
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
    setLoading (state, payload) {
      state.loading = payload;
    }
  },
  getters: {
    error(state) {
      return state.error;
    },
    loading (state) {
      return state.loading;
    }
  },
});

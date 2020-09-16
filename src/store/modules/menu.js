import * as firebase from 'firebase'

const state = {
  menuItems: [],
}

const mutations = {
  getMenuItems: (state, item) => { state.menuItems = item },
  setMenuItem: (state, item) => {
    state.menuItems.push(item)
  },
  removeMenuItem: (state, key) => {
    state.menuItems = state.menuItems.filter(item => item.id !== key)
  }
}
const actions = {
  fetchMenuItem: ({ commit }, payload) => {
    // commit("setLoading", true);
    commit("clearError");
    firebase
      .database().ref('menu')
      .once('value')
      .then((menu) => {
        const menuItems = [];
        const obj = menu.val();
        for (let key in obj) {
          menuItems.push({
            id: key,
            description: obj[key].description,
            name: obj[key].name,
            options: obj[key].options,
          });
        }
        commit("getMenuItems", menuItems);
      })
      .catch((err) => {
        // commit("setLoading", false);
        commit("setError", err);
        console.log(err);
      });
  },
  AddMenuItem: ({ commit }, payload) => {
    commit("setLoading", true);
    commit("clearError");
    return firebase
      .database().ref('menu')
      .push(payload)
      .then((menu) => {
        const key = menu.key
        commit("setMenuItem", {
          ...payload,
          id: key
        });
        commit("setLoading", false);
        return 'success';
      })
      .catch((err) => {
        commit("setLoading", false);
        commit("setError", err);
        console.log(err);
        return err;
      });
  },
  removeMenuItem: ({ commit}, key) => {
    // commit("setLoading", true);
    commit("clearError");
    firebase
      .database().ref('menu')
      .child(key).remove()
      .then((menu) => {
        // const key = menu.key
        commit("removeMenuItem", key);
      })
      .catch((err) => {
        // commit("setLoading", false);
        commit("setError", err);
        console.log(err);
      });
  }
}
const getters = {
  getMenuItems: state => state.menuItems
}
export default {
  state,
  getters,
  mutations,
  actions,
}

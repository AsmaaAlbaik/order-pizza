import * as firebase from 'firebase'


const state = {
  orders: [],
}

const mutations = {
  getOrderItem:  (state, orders) => {
    state.orders = orders;
  },
  setOrderItem:  (state, orders) => {
    state.orders.push(orders);
  },
  removeOrderItem: (state, key) => {
    state.orders = state.orders.filter(item => item.id !== key)
  }
}
const actions = {
  fetchOrderItem: ({ commit }, payload) => {
    // commit("setLoading", true);
    commit("clearError");
    firebase
      .database().ref('orders')
      .once('value')
      .then((order) => {
        const orderItems = [];
        const obj = order.val();
        for (let key in obj) {
          orderItems.push({
            id: key,
            createdAt: obj[key].creareAt,
            pizzas: obj[key].pizzas,
          });
        }
        commit("getOrderItem", orderItems);
      })
      .catch((err) => {
        // commit("setLoading", false);
        commit("setError", err);
        console.log(err);
      });
  },
  AddOrderItem: ({ commit }, payload) => {
    commit("setLoading", true);
    commit("clearError");
    return firebase
      .database().ref('orders')
      .push(payload)
      .then((orders) => {
        const key = orders.key
        commit("setOrderItem", {
          ...payload,
          id: key
        });
        commit("setLoading", false);
        return "success"
      })
      .catch((err) => {
        commit("setLoading", false);
        commit("setError", err);
        console.log(err);
        return err
      });
  },
  removeOrderItem: ({ commit}, key) => {
    // commit("setLoading", true);
    commit("clearError");
    firebase
      .database().ref('orders')
      .child(key).remove()
      .then((order) => {
        // const key = menu.key
        commit("removeOrderItem", key);
      })
      .catch((err) => {
        // commit("setLoading", false);
        commit("setError", err);
        console.log(err);
      });
  }
}

const getters = {
  getOrders: state => state.orders,
  numberOfOrders: state => state.orders.length
}

export default {
  state,
  getters,
  mutations,
  actions,
}

import * as firebase from 'firebase'

const state = {
  user: null
}
const mutations = {
  setNewUser: (state,payload) => {
    state.user = payload
    console.log(state.user)
  }
}
const actions = {
  signUserOut: ({ commit }, payload) => {
    commit("clearError");
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.pass).then(user => {
      console.log(user)
      const newUser = {
        id: user.user.uid,
        email: user.user.email,
        fbKeys: {}
      };
      console.log(newUser);
      commit("setNewUser", newUser);
    }).catch(error => {
      commit("setError", error);
      console.log(error)
    })
  },
  signUserIn({ commit }, payload) {
    // commit("setLoading", true);
    commit("clearError");
    return firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        const newUser = {
          id: user.user.uid,
          email: user.user.email,
          fbKeys: {}
        };
        // commit("setLoading", false);
        // console.log(newUser);
        return user
        commit("setNewUser", newUser);
      })
      .catch((err) => {
        // commit("setLoading", false);
        commit("setError", err);
        return err
        console.log(err);
      });
  },
  autoSignin({ commit }, payload) {
    commit("setNewUser", { 
      id: payload.uid,
    });
  },
  // fetchUserData ({commit, getters}) {
  //   commit('setLoading', true)
  //   firebase.database().ref('/users/' + getters.user.id).once('value')
  //     .then(data => {
  //       const dataPairs = data.val()
  //       // let registeredMeetups = []
  //       // let swappedPairs = {}
  //       // for (let key in dataPairs) {
  //       //   registeredMeetups.push(dataPairs[key])
  //       //   swappedPairs[dataPairs[key]] = key
  //       // }
  //       const updatedUser = {
  //         id: getters.user.id,
  //       }
  //       commit('setLoading', false)
  //       commit('setUser', updatedUser)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //       commit('setLoading', false)
  //     })
  // },
  logout({ commit }) {
    // to remove the token from local storage
    firebase.auth().signOut();
    commit("setNewUser", null);
  },
}

const getters = {
  user: state => state.user
}
export default {
  state,
  getters,
  mutations,
  actions,
}

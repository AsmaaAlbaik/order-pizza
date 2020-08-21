import store from '../store/modules/user.js'

export default (to, from, next) => {
    if (store.getters.user) {
        next()
    } else {
        next('/signIn')
    }
}
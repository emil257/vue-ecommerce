import axios from '@/axios'
import router from '@/router'

export default {
  state: {
    user: null,
    loggedIn: false
  },
  mutations: {
    SET_USER_STATE(state, user) {
      state.user = user
      if (user !== null)
        state.loggedIn = true
      else {
        state.loggedIn = false
      }
    }
  },
  actions: {
    loginUser({ commit }, user) {
      axios.post("users/login", user).then(res => {
        router.push({ path: '/' })
        localStorage.setItem('token', res.data.token)
        commit('SET_USER_STATE', res.data.user)
      }).catch(err => {
        console.log("Wrong credentials")
      })
    },
    logoutUser({ commit }) {
      router.push({ path: '/profile/login' })
      localStorage.removeItem('token')
      commit('SET_USER_STATE', null)
    },
    registerUser({ dispatch }, user) {
      axios.post("users/register", user).then(res => {
        dispatch('loginUser', user)
      }).catch(err => {
        console.log("Email allready exists")
      })
    },
    updateShipping({ dispatch }, shipping) {
      axios.put("users/shipping", { shipping: shipping }, { headers: { 'Authorization': 'bearer ' + localStorage.getItem('token') } }).then(res => {
        dispatch('loadUser')
      }).catch(err => {
        console.log("Something went wrong :(")
      })
    },
    loadUser({ commit }) {
      axios.get("/users/user", { headers: { 'Authorization': 'bearer ' + localStorage.getItem('token') } }).then(res => {
        commit('SET_USER_STATE', res.data)
      }).catch(err => {
        router.push("/profile/login")
          .catch(error => {
            if (error.name != "NavigationDuplicated") {
              throw error
            }
          })
        localStorage.removeItem('token')
        commit('SET_USER_STATE', null)
      })
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    loggedIn(state) {
      if (localStorage.getItem('token') !== null)
        state.loggedIn = true
      return state.loggedIn
    }
  }
}
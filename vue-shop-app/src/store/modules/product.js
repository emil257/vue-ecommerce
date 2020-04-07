import axios from '@/axios'
import router from '@/router'

export default {
  state: {
    cart: [],
    products: null,
    product: null,
    orders: null
  },
  mutations: {
    INCREASE_PRODUCT(state, product) {
      state.cart.forEach(item => {
        if (item._id === product._id) {
          item.quantity += 1
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    DECREASE_PRODUCT(state, product) {
      state.cart.forEach(item => {
        if (item.id === product.id && item.quantity > 1) {
          item.quantity -= 1
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    REMOVE_PRODUCT(state, product) {
      state.cart.forEach((item, i) => {
        if (item._id === product._id) {
          state.cart.splice(i, 1)
        }
        i++
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    ADD_PRODUCT(state, product) {
      let exists = false
      state.cart.forEach(item => {
        if (item._id === product._id) {
          item.quantity += 1
          exists = true
        }
      })
      if (!exists) {
        state.cart.push({
          _id: product._id,
          product: {
            name: product.name,
            price: product.price,
            image: product.image
          },
          quantity: 1
        })
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    GET_PRODUCT_BY_ID(state, id) {
      state.product = state.products.filter(p => p._id == id)[0]
    },
    EMPTY_CART(state) {
      state.orders = null
      state.cart = []
      localStorage.removeItem('cart')
    },
    SET_ORDERS_STATE(state, orders) {
      state.orders = orders
    },
    SET_PRODUCT_STATE(state, products) {
      state.products = products
    },
    SET_CART_STATE(state, cart) {
      state.cart = cart
    }
  },
  actions: {
    increaseItem({ commit }, product) {
      commit('INCREASE_PRODUCT', product)
    },
    decreaseItem({ commit }, product) {
      commit('DECREASE_PRODUCT', product)
    },
    removeItem({ commit }, product) {
      commit('REMOVE_PRODUCT', product)
    },
    addItem({ commit }, product) {
      commit('ADD_PRODUCT', product)
    },
    getItemById({ commit }, id) {
      commit('GET_PRODUCT_BY_ID', id)
    },
    placeOrder({ commit, getters }) {
      axios.post("/orders/add", {
        userId: getters.user._id,
        order: JSON.parse(localStorage.getItem('cart')),
        orderTotal: getters.shoppingCartTotal
      }, { headers: { 'Authorization': 'bearer ' + localStorage.getItem('token') } }).then(res => {
        router.push("/profile")
        commit('EMPTY_CART')
      })
    },
    loadOrders({ commit, getters }) {
      axios.get("/orders/" + getters.user._id, { headers: { 'Authorization': 'bearer ' + localStorage.getItem('token') } }).then(res => {
        commit('SET_ORDERS_STATE', res.data.orders)
      }).catch(err => {
        commit('SET_ORDERS_STATE', null)
      })
    },
    loadProducts({ commit }) {
      axios.get("/products").then(res => {
        commit('SET_PRODUCT_STATE', res.data)
      }).catch(err => {
        commit('SET_PRODUCT_STATE', [])
      })
    },
    loadCart({ commit }) {
      if (JSON.parse(localStorage.getItem('cart')) !== null)
        commit('SET_CART_STATE', JSON.parse(localStorage.getItem('cart')))
      else
        commit('SET_CART_STATE', [])
    }
  },
  getters: {
    shoppingCartTotal(state) {
      let total = 0
      if (state.cart.length) {
        state.cart.forEach(item => {
          total += item.product.price * item.quantity
        })
      }
      return total
    },
    shoppingCartItemCount(state) {
      let items = 0
      if (state.cart.length) {
        state.cart.forEach(item => {
          items += item.quantity
        })
      }
      return items
    },
    cart(state) {
      return state.cart
    },
    products(state) {
      return state.products
    },
    product(state) {
      return state.product
    },
    orders(state) {
      return state.orders
    }
  }
}
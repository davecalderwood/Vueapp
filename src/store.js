import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    orders: [],
    isLoggedIn: false,
  },
    getters: {
    },
  mutations: {
      ADD_ITEM: (state, items) => {
          items.CheckoutTime = new Date();
          state.cart.push(items)
          console.log(state.cart)
      },
      REMOVE_ALL: async (state) => {
       await state.orders.push(state.cart)
       state.orders = state.orders.flat()
       console.log(state.cart[0])
           state.cart=[]
      }
  },
  actions: {
      addItem:(context, items) => {
          context.commit("ADD_ITEM", items)
      },
      removeAll({commit}) {
          return new Promise ((resolve,reject) => {
              setTimeout(()=>{commit('REMOVE_ALL')
                resolve()
            },0)
          }) 
      }
}
})
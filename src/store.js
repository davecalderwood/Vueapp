import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    isLoggedIn: false
  },
    getters: {
    },
  mutations: {
      ADD_ITEM: (state, items) => {
          state.cart.push(items)
          console.log(state.cart)
      },
      REMOVE_ALL: (state) => {
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
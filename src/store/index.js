import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload
    }
  },
  actions: {
    getTodos({ commit }) {
      return axios.get('http://localhost:3000/todos')
      .then((res) => {
        commit('storeTodos', res.data)
      })
    }
  },
  getters: {
  },
  modules: {
  }
})

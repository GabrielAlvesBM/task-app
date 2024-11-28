import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload
    },

    storeTodo(state, payload) {
      state.todos.unshift(payload)
    }
  },
  actions: {
    getTodos({ commit }) {
      return axios.get('http://localhost:3000/todos')
      .then((res) => {
        commit('storeTodos', res.data)
      })
    },

    addTodo(context, data) {
      axios.post('http://localhost:3000/todos', data)
        .then((res) => {
          context.commit('storeTodo', res.data)
        })
    }
  },
  getters: {
  },
  modules: {
  }
})

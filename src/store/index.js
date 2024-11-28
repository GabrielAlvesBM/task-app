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
      const index = state.todos.findIndex(todo => todo.id === payload.id)
      if (index >= 0) {
        state.todos.splice(index, 1, payload)
      } else {
        state.todos.push(payload)
      }
      
    },

    deleteTodo(state, id) {
      const index = state.todos.findIndex(todo => todo.id === id)

      if (index >= 0) {
        state.todos.splice(index, 1)
      }
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
      return axios.post('http://localhost:3000/todos', data)
        .then((res) => {
          context.commit('storeTodo', res.data)
        })
    },

    updateTodo(context, { id, data }) {
      return axios.put(`http://localhost:3000/todos/${String(id)}`, data)
        .then((res) => {
          context.commit('storeTodo', res.data)
        })
    },

    deleteTodo(context, id) {
      return axios.delete(`http://localhost:3000/todos/${String(id)}`)
        .then(() => {
          context.commit('deleteTodo', id)
        })
    }
  },
  getters: {
  },
  modules: {
  }
})

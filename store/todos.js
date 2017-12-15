'use strict'

export const state = () => ({
  list: [
    {
      text: 'first example item',
      completed: true
    },
    {
      text: 'second example item',
      completed: false
    }
  ]
})

export const types = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO'
}

export const getters = {
  completedToDos: state => state.list.filter(todo => todo.completed).length
}

export const mutations = {
  [types.ADD_TODO] (state, { text }) {
    state.list.push({
      text: text,
      completed: true
    })
  },

  [types.REMOVE_TODO] (state, { index }) {
    state.list.splice(index, 1)
  }
}

export const actions = {
  addToDo ({ commit }, { text }) {
    commit({
      type: types.ADD_TODO,
      text: text
    })
  },

  removeToDo ({ commit }, { index }) {
    commit({
      type: types.REMOVE_TODO,
      index: index
    })
  }
}

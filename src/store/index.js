import Vue from "vue";
import Vuex from "vuex";

// Requirement: Load data from file
import initialState from "../assets/data.json";
import { createUniqueId, generateCurrentTimestamp } from "../utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { ...initialState },
  getters: {},
  mutations: {
    UPDATE_TODO(state, updatedTodo) {
      const todos = [...state.todos];
      const index = todos.findIndex((todo) => todo.id === updatedTodo.id);
      todos[index] = {
        ...todos[index],
        ...updatedTodo,
        lastUpdated: generateCurrentTimestamp(),
      };
      state.todos = todos;
    },
    ADD_TODO(state) {
      const todos = [...state.todos, { id: createUniqueId() }];
      state.todos = todos;
    },
  },
  actions: {
    addTodo({ commit }, updatedTodo) {
      commit("UPDATE_TODO", updatedTodo);
    },
    updateTodo({ commit }, updatedTodo) {
      commit("UPDATE_TODO", updatedTodo);
    },
  },
  modules: {},
});

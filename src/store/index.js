import dayjs from "dayjs";
import Vue from "vue";
import Vuex from "vuex";

// Requirement: Load data from file
import initialState from "../assets/data.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { ...initialState },
  getters: {},
  mutations: {
    UPDATE_TODO(state, updatedTodo) {
      const todos = [...state.todos];
      const index = todos.findIndex((todo) => todo.id === updatedTodo.id);
      todos[index] = {
        ...updatedTodo,
        lastUpdated: dayjs().format("DD MMM YYYY HH:mm:ss"),
      };
      state.todos = todos;
    },
  },
  actions: {
    updateTodo({ commit }, updatedTodo) {
      commit("UPDATE_TODO", updatedTodo);
    },
  },
  modules: {},
});

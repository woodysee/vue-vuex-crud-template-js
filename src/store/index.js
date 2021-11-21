import Vue from "vue";
import Vuex from "vuex";

// Requirement: Load data from file
import initialState from "../assets/data.json";
import { createUniqueId, generateCurrentTimestamp } from "../utils";

Vue.use(Vuex);

const initialTodos = initialState.todos.map((todo) => {
  return {
    ...todo,
    id: createUniqueId(),
    created: generateCurrentTimestamp(),
  };
});

export default new Vuex.Store({
  state: {
    ...initialState,
    todos: initialTodos,
  },
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
    ADD_TODO(state, previousTodo) {
      const todos = [...state.todos];
      const index = todos.findIndex((todo) => todo.id === previousTodo.id);
      const headEnd = [...todos].slice(0, index + 1);
      const tailEnd = [...todos].slice(index + 1);
      const newTodo = {
        id: createUniqueId(),
        title: "",
        done: false,
        created: generateCurrentTimestamp(),
        lastUpdated: "--",
      };
      state.todos = [...headEnd, newTodo, ...tailEnd];
    },
    DELETE_TODO(state, todoToBeDeleted) {
      const todos = [...state.todos];
      const index = todos.findIndex((todo) => todo.id === todoToBeDeleted.id);
      todos.splice(index, 1);
      state.todos = todos;
    },
  },
  actions: {
    addTodo({ commit }, previousTodo) {
      commit("ADD_TODO", previousTodo);
    },
    deleteTodo({ commit }, todoToBeDeleted) {
      commit("DELETE_TODO", todoToBeDeleted);
    },
    updateTodo({ commit }, updatedTodo) {
      commit("UPDATE_TODO", updatedTodo);
    },
  },
  modules: {},
});

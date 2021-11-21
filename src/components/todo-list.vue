<template>
  <v-card class="todo-list" min-width="400px">
    <v-card class="no-todos-notice" v-if="todosLength === 0">
      <v-icon>mdi-file-cabinet</v-icon>
      <span>No todos</span>
    </v-card>
    <v-list v-else three-line>
      <template v-for="(todo, index) in todos">
        <todo-item
          :key="`todo--${index}`"
          :data="todo"
          :index="index"
          :total="todosLength"
        />
        <v-divider
          v-if="index !== todosLength - 1"
          :key="`divider--${index}`"
        ></v-divider>
      </template>
    </v-list>
    <v-card class="btn-panel" elevation="2">
      <v-btn color="success" small dark @click="addTodo">
        <v-icon>mdi-plus-box-multiple-outline</v-icon>
        Add
      </v-btn>
    </v-card>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import TodoItem from "./todo-item.vue";

export default {
  name: "todo-list",
  components: {
    "todo-item": TodoItem,
  },
  methods: {
    addTodo() {
      this.$store.dispatch("addTodo", this.todos[this.todosLength - 1]);
    },
  },
  computed: {
    ...mapState({
      todos: (state) => {
        return state.todos;
      },
      todosLength: (state) => {
        return state.todos.length;
      },
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo-list {
  margin: 10px;
}
.no-todos-notice {
  padding: 20px;
  span {
    font-weight: 600;
    margin-left: 10px;
  }
}
.btn-panel {
  padding: 20px;
}
</style>

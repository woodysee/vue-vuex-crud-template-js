<template>
  <v-card class="todo-list">
    <span v-if="todos.length === 0">No todos</span>
    <v-list three-line>
      <template v-for="(todo, index) in todos">
        <v-list-item :key="`todo--${index}`">
          <v-list-item-content>
            <v-checkbox
              v-bind:value="todos.done"
              @change="() => onChangeTodoDone(todo)"
              color="blue"
              hide-details
            ></v-checkbox>
            <v-text-field
              v-bind:value="todo.title"
              @keyup="(event) => onChangeTodoText(event, todo)"
            ></v-text-field>
            <v-list-item-subtitle>
              {{ todo.lastUpdated }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider
          v-if="index !== todos.length - 1"
          :key="`divider--${index}`"
        ></v-divider>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "todo-list",
  methods: {
    onChangeTodoDone(todo) {
      this.$store.dispatch("updateTodo", {
        ...todo,
        done: !todo.done,
      });
    },
    onChangeTodoText(event, todo) {
      this.$store.dispatch("updateTodo", {
        ...todo,
        title: event.target.value,
      });
    },
  },
  computed: {
    ...mapState({
      todos: (state) => {
        return state.todos;
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
</style>

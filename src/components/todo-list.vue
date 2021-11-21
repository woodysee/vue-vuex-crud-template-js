<template>
  <v-card class="todo-list">
    <span v-if="todos.length === 0">No todos</span>
    <v-list v-else three-line>
      <template v-for="(todo, index) in todos">
        <todo-item :key="`todo--${index}`" :data="todo" />
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
import TodoItem from "./todo-item.vue";

export default {
  name: "todo-list",
  components: {
    "todo-item": TodoItem,
  },
  methods: {
    addTodo() {
      this.$store.dispatch("addTodo");
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

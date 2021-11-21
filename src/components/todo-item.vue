<template>
  <v-list-item>
    <v-checkbox
      class="todo-checkbox"
      :input-value="data.done"
      @change="onChangeTodoDone"
      color="blue"
      hide-details
    ></v-checkbox>
    <v-list-item-content>
      <v-text-field
        :value="data.title"
        @keyup="onChangeTodoText"
      ></v-text-field>
      <v-list-item-subtitle>
        {{ data.lastUpdated }}
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    data: { id: String, title: String, done: Boolean, lastUpdated: String },
    index: Number,
  },
  methods: {
    addTodo() {
      this.$store.dispatch("addTodo");
    },
    onChangeTodoDone() {
      this.$store.dispatch("updateTodo", {
        id: this.$props.data.id,
        done: !this.$props.data.done,
      });
    },
    onChangeTodoText(event) {
      this.$store.dispatch("updateTodo", {
        id: this.$props.data.id,
        title: event.target.value,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo-checkbox {
  margin: 0 20px 0 5px;
}
</style>

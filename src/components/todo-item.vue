<template>
  <v-list-item class="todo__item">
    <v-checkbox
      class="todo__checkbox"
      :input-value="data.done"
      @change="onChangeTodoDone"
      color="blue"
      hide-details
    ></v-checkbox>
    <v-list-item-content>
      <v-text-field
        class="todo__title"
        ref="textField"
        :value="data.title"
        @keydown="onChangeTodoText"
        @keydown.enter="addTodo"
        slot="false"
      ></v-text-field>
      <v-list-item-subtitle> Created: {{ data.created }} </v-list-item-subtitle>
      <v-list-item-subtitle>
        Last updated: {{ data.lastUpdated }}
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-btn color="error" fab small dark @click="deleteTodo">
      <v-icon>mdi-trash-can</v-icon>
    </v-btn>
  </v-list-item>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    data: {
      id: String,
      title: String,
      done: Boolean,
      created: String,
      lastUpdated: String,
    },
    index: Number,
    total: Number,
  },
  mounted() {
    if (
      this.$props.data.title === "" &&
      this.$props.index === this.$props.total - 1
    ) {
      this.focusInput();
    }
  },
  methods: {
    addTodo(event) {
      if (
        event.target.value !== "" &&
        this.$props.index === this.$props.total - 1
      ) {
        this.$store.dispatch("addTodo", {
          id: this.$props.data.id,
        });
      }
    },
    focusInput() {
      this.$refs.textField.focus();
    },
    onChangeTodoDone() {
      this.$store.dispatch("updateTodo", {
        id: this.$props.data.id,
        done: !this.$props.data.done,
      });
    },
    deleteTodo() {
      this.$store.dispatch("deleteTodo", {
        id: this.$props.data.id,
      });
    },
    onChangeTodoText(event) {
      const keyCode = event.keyCode;
      if (keyCode === 8 && event.target.value === "") {
        this.deleteTodo();
      }
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
.todo__checkbox {
  margin: 0 20px 0 5px;
}
.todo__title {
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 3px;
}
</style>

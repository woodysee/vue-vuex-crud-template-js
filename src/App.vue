<template>
  <v-app class="todo-list">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-icon class="mr-3" color="white">mdi-format-list-checks</v-icon>
        <h1 class="mr-2">Todo List</h1>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

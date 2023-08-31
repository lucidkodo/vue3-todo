<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TheForm from './components/TheForm.vue';
import TheSnackbar from './components/TheSnackbar.vue';
import { TodoItem } from './types';
import { getDefaultTodos } from './helper';

onMounted(() => {
  console.log('app mounted');
});

const showSnackbar = ref<boolean>(false);
const snackbarMsg = ref<string>('');
const todos = ref<TodoItem[]>(getDefaultTodos());

function openSnackbar(msg?: string) {
  if (showSnackbar.value === true) {
    return;
  }

  showSnackbar.value = true;
  snackbarMsg.value = msg || '';
}

function closeSnackbar() {
  showSnackbar.value = false;
}

function handleSubmit(newTodo: TodoItem) {
  todos.value.unshift(newTodo);
  openSnackbar(`"${newTodo.title}" added`);
}
</script>

<template>
  <v-container class="text-center">
    <div class="text-h4">Vue3 Todo app</div>
    <TheForm @submit="handleSubmit" />
    <div v-if="todos.length" elevation="2" class="pa-2 text-left">
      <div v-for="(todo, index) in todos" :key="index">
        <v-card
          class="mx-auto mt-5 py-3 px-2"
          max-width="344"
          variant="outlined"
        >
          <v-card-title>{{ todo.title }}</v-card-title>
          <v-card-text v-if="todo.desc.length" class="text-caption grey-text">
            {{ todo.desc }}
          </v-card-text>
          <v-card-text v-else class="grey-text">
            <i>No description.</i>
          </v-card-text>
          <v-card-actions class="justify-space-between">
            <v-btn
              color="green"
              variant="tonal"
              icon="mdi-check"
              size="small"
            />
            <v-btn
              color="red"
              variant="tonal"
              icon="mdi-delete-outline"
              size="small"
            />
          </v-card-actions>
        </v-card>
      </div>
    </div>
    <p v-else>No todo.</p>
  </v-container>
  <TheSnackbar
    :displaySnack="showSnackbar"
    :message="snackbarMsg"
    @close="closeSnackbar"
  />
</template>

<style lang="scss">
.grey-text {
  color: grey;
}
</style>

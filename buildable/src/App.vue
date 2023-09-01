<script lang="ts">
import { getDefaultTodos } from './helper';

const defaultData = getDefaultTodos();
const activeTodos = defaultData.filter((t) => !t.isCompleted);
const completedTodos = defaultData.filter((t) => t.isCompleted);
</script>

<script setup lang="ts">
import { ref } from 'vue';
import TheForm from './components/TheForm.vue';
import TheSnackbar from './components/TheSnackbar.vue';
import TodoColumn from './components/TodoColumn.vue';
import { TodoItem } from './types';

const showSnackbar = ref<boolean>(true);
const snackbarMsg = ref<string>('');
const todos = ref<TodoItem[]>(activeTodos);

function openSnackbar(msg?: string) {
  if (showSnackbar.value === true) {
    return;
  }

  showSnackbar.value = true;
  snackbarMsg.value = msg || '';
}

function closeSnackbar() {
  showSnackbar.value = false;
  snackbarMsg.value = '';
}

function handleSubmit(newTodo: TodoItem) {
  todos.value.unshift(newTodo);
  openSnackbar(`"${newTodo.title}" added`);
}
</script>

<template>
  <v-container class="text-center">
    <div class="text-h4 font-weight-bold">Vue3 Todo app</div>
    <TheForm @submit="handleSubmit" />

    <div :class="$style.content">
      <TodoColumn columnTitle="Active" :todos="todos" />
      <TodoColumn columnTitle="Completed" :todos="completedTodos" />
    </div>
  </v-container>

  <TheSnackbar
    :displaySnack="showSnackbar"
    :message="snackbarMsg"
    @close="closeSnackbar"
  />
</template>

<style lang="scss" module>
.content {
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  margin: 60px auto 0;
}
</style>

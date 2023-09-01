<script lang="ts">
import { getDefaultTodos } from './helper';

const data = getDefaultTodos();
const _activeTodos = data.filter((t) => !t.isCompleted);
const _inactiveTodos = data.filter((t) => t.isCompleted);
</script>

<script setup lang="ts">
import { ref } from 'vue';
import TheForm from './components/TheForm.vue';
import TheSnackbar from './components/TheSnackbar.vue';
import TodoColumn from './components/TodoColumn.vue';
import TheFooter from './components/TheFooter.vue';
import { TodoItem } from './types';

const showSnackbar = ref<boolean>(false);
const snackbarMsg = ref<string>('');
const activeTodos = ref<TodoItem[]>(_activeTodos);
const inactiveTodos = ref<TodoItem[]>(_inactiveTodos);

function openSnackbar(msg?: string) {
  showSnackbar.value = true;
  snackbarMsg.value = msg || '';
}

function closeSnackbar() {
  showSnackbar.value = false;
  snackbarMsg.value = '';
}

function handleSubmit(newTodo: TodoItem) {
  activeTodos.value.unshift(newTodo);
  openSnackbar(`"${newTodo.title}" added`);
}

function markAsDone(id: string) {
  const index = activeTodos.value.findIndex((t) => t.id === id);
  const target = { ...activeTodos.value[index] };

  target.isCompleted = true;
  inactiveTodos.value.unshift(target);
  activeTodos.value.splice(index, 1);
}

function restoreTodo(id: string) {
  const index = inactiveTodos.value.findIndex((t) => t.id === id);
  const target = { ...inactiveTodos.value[index] };

  target.isCompleted = false;
  activeTodos.value.unshift(target);
  inactiveTodos.value.splice(index, 1);
}

function removeFromList(column: string, id: string) {
  const targetArray = column === 'active' ? activeTodos : inactiveTodos;
  const index = targetArray.value.findIndex((t) => t.id === id);

  targetArray.value.splice(index, 1);
}

function clearList(column: string) {
  const targetArray = column === 'active' ? activeTodos : inactiveTodos;
  if (targetArray.value.length === 0) {
    return;
  }

  targetArray.value.length = 0;
}
</script>

<template>
  <v-container class="text-center">
    <div class="text-h4 font-weight-bold">Vue3 Todo app</div>
    <TheForm @submit="handleSubmit" />

    <div :class="$style.content">
      <TodoColumn
        columnTitle="Active"
        :todos="activeTodos"
        @done="markAsDone"
        @delete="removeFromList('active', $event)"
        @clear="clearList('active')"
      />
      <TodoColumn
        columnTitle="Completed"
        :todos="inactiveTodos"
        @restore="restoreTodo"
        @delete="removeFromList('inactive', $event)"
        @clear="clearList('inactive')"
      />
    </div>
  </v-container>
  <TheFooter />
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

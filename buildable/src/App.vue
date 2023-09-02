<script lang="ts">
import { getDefaultTodos } from './helper';

const data = getDefaultTodos();
const _activeTodos = data.filter((t) => !t.isCompleted);
const _inactiveTodos = data.filter((t) => t.isCompleted);
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { TodoItem } from './types';
import TheForm from './components/TheForm.vue';
import TheSnackbar from './components/TheSnackbar.vue';
import TodoTab from './components/TodoTab.vue';
import TheFooter from './components/TheFooter.vue';

const showSnackbar = ref<boolean>(false);
const snackbarMsg = ref<string>('');
const activeTodos = ref<TodoItem[]>(_activeTodos);
const inactiveTodos = ref<TodoItem[]>(_inactiveTodos);
const tab = ref<number>(0);

function openSnackbar(msg: string) {
  showSnackbar.value = true;
  snackbarMsg.value = msg;
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

  openSnackbar(`"${targetArray.value[index].title}" removed`);
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

    <v-card :class="$style.slide">
      <v-tabs v-model="tab">
        <v-tab
          v-for="(data, index) in [activeTodos, inactiveTodos]"
          :key="index"
          :value="index"
        >
          {{ index === 0 ? 'Active' : 'Completed' }}
          ({{ data.length }})
        </v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item>
            <TodoTab
              columnTitle="Active"
              :todos="activeTodos"
              @done="markAsDone"
              @delete="removeFromList('active', $event)"
              @clear="clearList('active')"
            />
          </v-window-item>
          <v-window-item>
            <TodoTab
              columnTitle="Completed"
              :todos="inactiveTodos"
              @restore="restoreTodo"
              @delete="removeFromList('inactive', $event)"
              @clear="clearList('inactive')"
            />
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-container>
  <TheFooter />
  <TheSnackbar
    :displaySnack="showSnackbar"
    :message="snackbarMsg"
    @close="closeSnackbar"
  />
</template>

<style lang="scss" module>
.slide {
  max-width: 600px;
  margin: 60px auto 0;
}
</style>

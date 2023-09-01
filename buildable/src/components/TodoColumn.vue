<script setup lang="ts">
import { TodoItem } from '../types';
import TodoCard from './TodoCard.vue';

defineProps({
  columnTitle: { type: String, required: true },
  todos: { type: Array<TodoItem>, required: true },
});
</script>

<template>
  <div>
    <div class="text-h5">{{ columnTitle }}</div>
    <div v-if="todos.length" elevation="2" class="pa-2 text-left">
      <TodoCard v-for="(todo, index) in todos" :key="index" :todo="todo" />
    </div>
  </div>
</template>

<style lang="scss"></style>

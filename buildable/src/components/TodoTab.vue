<script setup lang="ts">
import { ref, computed } from 'vue';
import { TodoItem } from '../types';
import TodoCard from './TodoCard.vue';

const props = defineProps({
  columnTitle: { type: String, required: true },
  todos: { type: Array<TodoItem>, required: true },
});

const emit = defineEmits(['done', 'restore', 'delete', 'clear']);
const currentPage = ref<number>(1);
const itemsPerPage = 5;

const paginatedItems = computed(() => {
  if (props.todos.length % itemsPerPage === 0 && currentPage.value > 1) {
    currentPage.value = currentPage.value - 1;
  }

  const chunkStart = (currentPage.value - 1) * itemsPerPage;
  const chunkEnd = chunkStart + itemsPerPage;

  return props.todos.slice(chunkStart, chunkEnd);
});

const pagesAvailable = computed(() => {
  return Math.ceil(props.todos.length / itemsPerPage);
});

function propagateDoneEvent(id: string) {
  emit('done', id);
}

function propagateRestoreEvent(id: string) {
  emit('restore', id);
}

function propagateDeleteEvent(id: string) {
  emit('delete', id);
}

function clearTodoList() {
  emit('clear');
}
</script>

<template>
  <div class="text-right mb-3">
    <v-btn size="small" variant="tonal" @click="clearTodoList">Clear</v-btn>
  </div>
  <div>
    <div v-if="paginatedItems.length" class="text-left">
      <TodoCard
        v-for="(todo, index) in paginatedItems"
        :key="index"
        :todo="todo"
        @done="propagateDoneEvent"
        @restore="propagateRestoreEvent"
        @delete="propagateDeleteEvent"
      />
      <v-pagination
        v-model="currentPage"
        class="text-center max-width my-4"
        size="small"
        total-visible="3"
        :length="pagesAvailable"
      />
    </div>
    <v-card
      v-else
      :class="['text-body-2 ma-2 no-desc']"
      text="All cleared 🎉"
    />
  </div>
</template>

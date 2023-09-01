<script setup lang="ts">
import {
  TodoItem,
  // ColumnEvent
} from '../types';
import TodoCard from './TodoCard.vue';

defineProps({
  columnTitle: { type: String, required: true },
  todos: { type: Array<TodoItem>, required: true },
});

/**
 * Registering event using defineEmits is showing warning upon emission,
 * not sure why.
 */
// const emit = defineEmits<ColumnEvent>();
const emit = defineEmits(['done', 'restore', 'delete', 'clear']);

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
  <div :class="$style.cardColumn">
    <div :class="['d-flex justify-space-between px-7', $style.titleGroup]">
      <div class="text-h5">{{ columnTitle }}</div>
      <v-btn size="small" variant="tonal" @click="clearTodoList">Clear</v-btn>
    </div>
    <div v-if="todos.length" class="pa-2 text-left">
      <TodoCard
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        @done="propagateDoneEvent"
        @restore="propagateRestoreEvent"
        @delete="propagateDeleteEvent"
      />
    </div>
    <v-card
      v-else
      :class="['text-body-2 ma-2  no-desc', $style.clearedText]"
      text="All cleared 🎉"
    />
  </div>
</template>

<style lang="scss" module>
.cardColumn {
  margin-bottom: 40px;
}

.titleGroup {
  width: 100%;
}

.clearedText {
  width: 300px;
  margin-top: 30px;
}
</style>

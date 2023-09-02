<script setup lang="ts">
import { PropType } from 'vue';
import { TodoItem, TodoEvent } from '../types';

defineProps({
  todo: { type: Object as PropType<TodoItem>, required: true },
});

const emit = defineEmits<TodoEvent>();
</script>

<template>
  <v-card class="mx-auto py-3 px-2 mb-3" variant="elevated">
    <v-card-title :class="todo.isCompleted && 'cross-off'">
      {{ todo.title }}
    </v-card-title>
    <v-card-text
      :class="[
        'text-caption',
        { 'no-desc': !todo.desc },
        { 'cross-off': todo.isCompleted },
      ]"
    >
      {{ todo.desc || 'No description' }}
    </v-card-text>
    <v-card-actions>
      <v-btn
        v-if="!todo.isCompleted"
        color="green"
        variant="tonal"
        icon="mdi-check"
        size="small"
        @click="emit('done', todo.id)"
      />
      <v-btn
        v-else
        color="green"
        variant="tonal"
        icon="mdi-restore"
        size="small"
        @click="emit('restore', todo.id)"
      />
      <v-btn
        class="ml-5"
        color="red"
        variant="tonal"
        icon="mdi-delete-outline"
        size="small"
        @click="emit('delete', todo.id)"
      />
    </v-card-actions>
  </v-card>
</template>

<style lang="scss">
.cross-off {
  text-decoration: line-through;
}

.text-caption {
  color: gray;
}

.no-desc {
  font-style: italic;
}
</style>

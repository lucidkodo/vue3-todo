<script setup lang="ts">
import { PropType } from 'vue';
import { TodoItem } from '../types';

defineProps({
  todo: { type: Object as PropType<TodoItem>, required: true },
});
</script>

<template>
  <v-card class="mx-auto mt-5 py-3 px-2" width="300" variant="outlined">
    <v-card-title>{{ todo.title }}</v-card-title>
    <v-card-text :class="['text-caption', todo.desc ? '' : 'no-desc']">
      {{ todo.desc || 'No description' }}
    </v-card-text>
    <v-card-actions class="justify-space-between">
      <v-btn color="green" variant="tonal" icon="mdi-check" size="small" />
      <v-btn
        color="red"
        variant="tonal"
        icon="mdi-delete-outline"
        size="small"
      />
    </v-card-actions>
  </v-card>
</template>

<style lang="scss">
.text-caption {
  color: gray;
}

.no-desc {
  font-style: italic;
}
</style>

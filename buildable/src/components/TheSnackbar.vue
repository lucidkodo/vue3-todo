<!--
  The Snackbar is a popup to display some quick info to provide feedback to users.
 -->
<script setup lang="ts">
import { toRefs } from 'vue';

interface SnackbarProps {
  displaySnack: boolean;
  message?: string;
}

interface SnackbarEmission {
  (event: 'close'): void;
}

/**
 * Define snackbar properties and event emission
 */
const props = defineProps<SnackbarProps>();
const { displaySnack, message } = toRefs(props);
const emit = defineEmits<SnackbarEmission>();
</script>

<template>
  <div class="text-center">
    <!--
      not using v-model because "displaySnack" is a prop.
     -->
    <v-snackbar
      v-bind:model-value="displaySnack"
      v-on:update:model-value="emit('close')"
      timeout="2000"
    >
      {{ message }}
      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="emit('close')">OK</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

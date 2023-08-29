<script setup lang="ts">
import { ref } from 'vue';
import TheSnackbar from './components/TheSnackbar.vue';

const showSnackbar = ref<boolean>(false);

function openSnackbar() {
  if (showSnackbar.value === true) {
    return;
  }

  showSnackbar.value = true;
}

function closeSnackbar() {
  showSnackbar.value = false;
}
</script>

<template>
  <v-card class="mx-auto pa-5 mt-5 w-75">
    <v-btn color="orange-darken-2" @click="openSnackbar">Open Snackbar</v-btn>
  </v-card>
  <TheSnackbar :displaySnack="showSnackbar" @close="closeSnackbar" />
</template>

<style lang="scss" module></style>

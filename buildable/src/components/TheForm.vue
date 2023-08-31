<script lang="ts">
// the familiar vue2 structure
import { uniqueId } from '../helper';
import { TodoItem } from '../types';

export default {
  data: () => ({
    title: '',
    desc: '',
    isDescVisible: false,
    errorMsg: '',
  }),
  emits: ['submit'],
  computed: {
    newTodoItem(): TodoItem {
      return {
        id: uniqueId(),
        title: this.title,
        desc: this.isDescVisible ? this.desc : '',
        isCompleted: false,
      };
    },
  },

  methods: {
    clearTitle() {
      this.title = '';
    },

    clearDesc() {
      this.desc = '';
    },

    validateTitle() {
      if (this.title.length === 0) {
        this.errorMsg = 'Title cannot be empty.';
        return;
      }

      this.errorMsg = '';
    },

    toggleDescField() {
      this.isDescVisible = !this.isDescVisible;
    },

    submit() {
      this.validateTitle();

      if (this.errorMsg) {
        return;
      }

      this.$emit('submit', this.newTodoItem);
      this.clearTitle();
      this.clearDesc();
    },
  },
};
</script>

<template>
  <v-form @submit.prevent="submit" :class="$style.form">
    <v-text-field
      v-model.trim="title"
      append-inner-icon="mdi-sticker-plus"
      variant="underlined"
      clear-icon="mdi-close"
      clearable
      label="New Todo item"
      type="text"
      :error="errorMsg.length > 0"
      :error-messages="errorMsg"
      @keyup.esc="clearTitle"
      @click:append-inner="toggleDescField"
      @click:clear="clearTitle"
    />
    <v-textarea
      v-if="isDescVisible"
      v-model.trim="desc"
      label="Description"
      type="textarea"
      rows="3"
      clearable
      clear-icon="mdi-close"
      @click:clear="clearDesc"
    />
    <v-btn @click.submit="submit" color="green">
      <v-icon icon="mdi-plus-thick" class="mr-1" />
      Add item
    </v-btn>
  </v-form>
</template>

<style lang="scss" module>
.form {
  max-width: 500px;
  margin: 20px auto;
}
</style>

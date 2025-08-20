<script setup>
import { computed } from 'vue';

const props = defineProps({
  icon: String,
  color: String,
  textColor: String,
  title: String,
  description: String,
});

const buttonColor = computed(() => {
  return props.color || 'primary';
});

const buttonTextColor = computed(() => {
  return props.textColor || 'white';
});

const buttonTitle = computed(() => {
  return props.title || 'Button';
});

const buttonDescription = computed(() => {
  return props.description || 'Button description';
});
</script>

<template>
  <v-btn :color="buttonColor" :text-color="buttonTextColor">
    <v-icon>{{ icon }}</v-icon>
    <v-card-title>{{ buttonTitle }}</v-card-title>
    <v-card-text>{{ buttonDescription }}</v-card-text>
  </v-btn>
</template>

<style scoped></style>

<script setup>
defineProps({
  title: String,
  value: String,
  subtitle: String,
  subtitleColor: String,
  icon: String,
  iconColor: String,
});
</script>

<template>
  <v-card
    class="pa-4 d-flex flex-column justify-space-between rounded-lg h-100"
    elevation="1"
    color="white"
  >
    <div class="d-flex justify-space-between align-start">
      <div class="text-body-2 font-weight-medium">{{ title }}</div>
      <v-icon :color="iconColor" size="20">{{ icon }}</v-icon>
    </div>

    <div class="mt-2 text-h5 font-weight-bold">{{ value }}</div>

    <div class="text-caption mt-1" :class="subtitleColor">
      {{ subtitle }}
    </div>
  </v-card>
</template>

<style scoped>
.text-success { color: #4caf50; }
.text-error { color: #f44336; }
.text-primary { color: #1976d2; }
.text-medium-emphasis { color: rgba(0,0,0,0.6); }
</style>

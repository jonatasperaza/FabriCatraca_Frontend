<template>
  <v-card elevation="2" class="rounded-lg">
    <v-card-title class="text-h6 font-weight-medium">
      Status das Catracas
    </v-card-title>

    <v-card-text>
      <div class="d-flex flex-column ga-3">
        <v-card
          v-for="turnstile in turnstiles"
          :key="turnstile.id"
          variant="outlined"
          class="pa-3 rounded-lg"
          :style="{ borderColor: '#E4E4E7' }"
        >
          <div class="d-flex align-center justify-space-between">
            <!-- Info Section -->
            <div class="d-flex align-center ga-3">
              <!-- Status Icon -->
              <v-avatar
                :color="getStatusColor(turnstile.status)"
                size="32"
              >
                <v-icon
                  :icon="getStatusIcon(turnstile.status)"
                  color="white"
                  size="16"
                />
              </v-avatar>

              <!-- Details -->
              <div>
                <div class="text-body-2 font-weight-medium">
                  {{ turnstile.name }}
                </div>
                <div class="text-caption text-medium-emphasis">
                  {{ turnstile.location }}
                </div>
              </div>
            </div>

            <!-- Status Badge -->
            <v-chip
              :color="getStatusColor(turnstile.status)"
              size="small"
              variant="flat"
              class="text-caption font-weight-medium"
            >
              {{ getStatusText(turnstile.status) }}
            </v-chip>
          </div>

          <!-- Additional Info -->
          <div class="mt-3 pt-3" style="border-top: 1px solid rgba(var(--v-border-color), 0.12);">
            <div class="d-flex justify-space-between text-caption text-medium-emphasis">
              <div class="d-flex align-center ga-1">
                <v-icon size="12">mdi-clock-outline</v-icon>
                Último acesso: {{ turnstile.lastAccess }}
              </div>
              <div class="d-flex align-center ga-1">
                <v-icon size="12">mdi-counter</v-icon>
                {{ turnstile.todayCount }} hoje
              </div>
            </div>
          </div>
        </v-card>

        <!-- Summary Card -->
        <v-card
          variant="tonal"
          color="primary"
          class="pa-3 mt-2"
        >
          <div class="d-flex align-center justify-space-between">
            <div>
              <div class="text-body-2 font-weight-medium">
                Resumo do Sistema
              </div>
              <div class="text-caption opacity-80">
                {{ getOnlineCount() }} de {{ turnstiles.length }} catracas online
              </div>
            </div>
            <v-progress-circular
              :model-value="getSystemHealthPercentage()"
              :color="getSystemHealthPercentage() > 80 ? 'success' : 'warning'"
              size="40"
              width="4"
            >
              <span class="text-caption font-weight-bold">
                {{ Math.round(getSystemHealthPercentage()) }}%
              </span>
            </v-progress-circular>
          </div>
        </v-card>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const turnstiles = ref([
  {
    id: "1",
    name: "Catraca 01",
    location: "Entrada Principal",
    status: "online",
    lastAccess: "08:47",
    todayCount: 284
  },
  {
    id: "2",
    name: "Catraca 02",
    location: "Entrada Principal",
    status: "online",
    lastAccess: "08:46",
    todayCount: 267
  }
]);

// Helper functions
const getStatusColor = (status) => {
  switch (status) {
    case 'online':
      return 'success';
    case 'offline':
      return 'error';
    case 'maintenance':
      return 'warning';
    default:
      return 'grey';
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case 'online':
      return 'mdi-check';
    case 'offline':
      return 'mdi-close';
    case 'maintenance':
      return 'mdi-wrench';
    default:
      return 'mdi-help';
  }
};

const getStatusText = (status) => {
  switch (status) {
    case 'online':
      return 'Online';
    case 'offline':
      return 'Offline';
    case 'maintenance':
      return 'Manutenção';
    default:
      return 'Desconhecido';
  }
};

const getOnlineCount = () => {
  return turnstiles.value.filter(t => t.status === 'online').length;
};

const getSystemHealthPercentage = () => {
  const onlineCount = getOnlineCount();
  return (onlineCount / turnstiles.value.length) * 100;
};
</script>

<style scoped>
.opacity-80 {
  opacity: 0.8;
}
</style>

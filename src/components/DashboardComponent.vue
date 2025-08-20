<script setup>
import { onMounted, ref, computed, onUnmounted } from 'vue';
import { useUser, useDevice } from '@/stores';
// Importe seus componentes

const UserStore = useUser();
const DeviceStore = useDevice();

// Estados reativos
const stats = ref({
  totalStudents: 1247,
  activeStudents: 1198,
  totalAccesses: 2847,
  blockedAttempts: 12,
  onlineTurnstiles: 8,
  totalTurnstiles: 10
});

const currentTime = ref(new Date());
let timer = null;

// Computed properties
const formattedDate = computed(() => {
  return currentTime.value.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

const formattedTime = computed(() => {
  return currentTime.value.toLocaleTimeString('pt-BR');
});

const systemHealth = computed(() => {
  return (stats.value.onlineTurnstiles / stats.value.totalTurnstiles) * 100;
});

// Lifecycle hooks
onMounted(async () => {
  // Carrega dados das stores
  await UserStore.getUsers();
  await DeviceStore.getDevices();

  // Atualiza o tempo a cada segundo
  timer = setInterval(() => {
    currentTime.value = new Date();
  }, 1000);
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});

const cards = [
  {
    title: 'Alunos Ativos',
    value: 9999,
    subtitle: `9999 cadastrados`,
    icon: 'mdi-account-group',
    iconColor: 'primary',
    subtitleColor: 'text-medium-emphasis',
  },
  {
    title: 'Acessos Hoje',
    value: 99999,
    subtitle: '+15% comparado a ontem',
    icon: 'mdi-check-circle',
    iconColor: 'success',
    subtitleColor: 'text-success',
  },
  {
    title: 'Bloqueios',
    value: 99999,
    subtitle: 'Tentativas negadas',
    icon: 'mdi-close-circle',
    iconColor: 'error',
    subtitleColor: 'text-error',
  },
  {
    title: 'Catracas',
    value:99999,
    subtitle: 'Online/Total',
    icon: 'mdi-shield',
    iconColor: 'primary',
    subtitleColor: 'text-medium-emphasis',
  },
];
</script>
<template>
  <v-container fluid :style="{ backgroundColor: '#F6F6F7' }">
    <!-- Header -->
    <v-row class="mb-6">
      <v-col>
        <h1 class="text-h4 font-weight-bold mb-2">
          Sistema de Controle de Acesso Escolar
        </h1>
        <p class="text-body-2 text-medium-emphasis">
          {{ formattedDate }} - {{ formattedTime }}
        </p>
      </v-col>

      <v-col class="d-flex justify-end align-center">
        <!-- Status Badge -->
        <v-chip
          :color="systemHealth > 80 ? 'success' : 'error'"
          variant="flat"
          prepend-icon="mdi-pulse"
          class="mr-4"
        >
          <span class="font-weight-medium">
            Sistema {{ systemHealth > 80 ? 'Operacional' : 'Instável' }}
          </span>
        </v-chip>

        <!-- Settings Button -->
        <v-btn
          prepend-icon="mdi-cog"
          variant="outlined"
          class="font-weight-medium"
          rounded="pill"
        >
          Configurações
        </v-btn>
      </v-col>
    </v-row>

    <!-- Cards de Estatísticas -->
    <v-row class="mb-6">
    <v-col
      v-for="(card, index) in cards"
      :key="index"
      cols="12"
      sm="6"
      md="3"
    >
      <CardGlobal
        :title="card.title"
        :value="card.value"
        :subtitle="card.subtitle"
        :icon="card.icon"
        :iconColor="card.iconColor"
        :subtitleColor="card.subtitleColor"
      />
    </v-col>
  </v-row>


    <!-- Main Content Grid -->
    <v-row class="mb-6">
      <!-- Access Chart -->
      <v-col cols="12" lg="8">
        <AccessChart />
      </v-col>

      <!-- Turnstile Status -->
      <v-col cols="12" lg="4">
        <TurnstileStatus />
      </v-col>
    </v-row>

    <!-- Bottom Grid -->
    <v-row>
      <!-- Recent Access -->
      <v-col cols="12" lg="6">
        <RecentAccess />
      </v-col>

      <!-- Quick Actions -->
      <v-col cols="12" lg="6">
        <QuickActions />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-card {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.v-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}

.h-100 {
  height: 100%;
}

</style>

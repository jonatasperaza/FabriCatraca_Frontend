<template>
  <v-card elevation="2" class="rounded-lg">
    <v-card-title class="text-h6 font-weight-medium pb-2">
      Acessos Recentes
    </v-card-title>

    <v-card-text>
      <div class="d-flex flex-column ga-4">
        <v-card
          v-for="record in recentAccess"
          :key="record.id"
          variant="outlined"
          class="pa-3 transition-hover"
          hover
          rounded="lg"
          :style="{ borderColor: '#E4E4E7' }"
        >
          <div class="d-flex align-center ga-4">
            <!-- Avatar -->
            <v-avatar size="40" :color="getAvatarColor(record.status)">
              <v-img v-if="record.avatar" :src="record.avatar" />
              <span v-else class="text-white font-weight-medium">
                {{ getInitials(record.studentName) }}
              </span>
            </v-avatar>

            <!-- Content -->
            <div class="flex-grow-1">
              <!-- Header Row -->
              <div class="d-flex align-center justify-space-between mb-1">
                <div>
                  <div class="text-body-2 font-weight-medium text-truncate">
                    {{ record.studentName }}
                  </div>
                  <div class="text-caption text-medium-emphasis">
                    Matrícula: {{ record.studentId }}
                  </div>
                </div>

                <div class="d-flex align-center ga-2">
                  <!-- Action Icon -->
                  <v-icon
                    :color="getActionIconColor(record.action, record.status)"
                    size="16"
                  >
                    {{ getActionIcon(record.action, record.status) }}
                  </v-icon>

                  <!-- Status Chip -->
                  <v-chip
                    :color="record.status === 'autorizado' ? 'success' : 'error'"
                    size="small"
                    variant="flat"
                    class="text-caption font-weight-medium"
                  >
                    {{ record.status === 'autorizado' ? 'Autorizado' : 'Negado' }}
                  </v-chip>
                </div>
              </div>

              <!-- Footer Row -->
              <div class="d-flex align-center justify-space-between">
                <div class="d-flex align-center text-caption text-medium-emphasis">
                  <v-icon size="12" class="mr-1">mdi-clock-outline</v-icon>
                  {{ record.time }}
                </div>

                <div class="d-flex align-center text-caption text-medium-emphasis">
                  {{ record.turnstile }}
                  <v-icon size="12" class="ml-1">mdi-arrow-right</v-icon>
                </div>
              </div>
            </div>
          </div>
        </v-card>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const recentAccess = ref([
  {
    id: "1",
    studentName: "Maria Silva Santos",
    studentId: "2024001234",
    action: "entrada",
    time: "08:47",
    turnstile: "Entrada Principal",
    status: "autorizado"
  },
  {
    id: "2",
    studentName: "João Pedro Costa",
    studentId: "2024001235",
    action: "entrada",
    time: "08:46",
    turnstile: "Entrada Principal",
    status: "autorizado"
  },
  {
    id: "3",
    studentName: "Ana Beatriz Lima",
    studentId: "2024001236",
    action: "saida",
    time: "08:45",
    turnstile: "Entrada Secundária",
    status: "autorizado"
  },
  {
    id: "4",
    studentName: "Carlos Eduardo",
    studentId: "2024001237",
    action: "entrada",
    time: "08:44",
    turnstile: "Entrada Principal",
    status: "negado"
  },
  {
    id: "5",
    studentName: "Fernanda Oliveira",
    studentId: "2024001238",
    action: "entrada",
    time: "08:43",
    turnstile: "Entrada Principal",
    status: "autorizado"
  }
]);

// Helper functions
const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
};

const getActionIcon = (action, status) => {
  if (status === "negado") {
    return "mdi-clock-outline";
  }
  return action === "entrada" ? "mdi-login" : "mdi-logout";
};

const getActionIconColor = (action, status) => {
  if (status === "negado") {
    return "error";
  }
  return action === "entrada" ? "success" : "warning";
};

const getAvatarColor = (status) => {
  return status === "autorizado" ? "primary" : "error";
};
</script>

<style scoped>
.transition-hover {
  transition: all 0.2s ease-in-out;
}

.transition-hover:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
}

.text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

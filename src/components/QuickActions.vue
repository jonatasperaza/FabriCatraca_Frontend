<template>
  <v-card elevation="2" class="rounded-lg">
    <v-card-title class="text-h6 font-weight-medium">
      Ações Rápidas
    </v-card-title>

    <v-card-text>
      <v-row dense>
        <v-col
          v-for="(action, index) in actions"
          :key="index"
          cols="6"
          class="pa-1"
        >
          <v-btn
            :color="action.color"
            :variant="action.variant"
            class="h-auto pa-4 d-flex flex-column align-center justify-center ga-2 w-100 action-btn rounded-lg"
            @click="handleAction(action)"
          >
            <v-icon :icon="action.icon" size="24"></v-icon>

            <div class="text-center">
              <div class="text-body-2 font-weight-medium">
                {{ action.label }}
              </div>
              <div class="text-caption opacity-80">
                {{ action.description }}
              </div>
            </div>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const actions = ref([
  {
    icon: "mdi-account-plus",
    label: "Cadastrar Aluno",
    description: "Adicionar novo estudante",
    color: "info",
    variant: "flat",
    action: "cadastrar-aluno"
  },
  {
    icon: "mdi-account-group",
    label: "Gerenciar Turmas",
    description: "Configurar horários",
    color: "secondary",
    variant: "flat",
    action: "gerenciar-turmas"
  },
  {
    icon: "mdi-shield-check",
    label: "Autorização Temporária",
    description: "Acesso especial",
    color: "yellow-darken-1",
    variant: "flat",
    action: "autorizacao-temporaria"
  },
  {
    icon: "mdi-clock-outline",
    label: "Horários Especiais",
    description: "Eventos e atividades",
    color: "yellow-darken-1",
    variant: "flat",
    action: "horarios-especiais"
  },
  {
    icon: "mdi-file-document-outline",
    label: "Relatórios",
    description: "Gerar relatórios",
    color: "grey-lighten-2",
    variant: "flat",
    action: "relatorios"
  },
  {
    icon: "mdi-download",
    label: "Exportar Dados",
    description: "CSV, Excel, PDF",
    color: "grey-lighten-2",
    variant: "flat",
    action: "exportar-dados"
  },
  {
    icon: "mdi-alert-outline",
    label: "Logs de Auditoria",
    description: "Verificar segurança",
    color: "red",
    variant: "flat",
    action: "logs-auditoria"
  },
  {
    icon: "mdi-cog",
    label: "Configurações",
    description: "Sistema e catracas",
    color: "grey-lighten-2",
    variant: "flat",
    action: "configuracoes"
  }
]);

// Handle action clicks
const handleAction = (action) => {
  console.log(`Ação clicada: ${action.action}`);
  // Aqui você pode implementar a navegação ou emitir eventos
  // this.$router.push(`/${action.action}`);
  // ou
  // this.$emit('action-clicked', action.action);
};
</script>

<style scoped>
.action-btn {
  min-height: 80px !important;
  transition: all 0.2s ease-in-out;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.opacity-80 {
  opacity: 0.8;
}
</style>

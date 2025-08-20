<template>
  <v-card elevation="2" class="rounded-lg">
    <v-card-title class="text-h6 font-weight-medium">
      Fluxo de Entrada/Saída - Últimas 24 Horas
    </v-card-title>

    <v-card-text>
      <div style="height: 350px; width: 100%;">
        <v-chart
          ref="chartRef"
          :option="chartOption"
          :theme="chartTheme"
          autoresize
          class="chart"
        />
      </div>

      <!-- Stats Cards -->
      <v-row class="mt-4" dense>
        <v-col cols="6">
          <v-card variant="tonal" color="primary" class="pa-3 rounded-lg">
            <div class="d-flex align-center justify-space-between">
              <div>
                <div class="text-caption text-medium-emphasis">Total Entradas</div>
                <div class="text-h6 font-weight-bold">{{ totalEntradas }}</div>
              </div>
              <v-icon color="primary" size="24">mdi-login</v-icon>
            </div>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card variant="tonal" color="secondary" class="pa-3 rounded-lg">
            <div class="d-flex align-center justify-space-between">
              <div>
                <div class="text-caption text-medium-emphasis">Total Saídas</div>
                <div class="text-h6 font-weight-bold">{{ totalSaidas }}</div>
              </div>
              <v-icon color="secondary" size="24">mdi-logout</v-icon>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useTheme } from 'vuetify';
import VChart from 'vue-echarts';
import { use } from 'echarts/core';

// Importar componentes necessários do ECharts
import {
  CanvasRenderer
} from 'echarts/renderers';
import {
  BarChart
} from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent
} from 'echarts/components';

// Registrar componentes
use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent
]);

const theme = useTheme();
const chartRef = ref();

const data = [
  { time: "06:00", entradas: 45, saidas: 12 },
  { time: "07:00", entradas: 284, saidas: 23 },
  { time: "08:00", entradas: 156, saidas: 34 },
  { time: "09:00", entradas: 67, saidas: 45 },
  { time: "10:00", entradas: 89, saidas: 78 },
  { time: "11:00", entradas: 123, saidas: 234 },
  { time: "12:00", entradas: 234, saidas: 456 },
  { time: "13:00", entradas: 345, saidas: 234 },
  { time: "14:00", entradas: 234, saidas: 123 },
  { time: "15:00", entradas: 123, saidas: 89 },
  { time: "16:00", entradas: 89, saidas: 267 },
  { time: "17:00", entradas: 45, saidas: 398 }
];

// Computed properties
const totalEntradas = computed(() =>
  data.reduce((sum, item) => sum + item.entradas, 0)
);

const totalSaidas = computed(() =>
  data.reduce((sum, item) => sum + item.saidas, 0)
);

const chartTheme = computed(() =>
  theme.global.name.value === 'dark' ? 'dark' : null
);

const chartOption = computed(() => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    backgroundColor: theme.global.name.value === 'dark' ? '#2D2D2D' : '#FFFFFF',
    borderColor: theme.global.name.value === 'dark' ? '#404040' : '#E0E0E0',
    textStyle: {
      color: theme.global.name.value === 'dark' ? '#FFFFFF' : '#000000'
    }
  },
  legend: {
    data: ['Entradas', 'Saídas'],
    top: 10,
    textStyle: {
      color: theme.global.name.value === 'dark' ? '#FFFFFF' : '#666666'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '15%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: data.map(item => item.time),
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        color: theme.global.name.value === 'dark' ? '#CCCCCC' : '#666666',
        fontSize: 11
      },
      axisLine: {
        lineStyle: {
          color: theme.global.name.value === 'dark' ? '#404040' : '#E0E0E0'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        color: theme.global.name.value === 'dark' ? '#CCCCCC' : '#666666',
        fontSize: 11
      },
      axisLine: {
        lineStyle: {
          color: theme.global.name.value === 'dark' ? '#404040' : '#E0E0E0'
        }
      },
      splitLine: {
        lineStyle: {
          color: theme.global.name.value === 'dark' ? '#333333' : '#F0F0F0'
        }
      }
    }
  ],
  series: [
    {
      name: 'Entradas',
      type: 'bar',
      barWidth: '35%',
      data: data.map(item => item.entradas),
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: theme.current.value.colors?.primary || '#1976d2'
            },
            {
              offset: 1,
              color: theme.current.value.colors?.primary ?
                theme.current.value.colors.primary + '80' : '#1976d280'
            }
          ]
        },
        borderRadius: [4, 4, 0, 0]
      },
      emphasis: {
        focus: 'series',
        itemStyle: {
          shadowBlur: 10,
          shadowColor: theme.current.value.colors?.primary || '#1976d2'
        }
      },
      animationDelay: (idx) => idx * 50
    },
    {
      name: 'Saídas',
      type: 'bar',
      barWidth: '35%',
      data: data.map(item => item.saidas),
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: theme.current.value.colors?.secondary || '#9c27b0'
            },
            {
              offset: 1,
              color: theme.current.value.colors?.secondary ?
                theme.current.value.colors.secondary + '80' : '#9c27b080'
            }
          ]
        },
        borderRadius: [4, 4, 0, 0]
      },
      emphasis: {
        focus: 'series',
        itemStyle: {
          shadowBlur: 10,
          shadowColor: theme.current.value.colors?.secondary || '#9c27b0'
        }
      },
      animationDelay: (idx) => idx * 50 + 100
    }
  ],
  animationEasing: 'cubicOut',
  animationDuration: 1000
}));

onMounted(() => {
  // Chart será automaticamente renderizado pelo v-chart
});

// Watch para mudanças de tema
watch(() => theme.global.name.value, () => {
  // O gráfico se atualiza automaticamente com o computed chartOption
}, { immediate: true });
</script>

<style scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>

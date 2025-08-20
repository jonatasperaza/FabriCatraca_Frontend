import { defineStore } from 'pinia'
import { TimeSpansService } from '@/services'
import { ref } from 'vue'

export const useTimeSpans = defineStore('timeSpans', () => {
  const timeSpanSelected = ref(null)
  const timeSpans = ref([])

  const getTimeSpans = async () => {
    const response = await TimeSpansService.getTimeSpans()
    timeSpans.value = response
  }

  const getTimeSpanById = async (id) => {
    const timeSpan = await TimeSpansService.getTimeSpanById(id)
    timeSpanSelected.value = timeSpan
  }

  const createTimeSpan = async (timeSpan) => {
    const newTimeSpan = await TimeSpansService.createTimeSpan(timeSpan)
    timeSpans.value.push(newTimeSpan)
  }

  const updateTimeSpan = async (timeSpan) => {
    const updatedTimeSpan = await TimeSpansService.updateTimeSpan(timeSpan.id, timeSpan)
    timeSpans.value = timeSpans.value.map((t) =>
      t.id === updatedTimeSpan.id ? updatedTimeSpan : t,
    )
  }

  const deleteTimeSpan = async (id) => {
    await TimeSpansService.deleteTimeSpan(id)
    timeSpans.value = timeSpans.value.filter((t) => t.id !== id)
  }

  return {
    timeSpanSelected,
    timeSpans,
    getTimeSpans,
    getTimeSpanById,
    createTimeSpan,
    updateTimeSpan,
    deleteTimeSpan,
  }
})

import { defineStore } from 'pinia'
import { TimeZonesService } from '@/services'
import { ref } from 'vue'

export const useTimeZones = defineStore('timeZones', () => {
  const timeZoneSelected = ref(null)
  const timeZones = ref([])

  const getTimeZones = async () => {
    const response = await TimeZonesService.getTimeZones()
    timeZones.value = response
  }

  const getTimeZoneById = async (id) => {
    const timeZone = await TimeZonesService.getTimeZoneById(id)
    timeZoneSelected.value = timeZone
  }

  const createTimeZone = async (timeZone) => {
    const newTimeZone = await TimeZonesService.createTimeZone(timeZone)
    timeZones.value.push(newTimeZone)
  }

  const updateTimeZone = async (timeZone) => {
    const updatedTimeZone = await TimeZonesService.updateTimeZone(timeZone.id, timeZone)
    timeZones.value = timeZones.value.map((t) =>
      t.id === updatedTimeZone.id ? updatedTimeZone : t,
    )
  }

  const deleteTimeZone = async (id) => {
    await TimeZonesService.deleteTimeZone(id)
    timeZones.value = timeZones.value.filter((t) => t.id !== id)
  }

  return {
    timeZoneSelected,
    timeZones,
    getTimeZones,
    getTimeZoneById,
    createTimeZone,
    updateTimeZone,
    deleteTimeZone,
  }
})

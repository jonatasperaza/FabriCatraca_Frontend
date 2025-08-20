import { defineStore } from 'pinia'
import { AreasService } from '@/services'
import { ref } from 'vue'

export const useAreas = defineStore('areas', () => {
  const areaSelected = ref(null)
  const areas = ref([])
  const getAreas = async () => {
    const areas = await AreasService.getAreas()
    areas.value = areas
  }
  const getAreaById = async (id) => {
    const area = await AreasService.getAreaById(id)
    areaSelected.value = area
  }
  const createArea = async (area) => {
    const newArea = await AreasService.createArea(area)
    areas.value.push(newArea)
  }
  const updateArea = async (area) => {
    const updatedArea = await AreasService.updateArea(area)
    areas.value = areas.value.map((a) => a.id === updatedArea.id ? updatedArea : a)
  }
  const deleteArea = async (id) => {
    await AreasService.deleteArea(id)
    areas.value = areas.value.filter((a) => a.id !== id)
  }
  return { areaSelected, areas, getAreas, getAreaById, createArea, updateArea, deleteArea }
})

import { defineStore } from 'pinia'
import { AccessRuleTimeZonesService } from '@/services'
import { ref } from 'vue'

export const useAccessRuleTimeZones = defineStore('accessRuleTimeZones', () => {
  const accessRuleTimeZoneSelected = ref(null)
  const accessRuleTimeZones = ref([])
  const getAccessRuleTimeZones = async () => {
    const accessRuleTimeZones = await AccessRuleTimeZonesService.getAccessRuleTimeZones()
    accessRuleTimeZones.value = accessRuleTimeZones
  }
  const getAccessRuleTimeZoneById = async (id) => {
    const accessRuleTimeZone = await AccessRuleTimeZonesService.getAccessRuleTimeZoneById(id)
    accessRuleTimeZoneSelected.value = accessRuleTimeZone
  }
  const createAccessRuleTimeZone = async (accessRuleTimeZone) => {
    const newAccessRuleTimeZone = await AccessRuleTimeZonesService.createAccessRuleTimeZone(accessRuleTimeZone)
    accessRuleTimeZones.value.push(newAccessRuleTimeZone)
  }
  const updateAccessRuleTimeZone = async (accessRuleTimeZone) => {
    const updatedAccessRuleTimeZone = await AccessRuleTimeZonesService.updateAccessRuleTimeZone(accessRuleTimeZone)
    accessRuleTimeZones.value = accessRuleTimeZones.value.map((a) => a.id === updatedAccessRuleTimeZone.id ? updatedAccessRuleTimeZone : a)
  }
  const deleteAccessRuleTimeZone = async (id) => {
    await AccessRuleTimeZonesService.deleteAccessRuleTimeZone(id)
    accessRuleTimeZones.value = accessRuleTimeZones.value.filter((a) => a.id !== id)
  }
  return { accessRuleTimeZoneSelected, accessRuleTimeZones, getAccessRuleTimeZones, getAccessRuleTimeZoneById, createAccessRuleTimeZone, updateAccessRuleTimeZone, deleteAccessRuleTimeZone }
})


import { defineStore } from 'pinia'
import { PortalsService } from '@/services'
import { ref } from 'vue'

export const usePortals = defineStore('portals', () => {
  const portalSelected = ref(null)
  const portals = ref([])
  const getPortals = async () => {
    const portals = await PortalsService.getPortals()
    portals.value = portals
  }
  const getPortalById = async (id) => {
    const portal = await PortalsService.getPortalById(id)
    portalSelected.value = portal
  }
  const createPortal = async (portal) => {
    const newPortal = await PortalsService.createPortal(portal)
    portals.value.push(newPortal)
  }
  const updatePortal = async (portal) => {
    const updatedPortal = await PortalsService.updatePortal(portal)
    portals.value = portals.value.map((p) => p.id === updatedPortal.id ? updatedPortal : p)
  }
  const deletePortal = async (id) => {
    await PortalsService.deletePortal(id)
    portals.value = portals.value.filter((p) => p.id !== id)
  }
  return { portalSelected, portals, getPortals, getPortalById, createPortal, updatePortal, deletePortal }
})

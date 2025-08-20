import { defineStore } from 'pinia'
import { PortalAccessRulesService } from '@/services'
import { ref } from 'vue'

export const usePortalAccessRules = defineStore('portalAccessRules', () => {
  const portalAccessRuleSelected = ref(null)
  const portalAccessRules = ref([])

  const getPortalAccessRules = async () => {
    const response = await PortalAccessRulesService.getPortalAccessRules()
    portalAccessRules.value = response
  }

  const getPortalAccessRuleById = async (id) => {
    const portalAccessRule = await PortalAccessRulesService.getPortalAccessRuleById(id)
    portalAccessRuleSelected.value = portalAccessRule
  }

  const createPortalAccessRule = async (portalAccessRule) => {
    const newPortalAccessRule =
      await PortalAccessRulesService.createPortalAccessRule(portalAccessRule)
    portalAccessRules.value.push(newPortalAccessRule)
  }

  const updatePortalAccessRule = async (portalAccessRule) => {
    const updatedPortalAccessRule = await PortalAccessRulesService.updatePortalAccessRule(
      portalAccessRule.id,
      portalAccessRule,
    )
    portalAccessRules.value = portalAccessRules.value.map((p) =>
      p.id === updatedPortalAccessRule.id ? updatedPortalAccessRule : p,
    )
  }

  const deletePortalAccessRule = async (id) => {
    await PortalAccessRulesService.deletePortalAccessRule(id)
    portalAccessRules.value = portalAccessRules.value.filter((p) => p.id !== id)
  }

  return {
    portalAccessRuleSelected,
    portalAccessRules,
    getPortalAccessRules,
    getPortalAccessRuleById,
    createPortalAccessRule,
    updatePortalAccessRule,
    deletePortalAccessRule,
  }
})

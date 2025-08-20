import { defineStore } from 'pinia'
import { AccessRulesService } from '@/services'
import { ref } from 'vue'

export const useAccessRules = defineStore('accessRules', () => {
  const accessRuleSelected = ref(null)
  const accessRules = ref([])

  const getAccessRules = async () => {
    const response = await AccessRulesService.getAccessRules()
    accessRules.value = response
  }

  const getAccessRuleById = async (id) => {
    const accessRule = await AccessRulesService.getAccessRuleById(id)
    accessRuleSelected.value = accessRule
  }

  const createAccessRule = async (accessRule) => {
    const newAccessRule = await AccessRulesService.createAccessRule(accessRule)
    accessRules.value.push(newAccessRule)
  }

  const updateAccessRule = async (accessRule) => {
    const updatedAccessRule = await AccessRulesService.updateAccessRule(accessRule.id, accessRule)
    accessRules.value = accessRules.value.map((a) =>
      a.id === updatedAccessRule.id ? updatedAccessRule : a,
    )
  }

  const deleteAccessRule = async (id) => {
    await AccessRulesService.deleteAccessRule(id)
    accessRules.value = accessRules.value.filter((a) => a.id !== id)
  }

  return {
    accessRuleSelected,
    accessRules,
    getAccessRules,
    getAccessRuleById,
    createAccessRule,
    updateAccessRule,
    deleteAccessRule,
  }
})

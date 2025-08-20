import { defineStore } from 'pinia'
import { UserAccessRulesService } from '@/services'
import { ref } from 'vue'

export const useUserAccessRules = defineStore('userAccessRules', () => {
  const userAccessRuleSelected = ref(null)
  const userAccessRules = ref([])

  const getUserAccessRules = async () => {
    const response = await UserAccessRulesService.getUserAccessRules()
    userAccessRules.value = response
  }

  const getUserAccessRuleById = async (id) => {
    const userAccessRule = await UserAccessRulesService.getUserAccessRuleById(id)
    userAccessRuleSelected.value = userAccessRule
  }

  const createUserAccessRule = async (userAccessRule) => {
    const newUserAccessRule = await UserAccessRulesService.createUserAccessRule(userAccessRule)
    userAccessRules.value.push(newUserAccessRule)
  }

  const updateUserAccessRule = async (userAccessRule) => {
    const updatedUserAccessRule = await UserAccessRulesService.updateUserAccessRule(
      userAccessRule.id,
      userAccessRule,
    )
    userAccessRules.value = userAccessRules.value.map((u) =>
      u.id === updatedUserAccessRule.id ? updatedUserAccessRule : u,
    )
  }

  const deleteUserAccessRule = async (id) => {
    await UserAccessRulesService.deleteUserAccessRule(id)
    userAccessRules.value = userAccessRules.value.filter((u) => u.id !== id)
  }

  return {
    userAccessRuleSelected,
    userAccessRules,
    getUserAccessRules,
    getUserAccessRuleById,
    createUserAccessRule,
    updateUserAccessRule,
    deleteUserAccessRule,
  }
})

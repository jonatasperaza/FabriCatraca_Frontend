import { defineStore } from 'pinia'
import { GroupAccessRulesService } from '@/services'
import { ref } from 'vue'

export const useGroupAccessRules = defineStore('groupAccessRules', () => {
  const groupAccessRuleSelected = ref(null)
  const groupAccessRules = ref([])

  const getGroupAccessRules = async () => {
    const response = await GroupAccessRulesService.getGroupAccessRules()
    groupAccessRules.value = response
  }

  const getGroupAccessRuleById = async (id) => {
    const groupAccessRule = await GroupAccessRulesService.getGroupAccessRuleById(id)
    groupAccessRuleSelected.value = groupAccessRule
  }

  const createGroupAccessRule = async (groupAccessRule) => {
    const newGroupAccessRule = await GroupAccessRulesService.createGroupAccessRule(groupAccessRule)
    groupAccessRules.value.push(newGroupAccessRule)
  }

  const updateGroupAccessRule = async (groupAccessRule) => {
    const updatedGroupAccessRule = await GroupAccessRulesService.updateGroupAccessRule(
      groupAccessRule.id,
      groupAccessRule,
    )
    groupAccessRules.value = groupAccessRules.value.map((g) =>
      g.id === updatedGroupAccessRule.id ? updatedGroupAccessRule : g,
    )
  }

  const deleteGroupAccessRule = async (id) => {
    await GroupAccessRulesService.deleteGroupAccessRule(id)
    groupAccessRules.value = groupAccessRules.value.filter((g) => g.id !== id)
  }

  return {
    groupAccessRuleSelected,
    groupAccessRules,
    getGroupAccessRules,
    getGroupAccessRuleById,
    createGroupAccessRule,
    updateGroupAccessRule,
    deleteGroupAccessRule,
  }
})

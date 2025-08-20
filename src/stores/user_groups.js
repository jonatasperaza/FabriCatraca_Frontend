import { defineStore } from 'pinia'
import { UserGroupsService } from '@/services'
import { ref } from 'vue'

export const useUserGroups = defineStore('userGroups', () => {
  const userGroupSelected = ref(null)
  const userGroups = ref([])

  const getUserGroups = async () => {
    const response = await UserGroupsService.getUserGroups()
    userGroups.value = response
  }

  const getUserGroupById = async (id) => {
    const userGroup = await UserGroupsService.getUserGroupById(id)
    userGroupSelected.value = userGroup
  }

  const createUserGroup = async (userGroup) => {
    const newUserGroup = await UserGroupsService.createUserGroup(userGroup)
    userGroups.value.push(newUserGroup)
  }

  const updateUserGroup = async (userGroup) => {
    const updatedUserGroup = await UserGroupsService.updateUserGroup(userGroup.id, userGroup)
    userGroups.value = userGroups.value.map((u) =>
      u.id === updatedUserGroup.id ? updatedUserGroup : u,
    )
  }

  const deleteUserGroup = async (id) => {
    await UserGroupsService.deleteUserGroup(id)
    userGroups.value = userGroups.value.filter((u) => u.id !== id)
  }

  return {
    userGroupSelected,
    userGroups,
    getUserGroups,
    getUserGroupById,
    createUserGroup,
    updateUserGroup,
    deleteUserGroup,
  }
})

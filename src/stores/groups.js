import { defineStore } from 'pinia'
import { GroupsService } from '@/services'
import { ref } from 'vue'

export const useGroups = defineStore('groups', () => {
  const groupSelected = ref(null)
  const groups = ref([])

  const getGroups = async () => {
    const response = await GroupsService.getGroups()
    groups.value = response
  }

  const getGroupById = async (id) => {
    const group = await GroupsService.getGroupById(id)
    groupSelected.value = group
  }

  const createGroup = async (group) => {
    const newGroup = await GroupsService.createGroup(group)
    groups.value.push(newGroup)
  }

  const updateGroup = async (group) => {
    const updatedGroup = await GroupsService.updateGroup(group.id, group)
    groups.value = groups.value.map((g) => (g.id === updatedGroup.id ? updatedGroup : g))
  }

  const deleteGroup = async (id) => {
    await GroupsService.deleteGroup(id)
    groups.value = groups.value.filter((g) => g.id !== id)
  }

  return {
    groupSelected,
    groups,
    getGroups,
    getGroupById,
    createGroup,
    updateGroup,
    deleteGroup,
  }
})

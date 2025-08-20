import { defineStore } from 'pinia'
import { UsersService } from '@/services'
import { ref } from 'vue'

export const useUser = defineStore('user', () => {
  const userSelected = ref(null)
  const users = ref([])
  const getUser = async (id) => {
    const user = await UsersService.getUserById(id)
    userSelected.value = user
  }

  const getUsers = async () => {
    const users = await UsersService.getUsers()
    users.value = users
  }
  const createUser = async (user) => {
    const newUser = await UsersService.createUser(user)
    users.value.push(newUser)
  }
  const updateUser = async (user) => {
    const updatedUser = await UsersService.updateUser(user)
    users.value = users.value.map((u) => u.id === updatedUser.id ? updatedUser : u)
  }
  const deleteUser = async (id) => {
    await UsersService.deleteUser(id)
    users.value = users.value.filter((u) => u.id !== id)
  }
  return { userSelected, getUser, getUsers, createUser, updateUser, deleteUser }
})

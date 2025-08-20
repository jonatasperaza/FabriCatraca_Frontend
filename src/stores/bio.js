import { defineStore } from 'pinia'
import { BiosService } from '@/services'
import { ref } from 'vue'

export const useBio = defineStore('bio', () => {
  const bioSelected = ref(null)
  const bio = ref([])
  const getBio = async () => {
    const bio = await BiosService.getBio()
    bio.value = bio
  }
  const getBioById = async (id) => {
    const bio = await BiosService.getBioById(id)
    bioSelected.value = bio
  }
  const createBio = async (bio) => {
    const newBio = await BiosService.createBio(bio)
    bio.value.push(newBio)
  }
  const updateBio = async (bio) => {
    const updatedBio = await BiosService.updateBio(bio)
    bio.value = bio.value.map((b) => b.id === updatedBio.id ? updatedBio : b)
  }
  const deleteBio = async (id) => {
    await BiosService.deleteBio(id)
    bio.value = bio.value.filter((b) => b.id !== id)
  }
  return { bioSelected, bio, getBio, getBioById, createBio, updateBio, deleteBio }
})

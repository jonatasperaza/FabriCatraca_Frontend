import { defineStore } from 'pinia'
import { BioService } from '@/services'
import { ref } from 'vue'

export const useBio = defineStore('bio', () => {
  const bioSelected = ref(null)
  const bio = ref([])
  const getBio = async () => {
    const bio = await BioService.getBio()
    bio.value = bio
  }
  const getBioById = async (id) => {
    const bio = await BioService.getBioById(id)
    bioSelected.value = bio
  }
  const createBio = async (bio) => {
    const newBio = await BioService.createBio(bio)
    bio.value.push(newBio)
  }
  const updateBio = async (bio) => {
    const updatedBio = await BioService.updateBio(bio)
    bio.value = bio.value.map((b) => (b.id === updatedBio.id ? updatedBio : b))
  }
  const deleteBio = async (id) => {
    await BioService.deleteBio(id)
    bio.value = bio.value.filter((b) => b.id !== id)
  }
  return { bioSelected, bio, getBio, getBioById, createBio, updateBio, deleteBio }
})

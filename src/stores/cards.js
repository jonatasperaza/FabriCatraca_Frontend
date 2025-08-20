import { defineStore } from 'pinia'
import { CardsService } from '@/services'
import { ref } from 'vue'

export const useCards = defineStore('cards', () => {
  const cardSelected = ref(null)
  const cards = ref([])

  const getCards = async () => {
    const response = await CardsService.getCards()
    cards.value = response
  }

  const getCardById = async (id) => {
    const card = await CardsService.getCardById(id)
    cardSelected.value = card
  }

  const createCard = async (card) => {
    const newCard = await CardsService.createCard(card)
    cards.value.push(newCard)
  }

  const updateCard = async (card) => {
    const updatedCard = await CardsService.updateCard(card.id, card)
    cards.value = cards.value.map((c) => (c.id === updatedCard.id ? updatedCard : c))
  }

  const deleteCard = async (id) => {
    await CardsService.deleteCard(id)
    cards.value = cards.value.filter((c) => c.id !== id)
  }

  return {
    cardSelected,
    cards,
    getCards,
    getCardById,
    createCard,
    updateCard,
    deleteCard,
  }
})

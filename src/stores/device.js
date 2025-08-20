import { defineStore } from 'pinia'
import { DeviceService } from '@/services'
import { ref } from 'vue'

export const useDevice = defineStore('device', () => {
  const deviceSelected = ref(null)
  const devices = ref([])

  const getDevices = async () => {
    const response = await DeviceService.getDevices()
    devices.value = response
  }

  const getDeviceById = async (id) => {
    const device = await DeviceService.getDeviceById(id)
    deviceSelected.value = device
  }

  const createDevice = async (device) => {
    const newDevice = await DeviceService.createDevice(device)
    devices.value.push(newDevice)
  }

  const updateDevice = async (device) => {
    const updatedDevice = await DeviceService.updateDevice(device.id, device)
    devices.value = devices.value.map((d) => (d.id === updatedDevice.id ? updatedDevice : d))
  }

  const deleteDevice = async (id) => {
    await DeviceService.deleteDevice(id)
    devices.value = devices.value.filter((d) => d.id !== id)
  }

  const testConnection = async (id) => {
    return await DeviceService.testConnection(id)
  }

  return {
    deviceSelected,
    devices,
    getDevices,
    getDeviceById,
    createDevice,
    updateDevice,
    deleteDevice,
    testConnection,
  }
})

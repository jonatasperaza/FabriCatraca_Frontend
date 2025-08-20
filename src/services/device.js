import { controlIdApi as api } from '@/plugins/api'

class DeviceService {
  async getDevices(params) {
    try {
      const response = await api.get("/devices", { params });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getDeviceById(id) {
    try {
      const response = await api.get(`/devices/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async createDevice(data) {
    try {
      const response = await api.post("/devices", data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async updateDevice(id, data) {
    try {
      const response = await api.patch(`/devices/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async deleteDevice(id) {
    try {
      const response = await api.delete(`/devices/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async testConnection(id) {
    try {
      const response = await api.post(`/devices/${id}/test_connection`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}


export default new DeviceService();

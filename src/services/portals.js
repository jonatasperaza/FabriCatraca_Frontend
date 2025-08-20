import { controlIdApi as api } from '@/plugins/api'

class PortalsService {
  async getPortals(params) {
    try {
      const response = await api.get("/portals", { params });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getPortalById(id) {
    try {
      const response = await api.get(`/portals/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async createPortal(data) {
    try {
      const response = await api.post("/portals", data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async updatePortal(id, data) {
    try {
      const response = await api.patch(`/portals/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async deletePortal(id) {
    try {
      const response = await api.delete(`/portals/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}


export default new PortalsService();

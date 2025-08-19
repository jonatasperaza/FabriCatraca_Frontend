import api from "@/plugins/api";
api.baseURL = api.baseURL + "/control_id";


class AreasService {
  async getAreas(params) {
    try {
      const response = await api.get("/areas", { params });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getAreaById(id) {
    try {
      const response = await api.get(`/areas/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async createArea(data) {
    try {
      const response = await api.post("/areas", data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async updateArea(id, data) {
    try {
      const response = await api.patch(`/areas/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async deleteArea(id) {
    try {
      const response = await api.delete(`/areas/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}


export default new AreasService();

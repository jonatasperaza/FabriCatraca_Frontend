import api from "@/plugins/api";
api.baseURL = api.baseURL + "/control_id";


class TimeZonesService {
  async getTimeZones(params) {
    try {
      const response = await api.get("/time_zones", { params });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getTimeZoneById(id) {
    try {
      const response = await api.get(`/time_zones/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async createTimeZone(data) {
    try {
      const response = await api.post("/time_zones", data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async updateTimeZone(id, data) {
    try {
      const response = await api.patch(`/time_zones/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async deleteTimeZone(id) {
    try {
      const response = await api.delete(`/time_zones/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new TimeZonesService();

import api from "@/plugins/api";
api.baseURL = api.baseURL + "/control_id";


class TimeSpansService {
  async getTimeSpans(params) {
    try {
      const response = await api.get("/time_spans", { params });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getTimeSpanById(id) {
    try {
      const response = await api.get(`/time_spans/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async createTimeSpan(data) {
    try {
      const response = await api.post("/time_spans", data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async updateTimeSpan(id, data) {
    try {
      const response = await api.patch(`/time_spans/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async deleteTimeSpan(id) {
    try {
      const response = await api.delete(`/time_spans/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new TimeSpansService();

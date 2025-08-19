import api from "@/plugins/api";
api.baseURL = api.baseURL + "/control_id";


class BioService {
  async getBio(params) {
    try {
      const response = await api.get("/templates", { params });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getBioById(id) {
    try {
      const response = await api.get(`/templates/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async createBio(data) {
    try {
      const response = await api.post("/templates", data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async deleteBio(id) {
    try {
      const response = await api.delete(`/templates/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new BioService();

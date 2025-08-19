import api from "@/plugins/api";
api.baseURL = api.baseURL + "/control_id";


class ConfigService {
  async syncData() {
    try {
      const response = await api.post("/control_id/sync");
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new ConfigService();

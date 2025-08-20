import { controlIdApi as api } from '@/plugins/api'

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

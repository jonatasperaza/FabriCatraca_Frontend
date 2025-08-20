import { controlIdApi as api } from '@/plugins/api'

class UserAccessRulesService {
  async getUserAccessRules(params) {
    try {
      const response = await api.get("/user_access_rules", { params });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getUserAccessRuleById(id) {
    try {
      const response = await api.get(`/user_access_rules/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async createUserAccessRule(data) {
    try {
      const response = await api.post("/user_access_rules", data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async updateUserAccessRule(id, data) {
    try {
      const response = await api.patch(`/user_access_rules/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async deleteUserAccessRule(id) {
    try {
      const response = await api.delete(`/user_access_rules/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new UserAccessRulesService();

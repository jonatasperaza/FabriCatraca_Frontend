import { controlIdApi as api } from '@/plugins/api'

class GroupAccessRulesService {
  async getGroupAccessRules(params) {
    try {
      const response = await api.get("/group_access_rules", { params });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getGroupAccessRuleById(id) {
    try {
      const response = await api.get(`/group_access_rules/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async createGroupAccessRule(data) {
    try {
      const response = await api.post("/group_access_rules", data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async updateGroupAccessRule(id, data) {
    try {
      const response = await api.patch(`/group_access_rules/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async deleteGroupAccessRule(id) {
    try {
      const response = await api.delete(`/group_access_rules/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}


export default new GroupAccessRulesService();

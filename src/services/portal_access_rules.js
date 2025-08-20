import { controlIdApi as api } from '@/plugins/api'


class PortalAccessRulesService {
  async getPortalAccessRules(params) {
    try {
      const response = await api.get("/portal_access_rules", { params });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getPortalAccessRuleById(id) {
    try {
      const response = await api.get(`/portal_access_rules/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async createPortalAccessRule(data) {
    try {
      const response = await api.post("/portal_access_rules", data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async updatePortalAccessRule(id, data) {
    try {
      const response = await api.patch(`/portal_access_rules/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async deletePortalAccessRule(id) {
    try {
      const response = await api.delete(`/portal_access_rules/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}


export default new PortalAccessRulesService();

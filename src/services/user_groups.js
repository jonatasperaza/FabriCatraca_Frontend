import { controlIdApi as api } from '@/plugins/api'

class UserGroupsService {
  async getUserGroups(params) {
    try {
      const response = await api.get("/user_groups", { params });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getUserGroupById(id) {
    try {
      const response = await api.get(`/user_groups/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async createUserGroup(data) {
    try {
      const response = await api.post("/user_groups", data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async updateUserGroup(id, data) {
    try {
      const response = await api.patch(`/user_groups/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async deleteUserGroup(id) {
    try {
      const response = await api.delete(`/user_groups/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new UserGroupsService();

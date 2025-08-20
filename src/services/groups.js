import { controlIdApi as api } from '@/plugins/api'

class GroupsService {
  async getGroups(params) {
    try {
      const response = await api.get("/groups", { params });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getGroupById(id) {
    try {
      const response = await api.get(`/groups/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async createGroup(data) {
    try {
      const response = await api.post("/groups", data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async updateGroup(id, data) {
    try {
      const response = await api.patch(`/groups/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async deleteGroup(id) {
    try {
      const response = await api.delete(`/groups/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}


export default new GroupsService();

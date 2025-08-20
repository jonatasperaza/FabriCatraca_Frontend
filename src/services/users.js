import { usersApi as api } from '@/plugins/api'

class UsersService {
  async getUsers(params) {
    try {
      const response = await api.get("/users", { params });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getUserById(id) {
    try {
      const response = await api.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async createUser(data) {
    try {
      const response = await api.post("/users", data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async updateUser(id, data) {
    try {
      const response = await api.patch(`/users/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async deleteUser(id) {
    try {
      const response = await api.delete(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getMe() {
    try {
      const response = await api.get("/users/me");
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new UsersService();

import api from "@/plugins/api";
api.baseURL = api.baseURL + "/control_id";


class CardsService {
  async getCards(params) {
    try {
      const response = await api.get("/cards", { params });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getCardById(id) {
    try {
      const response = await api.get(`/cards/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async createCard(data) {
    try {
      const response = await api.post("/cards", data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async updateCard(id, data) {
    try {
      const response = await api.patch(`/cards/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async deleteCard(id) {
    try {
      const response = await api.delete(`/cards/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}


export default new CardsService();

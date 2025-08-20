import { controlIdApi as api } from '@/plugins/api'

class AccessRulesService {
  async getAccessRules(params) {
    try {
      const response = await api.get('/access_rules', { params })
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async getAccessRuleById(id) {
    try {
      const response = await api.get(`/access_rules/${id}`)
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async createAccessRule(data) {
    try {
      const response = await api.post('/access_rules', data)
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async updateAccessRule(id, data) {
    try {
      const response = await api.patch(`/access_rules/${id}`, data)
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async deleteAccessRule(id) {
    try {
      const response = await api.delete(`/access_rules/${id}`)
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default new AccessRulesService()

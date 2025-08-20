import axios from 'axios'
import { useAuth } from '@/stores/auth'
import router from '@/router'

const apiUrl = import.meta.env.VITE_API_URL

export const createApi = (basePrefix = '') => {
  const api = axios.create({
    baseURL: `${apiUrl}${basePrefix}`,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 100000,
  })

  api.interceptors.request.use((config) => {
    const authStore = useAuth()
    const token = authStore?.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status == 401) {
        useAuth().logout()
        router.push('/auth/login/')
      }
      return Promise.reject(error)
    },
  )

  return api
}

// API padrão sem prefixo
export const api = createApi()

// API com prefixo /control_id
export const controlIdApi = createApi('/control_id')
export const usersApi = createApi('/users')

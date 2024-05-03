import axios, { AxiosResponse } from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getBurgers = async (): Promise<AxiosResponse> => api.get('/burgers')
export const getPizzas = async (): Promise<AxiosResponse> => api.get('/pizzas')
export const getDrinks = async (): Promise<AxiosResponse> => api.get('/drinks')
export const getDesserts = async (): Promise<AxiosResponse> => api.get('/desserts')

export default api

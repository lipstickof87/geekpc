import axios from 'axios'
import { getToken } from './token'
const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout:5000
})
//request interceptors
http.interceptors.request.use((config) => {
  return config
  const token = getToken()
  if(token)config.headers.Authorization=`Bearer ${token}`
},
  (error) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use((response)=> {
  return response
}, (error) => {
  return Promise.reject(error)
})
export {http}
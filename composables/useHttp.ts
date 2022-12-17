import axios from 'axios'

const ax = axios.create({
  baseURL: 'http://103.13.207.24/api',
})

export const useHttp = () => {
  return ax
}

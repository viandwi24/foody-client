import axios from 'axios'

const ax = axios.create({
  baseURL: 'http://localhost/api/',
})

export const useHttp = () => {
  return ax
}

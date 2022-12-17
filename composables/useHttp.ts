import axios from 'axios'

const ax = axios.create({
  baseURL: 'http://localhost/api/',
  // baseURL: 'https://foody.viandwi24.site/',
})

export const useHttp = () => {
  return ax
}

import { AxiosResponse } from 'axios'
import { ApiContract } from '~/services/api'

export const useApi = () => {
  const http = useHttp()
  const create = (api: ApiContract) =>
    new Promise<AxiosResponse<any>>((resolve, reject) => {
      try {
        console.log('api', api)
        http(api.config as any)
          .then(async (res) => {
            try {
              let newRes: any = res
              if (api.onResponse) {
                newRes = await api.onResponse(res as any)
              }
              resolve(newRes)
            } catch (error) {
              reject(error)
            }
          })
          .catch((error) => reject(error))
      } catch (error) {
        reject(error)
      }
    })
  return {
    http,
    create,
  }
}

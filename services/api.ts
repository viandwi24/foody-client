import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Menu as MenuType, Transaction as TransactionType } from '~~/type'

export interface ApiContract {
  config: AxiosRequestConfig
  onResponse?: (
    res: AxiosResponse | AxiosResponse<any> | AxiosResponse<any, any>
  ) => Promise<AxiosResponse> | AxiosResponse
}

export interface ApiTransactionAllOpts {
  filter?: {
    status?: string
  }
}

export interface ApiTransactionCreateData {
  user_name: string
  menus: {
    id: number
    qty: number
  }[]
}

export const ClearUndefinedAndEmptyProp = (obj: any) => {
  const newObj = { ...obj }
  Object.keys(newObj).forEach((key) => {
    if (newObj[key] && typeof newObj[key] === 'object') {
      ClearUndefinedAndEmptyProp(newObj[key])
    } else if (newObj[key] === undefined || newObj[key] === '') {
      delete newObj[key]
    }
  })
  return newObj
}

export namespace Api {
  // menu
  export namespace Menu {
    /**
     * Get all menus
     */
    export const All = (): ApiContract => ({
      config: {
        method: 'GET',
        url: 'menu',
      },
    })

    /**
     * Create a new menu
     * @param data
     * @returns
     */
    export const Create = (data: MenuType): ApiContract => ({
      config: {
        method: 'POST',
        url: 'menu',
        data: ClearUndefinedAndEmptyProp(data),
      },
    })

    /**
     * Update a menu
     * @param id
     * @param data
     */
    export const Update = (id: number, data: MenuType): ApiContract => ({
      config: {
        method: 'PUT',
        url: `menu/${id}`,
        data: ClearUndefinedAndEmptyProp(data),
      },
    })

    /**
     * Delete a menu
     * @param id
     * @returns
     */
    export const Delete = (id: number): ApiContract => ({
      config: {
        method: 'DELETE',
        url: `menu/${id}`,
      },
    })
  }

  // transactions
  export namespace Transaction {
    /**
     * Get all transactions
     */
    export const All = (opts: Partial<ApiTransactionAllOpts>): ApiContract => ({
      config: {
        method: 'GET',
        url: 'transaction',
        params: {
          ...opts,
        },
      },
    })

    /**
     * Create a new transaction
     * @param data
     * @returns
     */
    export const Create = (data: ApiTransactionCreateData): ApiContract => ({
      config: {
        method: 'POST',
        url: 'transaction',
        data,
      },
    })

    /**
     * Update a transaction
     * @param id
     * @param data
     */
    export const Update = (
      id: number,
      data: Partial<TransactionType>
    ): ApiContract => ({
      config: {
        method: 'PUT',
        url: `transaction/${id}`,
        data,
      },
    })
  }

  // auth
  export namespace Auth {
    /**
     * Login
     * @param data
     * @returns
     */
    export const Login = (data: { email: string; password: string }) => ({
      config: {
        method: 'POST',
        url: 'auth/login',
        data,
      },
    })

    /**
     * Logout
     * @returns
     */
    export const Logout = () => ({
      config: {
        method: 'POST',
        url: 'auth/logout',
      },
    })

    /**
     * Me
     * Get current user
     * @returns
     * @returns
     */
    export const Me = () => ({
      config: {
        method: 'GET',
        url: 'auth/user',
      },
    })
  }
}

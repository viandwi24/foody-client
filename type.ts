export interface Menu {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export interface MenuWithPivot extends Menu {
  pivot: {
    transaction_id: number
    menu_id: number
    quantity: number
    price: number
    total: number
  }
}

export interface Transaction {
  id: number
  code: string
  status: 'pending' | 'processing' | 'finished' | 'declined'
  user_name: string
  total: number
  menus: MenuWithPivot[]
}

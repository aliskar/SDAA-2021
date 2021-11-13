export type CurrencyCode = 'EUR' | 'USD' | 'RUB' | 'UAH' | 'PLN'

export interface Currency {
  name: string
  code: CurrencyCode
  rate: number
}

export const INITIAL_CURRENCY = {
  NAME: 'Belarusian ruble',
  CODE: 'BYN',
}

export interface RenderItem extends Currency {
  amount: number
  price: number
}

export interface Payload {
  value: number
  type: string
}

export type RendererFunc = (payload: RenderItem[]) => string

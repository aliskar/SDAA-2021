import { Currency, INITIAL_CURRENCY, Payload, RenderItem } from '../types/types'
import * as data from '../__mocked_data__/rates.json'

const fetchMock = async (_url: string) => Array.from(data) as Currency[]

export class Model {
  public currencies: Currency[] = []
  public renderState: RenderItem[] = []

  constructor() {}

  public async initModel() {
    this.currencies = await fetchMock('mocked/url/to/fetch')
    this.renderState = this.currencies.map((cur) => ({
      price: 1 * cur.rate,
      amount: 1,
      ...cur,
    }))
  }

  private countAmount(value: number) {
    this.renderState = this.currencies.map((cur) => ({
      price: value * cur.rate,
      amount: value,
      ...cur,
    }))
  }

  private countPrice(value: number, type: string) {
    const { rate } = this.currencies.find((cur) => cur.code === type)
    const newValue = value / rate
    this.renderState = this.currencies.map((cur) => ({
      price: newValue * cur.rate,
      amount: newValue,
      ...cur,
    }))
  }

  public updateState({ type, value }: Payload) {
    if (type === INITIAL_CURRENCY.CODE) {
      this.countAmount(value)
    } else {
      this.countPrice(value, type)
    }
  }
}

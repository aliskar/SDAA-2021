import { INITIAL_CURRENCY, RenderItem } from '../../types/types'

export const inputTemplate = (items: RenderItem[]) => items.map(inputItemTemplate).join('')

const inputItemTemplate = (item: RenderItem) =>
  `<fieldset style="width: 450px">
    <legend>${item.name}</legend>
    <div>1 ${INITIAL_CURRENCY.NAME} is <input type="text" class="curr-rate-input" value="${item.rate}" disabled>
        ${item.name}
    </div>
    <div style="display: flex">
        <div style="display: flex; flex-direction: column;">
            <span>${INITIAL_CURRENCY.CODE}</span>
            <input type="number" class="currency-amount" value=${item.amount.toFixed(2)} data-currency="${INITIAL_CURRENCY.CODE}" > 
        </div>
        <div style="display: flex; flex-direction: column;">
            <span>${item.code}</span>
            <input type="number" value=${item.price.toFixed(2)} class="currency-price" data-currency="${item.code}">
        </div>
    </div>
  </fieldset>`

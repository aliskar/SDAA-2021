import { INITIAL_CURRENCY, RenderItem } from '../../types/types'

export const rangeTemplate = (items: RenderItem[]) => items.map(rangeItemTemplate).join('')

const rangeItemTemplate = (item: RenderItem) =>
  `<fieldset style="width: 450px">
    <legend>${item.name}</legend>
    <div>1 ${INITIAL_CURRENCY.NAME} is <input type="text" class="curr-rate-input" value="${item.rate}" disabled>
        ${item.name}
    </div>
    <div style="display: flex">
        <div style="display: flex; flex-direction: column;">
            <span>${INITIAL_CURRENCY.CODE} ${item.amount.toFixed(2)}</span>
            <input type="range" value=${item.amount} min="1" max="1000000" step="1" class="currency-amount" data-currency="${INITIAL_CURRENCY.CODE}"> 
        </div>
        <div style="display: flex; flex-direction: column;">
            <span>${item.code} ${item.price.toFixed(2)}</span>
            <input type="range" class="currency-price" min="0" max="1000000" value="${item.price}" data-currency="${item.code}">
        </div>
    </div>
  </fieldset>`

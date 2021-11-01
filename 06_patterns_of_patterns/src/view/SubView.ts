import { Subject } from '../Subject'
import { RendererFunc, RenderItem } from '../types/types'

export class SubView {
  constructor(private rendererFunc: RendererFunc) {}

  private getTemplate(renderItems: RenderItem[]) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    wrapper.innerHTML = this.rendererFunc(renderItems)
    return wrapper
  }

  public render(renderItems: RenderItem[]) {
    const container = document.querySelector<HTMLDivElement>('.main-content')
    container.innerHTML = ''
    container.appendChild(this.getTemplate(renderItems))
  }

  public subscribeToEvents(subject: Subject) {
    const amountInputsList = document.querySelectorAll('.currency-amount')
    const priceInputsList = document.querySelectorAll('.currency-price')

    const handler = (event: Event) => {
      const type = (event.target as HTMLInputElement).dataset.currency
      const value = Number((event.target as HTMLInputElement).value)
      subject.notify({ type, value })
    }

    amountInputsList.forEach((selectElement) => selectElement.addEventListener('change', handler))
    priceInputsList.forEach((selectElement) => selectElement.addEventListener('change', handler))
  }
}

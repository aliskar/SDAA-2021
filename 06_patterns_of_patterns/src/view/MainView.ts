import { Subject } from '../Subject'
import { SubView } from './SubView'
import { baseTemplate } from './templates/base'
import { ViewFactory } from './ViewFactory'

export class MainView {
  public subView: SubView
  private root = document.getElementById('root')
  private inputViewRadio: HTMLInputElement
  private rangeViewRadio: HTMLInputElement

  public initTemplate() {
    this.root.innerHTML = baseTemplate('BYN currency exchange')
    this.subView = ViewFactory.createSubView()
    this.inputViewRadio = document.getElementById('inputView') as HTMLInputElement
    this.rangeViewRadio = document.getElementById('rangeView') as HTMLInputElement
  }

  public subscribeToEvents(subject: Subject) {
    const handler = (event: Event) => {
      this.subView = ViewFactory.createSubView((event.target as HTMLInputElement).value)
      subject.notify()
    }

    this.inputViewRadio.addEventListener('change', handler)
    this.rangeViewRadio.addEventListener('change', handler)
  }
}

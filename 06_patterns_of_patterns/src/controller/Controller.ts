import { Model } from '../model/Model'
import { Observer, Subject } from '../Subject'
import { MainView } from '../view/MainView'

export class Controller implements Observer {
  private currencySubject = new Subject()
  private viewSubject = new Subject()

  constructor(private view: MainView, private model: Model) {
    this.currencySubject.subscribe(this)
    this.viewSubject.subscribe(this)
  }

  public async init() {
    this.view.initTemplate()
    await this.model.initModel()
    this.renderView()
    this.view.subscribeToEvents(this.viewSubject)
  }

  private renderView() {
    this.view.subView.render(this.model.renderState)
    this.view.subView.subscribeToEvents(this.currencySubject)
  }

  public update(payload?: any): void {
    payload && this.model.updateState(payload)
    this.renderView()
  }
}

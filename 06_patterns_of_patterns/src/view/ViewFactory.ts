import { SubView } from './SubView'
import { inputTemplate } from './templates/input'
import { rangeTemplate } from './templates/range'

export class ViewFactory {
  public static createSubView(type?: string) {
    return type === 'range' ? new SubView(rangeTemplate) : new SubView(inputTemplate)
  }
}

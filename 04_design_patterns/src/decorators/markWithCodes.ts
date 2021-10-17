import { Shipment } from '../Shipments/Shipment'
import { Marks } from '../types'

export function MarkWithCodes(
  target: Shipment,
  _methodName: string,
  descriptor: TypedPropertyDescriptor<(...args: any) => any>
) {
  const method = descriptor.value
  descriptor.value = function () {
    const result = method.call(this)
    const marks: Marks[] | undefined = target.getMarks.call(this)

    if (marks && marks.length > 0) {
      const preparedMarks = marks.map((mark) => `**MARK ${mark.toUpperCase()}**`).join('\n')
      return `${result}\n${preparedMarks}`
    }

    return result
  }

  return descriptor
}

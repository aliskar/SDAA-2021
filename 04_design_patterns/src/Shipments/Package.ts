import { MarkWithCodes } from '../decorators/markWithCodes'
import { ShipmentState, ShipmentType } from '../types'
import { Shipment } from './Shipment'

@MarkWithCodes
export class Package extends Shipment {
  constructor(state: ShipmentState) {
    super(state)
  }

  public getCost() {
    return this.shipmentStrategy.getCost(this.getWeight(), ShipmentType.PACKAGE)
  }
}

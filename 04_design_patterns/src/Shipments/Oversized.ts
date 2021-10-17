import { ShipmentState, ShipmentType } from '../types'
import { Shipment } from './Shipment'

export class Oversized extends Shipment {
  constructor(state: ShipmentState) {
    super(state)
  }

  public getCost() {
    return this.shipmentStrategy.getCost(this.getWeight(), ShipmentType.OVERSIZED)
  }
}

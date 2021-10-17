import { ShipmentType } from '../types'
import { Shipper } from './Shipper'

export class ChicagoSprintShipper extends Shipper {
  protected static LETTER_COST = 0.42
  protected static PACKAGE_COST = 0.2

  constructor() {
    super(ChicagoSprintShipper.LETTER_COST, ChicagoSprintShipper.PACKAGE_COST)
  }

  public getCost(weight: number, type: ShipmentType) {
    return type === ShipmentType.OVERSIZED ? 0 : super.getCost(weight, type)
  }
}

import { ShipmentType } from '../types'
import { Shipper } from './Shipper'

export class PacificParselShipper extends Shipper {
  private static LETTER_COST = 0.51
  private static PACKAGE_COST = 0.19

  constructor() {
    super(PacificParselShipper.LETTER_COST, PacificParselShipper.PACKAGE_COST)
  }

  public getCost(weight: number, type: ShipmentType) {
    return type === ShipmentType.OVERSIZED
      ? super.getCost(weight, ShipmentType.PACKAGE) + Number((weight * 0.02).toFixed(2))
      : super.getCost(weight, type)
  }
}

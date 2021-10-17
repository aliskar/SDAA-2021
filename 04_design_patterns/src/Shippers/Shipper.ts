import { ShipmentType } from '../types'

export abstract class Shipper {
  constructor(private letterCost: number, private packageCost: number) {}

  public getCost(weight: number, type: ShipmentType): number {
    switch (type) {
      case ShipmentType.LETTER:
        return this.getLetterCost(weight)
      case ShipmentType.PACKAGE:
        return this.getPackageCost(weight)
    }
  }

  private getLetterCost(weight: number) {
    return +(weight * this.letterCost).toFixed(2)
  }

  private getPackageCost(weight: number) {
    return +(weight * this.packageCost).toFixed(2)
  }
}

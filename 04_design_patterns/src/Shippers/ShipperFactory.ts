import { AirEastShipper } from './AirEastShipper'
import { ChicagoSprintShipper } from './ChicagoSprintShipper'
import { PacificParselShipper } from './PacificParcelShipper'

export class ShipperFactory {
  public static getShipperStrategy(zipCode: string) {
    if (/^[7-9]/.test(zipCode)) {
      return new PacificParselShipper()
    }

    if (/^[4-6]/.test(zipCode)) {
      return new ChicagoSprintShipper()
    }

    return new AirEastShipper()
  }
}

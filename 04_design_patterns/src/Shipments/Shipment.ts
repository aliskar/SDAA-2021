import { MarkWithCodes } from '../decorators/markWithCodes'
import { AirEastShipper } from '../Shippers/AirEastShipper'
import { ChicagoSprintShipper } from '../Shippers/ChicagoSprintShipper'
import { PacificParselShipper } from '../Shippers/PacificParcelShipper'
import { Shipper } from '../Shippers/Shipper'
import { Marks, ShipmentState } from '../types'

export abstract class Shipment {
  protected shipmentStrategy: Shipper
  static shipmentId = 0

  constructor(private state: ShipmentState) {
    this.shipmentStrategy = this.getShipmentStrategy()
  }

  abstract getCost(): number

  public getShipmentID() {
    Shipment.shipmentId++
    return this.state.shipmentId !== 0 ? this.state.shipmentId : Shipment.shipmentId
  }

  @MarkWithCodes
  public ship() {
    return `Shipment id: ${this.getShipmentID()}, from: ${this.state.fromAddress} ${this.state.fromZipCode}, to: ${
      this.state.toAddress
    } ${this.state.toZipCode}, cost: ${this.getCost()}$`
  }

  private getShipmentStrategy() {
    if (/^[7-9]/.test(this.state.fromZipCode)) {
      return new PacificParselShipper()
    }

    if (/^[4-6]/.test(this.state.fromZipCode)) {
      return new ChicagoSprintShipper()
    }

    return new AirEastShipper()
  }

  public getWeight() {
    return this.state.weight
  }

  public setToAddress(adress: string) {
    this.state.toAddress = adress
  }

  public setFromAddress(adress: string) {
    this.state.fromAddress = adress
  }

  public setToZipCode(zipCode: string) {
    this.state.toZipCode = zipCode
  }

  public setFromZipCode(zipCode: string) {
    this.state.fromZipCode = zipCode
  }

  public getMarks() {
    return this.state.marks
  }


  public setMarks(marks: Marks[]) {
    this.state.marks = marks
  }
}

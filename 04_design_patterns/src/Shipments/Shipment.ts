import { MarkWithCodes } from '../decorators/markWithCodes'
import { Shipper } from '../Shippers/Shipper'
import { ShipperFactory } from '../Shippers/ShipperFactory'
import { Marks, ShipmentState } from '../types'

export abstract class Shipment {
  protected shipmentStrategy: Shipper
  static shipmentId = 0

  constructor(private state: ShipmentState) {
    this.shipmentStrategy = ShipperFactory.getShipperStrategy(this.state.fromZipCode)
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

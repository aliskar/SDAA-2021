import { Shipper } from './Shippers/Shipper'

export type shipmentCallback = (state: ShipmentState) => void

export type eventListeners = {
  [key: string]: shipmentCallback[]
}

export type Marks = 'Fragile' | 'Do Not Leave' | 'Return Receipt Requested'

export const enum ShipmentType {
  LETTER = 'letter',
  PACKAGE = 'package',
  OVERSIZED = 'oversized',
}

export interface ShipmentState {
  shipmentId: number
  toAddress: string
  fromAddress: string
  toZipCode: string
  fromZipCode: string
  weight: number
  marks?: Marks[]
}

export interface IShipment {
  getCost(): number
  getShipmentID(): number
  ship(): string
  getWeight(): number
  setToAddress(adress: string): void
  setFromAddress(adress: string): void
  setToZipCode(zipCode: string): void
  setFromZipCode(zipCode: string): void
  getMarks(): Marks[]
  setMarks(marks: Marks[]): void
}

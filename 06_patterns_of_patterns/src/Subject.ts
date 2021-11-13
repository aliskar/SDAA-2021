import { Payload } from "./types/types"

interface ISubject {
  subscribe(observer: Observer): void
  unsubscribe(observer: Observer): void
  notify(payload: any): void
}

export interface Observer {
  update(payload?: any): void
}

export class Subject implements ISubject {
  private observers: Observer[] = []

  public subscribe(newObserver: Observer): void {
    this.observers.push(newObserver)
  }

  public unsubscribe(oldObserver: Observer): void {
    this.observers.filter((observer) => observer !== oldObserver)
  }

  public notify(payload?: Payload): void {
    this.observers.forEach((observer) => observer.update(payload))
  }
}

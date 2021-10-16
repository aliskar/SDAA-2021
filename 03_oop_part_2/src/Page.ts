export class Page {
  constructor(public pageNumber: number, public pageType: string, public pageMaterial: string) {}

  toString() {
    return `here is page ${this.pageType} #${this.pageNumber} and it's material is ${this.pageMaterial}`;
  }
}

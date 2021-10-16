import { Page } from './page';

export class Pages {
  constructor(private pages: Page[]) {}

  public get count() {
    return this.pages.length;
  }

  public getPage(page: number) {
    return this.pages[page];
  }
}

import { Page } from './page';
import { Pages } from './pages';

export const enum PageVariant {
  Book,
  Comics,
  Magazine,
}

const enum PageType {
  Book = 'with text',
  Magazine = 'with article',
  Comics = 'with images',
}

const enum PageMaterial {
  Book = 'simple paper',
  Magazine = 'glossy paper',
  Comics = 'glossy paper',
}

export class PagesFactory {
  public static createBookPages(count: number) {
    return new Pages(
      Array(count)
        .fill(0)
        .map((_el, i) => new BookPage(i + 1))
    );
  }

  public static createComicsPages(count: number) {
    return new Pages(
      Array(count)
        .fill(0)
        .map((_el, i) => new ComicsPage(i + 1))
    );
  }

  public static createMagazinePages(count: number) {
    return new Pages(
      Array(count)
        .fill(0)
        .map((_el, i) => new MagazinePage(i + 1))
    );
  }
}

class BookPage extends Page {
  constructor(pageNumber: number) {
    super(pageNumber, PageType.Book, PageMaterial.Book);
  }
}

class ComicsPage extends Page {
  constructor(pageNumber: number) {
    super(pageNumber, PageType.Comics, PageMaterial.Comics);
  }
}

class MagazinePage extends Page {
  constructor(pageNumber: number) {
    super(pageNumber, PageType.Magazine, PageMaterial.Magazine);
  }
}

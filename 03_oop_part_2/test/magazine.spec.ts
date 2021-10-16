import { Pages } from '../src/pages';
import { Page } from '../src/page';
import { Magazine } from '../src/magazine';
import { PagesFactory, PageVariant } from '../src/PageFactory';

describe('Magazine', () => {
  it('without PageFactory - toString should return correct value', () => {
    let counter = 1;
    const magazine = new Magazine(
      'G.Q',
      new Pages([new Page(1, 'with article', 'glossy paper'), new Page(2, 'with article', 'glossy paper')])
    );

    for (const page of magazine) {
      expect(page.toString()).toEqual(
        `Magazine: G.Q with number of pages: 2, here is page with article #${counter} and it\'s material is glossy paper`
      );
      counter++;
    }
  });

  it('with PageFactory - toString should return correct value', () => {
    let counter = 1;
    const magazine = new Magazine('G.Q', PagesFactory.createMagazinePages(2));

    for (const page of magazine) {
      expect(page.toString()).toEqual(
        `Magazine: G.Q with number of pages: 2, here is page with article #${counter} and it\'s material is glossy paper`
      );
      counter++;
    }
  });
});

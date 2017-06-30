import { PruebaUxPage } from './app.po';

describe('prueba-ux App', function() {
  let page: PruebaUxPage;

  beforeEach(() => {
    page = new PruebaUxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

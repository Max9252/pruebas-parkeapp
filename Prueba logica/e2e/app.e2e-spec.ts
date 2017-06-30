import { PruebaLogicaPage } from './app.po';

describe('prueba-logica App', function() {
  let page: PruebaLogicaPage;

  beforeEach(() => {
    page = new PruebaLogicaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

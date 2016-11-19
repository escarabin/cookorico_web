import { CookoricoWebPage } from './app.po';

describe('cookorico-web App', function() {
  let page: CookoricoWebPage;

  beforeEach(() => {
    page = new CookoricoWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

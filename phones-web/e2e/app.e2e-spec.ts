import { PhonesWebPage } from './app.po';

describe('phones-web App', () => {
  let page: PhonesWebPage;

  beforeEach(() => {
    page = new PhonesWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

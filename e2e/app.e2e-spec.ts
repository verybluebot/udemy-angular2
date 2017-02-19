import { HamstersBookPage } from './app.po';

describe('hamsters-book App', () => {
  let page: HamstersBookPage;

  beforeEach(() => {
    page = new HamstersBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hb works!');
  });
});

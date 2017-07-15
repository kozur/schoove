import { SchooveAppPage } from './app.po';

describe('schoove-app App', () => {
  let page: SchooveAppPage;

  beforeEach(() => {
    page = new SchooveAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

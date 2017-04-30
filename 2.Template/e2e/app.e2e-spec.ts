import { TemplateSyntexPage } from './app.po';

describe('template-syntex App', function() {
  let page: TemplateSyntexPage;

  beforeEach(() => {
    page = new TemplateSyntexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ContentProjectionPage } from './app.po';

describe('content-projection App', function() {
  let page: ContentProjectionPage;

  beforeEach(() => {
    page = new ContentProjectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

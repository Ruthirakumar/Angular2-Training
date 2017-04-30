import { RoutingPart3Page } from './app.po';

describe('routing-part3 App', function() {
  let page: RoutingPart3Page;

  beforeEach(() => {
    page = new RoutingPart3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

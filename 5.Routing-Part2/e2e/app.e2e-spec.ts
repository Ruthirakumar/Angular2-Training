import { RoutingPart2Page } from './app.po';

describe('routing-part2 App', function() {
  let page: RoutingPart2Page;

  beforeEach(() => {
    page = new RoutingPart2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

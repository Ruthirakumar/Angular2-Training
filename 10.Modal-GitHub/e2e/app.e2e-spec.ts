import { SampleModalPage } from './app.po';

describe('sample-modal App', function() {
  let page: SampleModalPage;

  beforeEach(() => {
    page = new SampleModalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

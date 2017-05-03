import { Form2Page } from './app.po';

describe('form2 App', function() {
  let page: Form2Page;

  beforeEach(() => {
    page = new Form2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

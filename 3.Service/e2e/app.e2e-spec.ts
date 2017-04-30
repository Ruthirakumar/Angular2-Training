import { ServiceLearningPage } from './app.po';

describe('service-learning App', function() {
  let page: ServiceLearningPage;

  beforeEach(() => {
    page = new ServiceLearningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

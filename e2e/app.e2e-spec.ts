import { Angular2SampleProjectPage } from './app.po';

describe('angular2-sample-project App', function() {
  let page: Angular2SampleProjectPage;

  beforeEach(() => {
    page = new Angular2SampleProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

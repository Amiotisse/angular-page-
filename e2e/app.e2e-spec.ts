import { AngularPagePage } from './app.po';

describe('angular-page- App', function() {
  let page: AngularPagePage;

  beforeEach(() => {
    page = new AngularPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

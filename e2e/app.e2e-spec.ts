import { Jameswebsite2Page } from './app.po';

describe('jameswebsite2 App', function() {
  let page: Jameswebsite2Page;

  beforeEach(() => {
    page = new Jameswebsite2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { BlinkityBlinkPage } from './app.po';

describe('blinkity-blink App', function() {
  let page: BlinkityBlinkPage;

  beforeEach(() => {
    page = new BlinkityBlinkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { GameoflifeUiPage } from './app.po';

describe('gameoflife-ui App', function() {
  let page: GameoflifeUiPage;

  beforeEach(() => {
    page = new GameoflifeUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

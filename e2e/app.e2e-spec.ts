import { TodoFrontPage } from './app.po';

describe('todo-front App', () => {
  let page: TodoFrontPage;

  beforeEach(() => {
    page = new TodoFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

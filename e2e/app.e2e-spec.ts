import { DashboardAdminLTEPage } from './app.po';

describe('dashboard-admin-lte App', () => {
  let page: DashboardAdminLTEPage;

  beforeEach(() => {
    page = new DashboardAdminLTEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

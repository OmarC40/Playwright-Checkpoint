import { test, expect } from '@playwright/test';
import { LoginTime } from '../pageobjects/LoginTime';
import { DashBoard } from '../pageobjects/DashboardPage';
import { Timesheet } from '../pageobjects/Timesheet';
import creds from '../utils/TestDataLoginPage.json';

test('Login', async ({ page, baseURL }) => {
  test.setTimeout(120_000);
  const login = new LoginTime(page);
  const dash = new DashBoard(page);
  const time = new Timesheet(page);


  await login.goTo();

 
  await expect(login.userIdTitle).toBeVisible();
  await expect(login.passwordTitle).toBeVisible();
  await expect(login.signInButton).toBeVisible();


  await login.login(creds.username, creds.password);

 
  await expect(page).toHaveTitle('Homepage');

  
  
  await expect(dash.navBarButton).toBeVisible();
  await dash.clickNav();
  await expect(dash.menu).toBeVisible();
  await dash.clickMenuButton();
  await expect(dash.selfserviceButton).toBeVisible();
  await dash.clickServiceButton();  
  await expect(dash.timeReportingButton).toBeVisible(); 
  await dash.clickTimeReporting();
  await expect(dash.reportTime).toBeVisible();   
  await dash.clickReportTime();
  await expect(dash.timesheet).toBeVisible();      
  await Promise.all([
  page.waitForNavigation({ waitUntil: "domcontentloaded" }),
  dash.clickTimeSheet(),
]);
  await time.fillWeekdaysWith8()
  await time.selectTRC("MHRSI");
  await time.selectLookupOptionBussinessUnitPC("APCSV");
  await time.selectLookupOptionProjectID("10611");
  await time.selectLookupOptionActivityID("NB_HRS");

  await page.evaluate(() => window.scrollBy(500, 0));
  await page.waitForTimeout(7000);
  


});

//npx playwright test --ui
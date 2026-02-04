import { test, expect } from '@playwright/test';
import { LoginTime } from '../pageobjects/LoginTime';
import { DashBoard } from '../pageobjects/DashboardPage';
import creds from '../utils/TestDataLoginPage.json';

test('Login', async ({ page, baseURL }) => {
  const login = new LoginTime(page);
  const dash = new DashBoard(page);

  await login.goTo();

 
  await expect(login.userIdTitle).toBeVisible();
  await expect(login.passwordTitle).toBeVisible();
  await expect(login.signInButton).toBeVisible();


  await login.login(creds.username, creds.password);

   await page.waitForTimeout(6000);

 
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
  await dash.clickTimeSheet()

  await page.waitForTimeout(6000);


});

//npx playwright test --ui
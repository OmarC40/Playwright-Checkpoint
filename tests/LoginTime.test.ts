import { test, expect } from '@playwright/test';
import { LoginTime } from '../pageobjects/LoginTime';

test('Login', async ({ page, baseURL }) => {
  const login = new LoginTime(page);

  await login.goTo();

 
  await expect(login.userIdTitle).toBeVisible();
  await expect(login.passwordTitle).toBeVisible();
  await expect(login.signInButton).toBeVisible();


  //await login.login('test@test.com', 'password123');

 
  //await expect(page).toHaveTitle('My Account');
});

//npx playwright test --ui